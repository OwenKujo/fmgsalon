import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '');

interface SeoEntry {
  id: string;
  path: string; // exact or prefix
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  robots?: string;
}

function loadEntries(): SeoEntry[] {
  try {
    const raw = localStorage.getItem('seoEntries');
    if (!raw) return [];
    return JSON.parse(raw) as SeoEntry[];
  } catch {
    return [];
  }
}

export default function Seo() {
  const loc = useLocation();
  const [entry, setEntry] = useState<SeoEntry | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchEntries = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/seo`);
        if (!res.ok) throw new Error('no-api');
        const data: SeoEntry[] = await res.json();
        if (cancelled) return;
        // Exact match first
        let found = data.find((e) => e.path === loc.pathname);
        if (!found) {
          found = data.find((e) => e.path !== '/' && loc.pathname.startsWith(e.path));
        }
        if (!found) {
          found = data.find((e) => e.path === '/');
        }
        setEntry(found || null);
        return;
      } catch (err) {
        // fallback to localStorage
        const entries = loadEntries();
        let found = entries.find((e) => e.path === loc.pathname);
        if (!found) {
          found = entries.find((e) => e.path !== '/' && loc.pathname.startsWith(e.path));
        }
        if (!found) {
          found = entries.find((e) => e.path === '/');
        }
        if (!cancelled) setEntry(found || null);
      }
    };
    fetchEntries();
    return () => { cancelled = true; };
  }, [loc.pathname]);

  const siteTitle = 'FMG Salon & Wellness';

  if (!entry) {
    return (
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content="FMG Salon & Wellness - ดูแลผมและสุขภาพความงาม" />
      </Helmet>
    );
  }

  return (
    <Helmet>
      <title>{entry.title ? `${entry.title} — ${siteTitle}` : siteTitle}</title>
      {entry.description && <meta name="description" content={entry.description} />}
      {entry.robots && <meta name="robots" content={entry.robots} />}
      {entry.canonical && <link rel="canonical" href={entry.canonical} />}
      {entry.ogTitle && <meta property="og:title" content={entry.ogTitle} />}
      {entry.ogDescription && <meta property="og:description" content={entry.ogDescription} />}
      {entry.ogImage && <meta property="og:image" content={entry.ogImage} />}
    </Helmet>
  );
}
