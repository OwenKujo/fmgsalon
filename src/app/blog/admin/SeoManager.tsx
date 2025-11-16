import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminPass } from '../RequireAdmin';

const API_BASE = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '');

interface SeoEntry {
  _id?: string;
  path: string;
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  robots?: string;
}

export default function SeoManager() {
  const [entries, setEntries] = useState<SeoEntry[]>([]);
  const [editing, setEditing] = useState<SeoEntry | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const adminPass = useAdminPass();

  useEffect(() => {
    const fetchEntries = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/seo`);
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setEntries(data);
      } catch (e) {
        // fallback to localStorage if API not available
        try {
          const raw = localStorage.getItem('seoEntries');
          setEntries(raw ? JSON.parse(raw) : []);
        } catch { setEntries([]); }
      } finally {
        setLoading(false);
      }
    };
    fetchEntries();
  }, []);

  const importLocal = async () => {
    const raw = localStorage.getItem('seoEntries');
    if (!raw) return alert('ไม่พบรายการในเครื่องนี้');
    if (!adminPass) return alert('ต้องล็อกอินด้วยรหัสผู้ดูแลเพื่อทำการนำเข้า');
    try {
      const arr = JSON.parse(raw) as SeoEntry[];
      for (const e of arr) {
        // skip if path already exists
        const exists = entries.find((it) => it.path === e.path);
        if (exists) continue;
        await fetch(`${API_BASE}/api/seo`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-admin-pass': adminPass || '' },
          body: JSON.stringify(e),
        });
      }
      // refresh
      const res = await fetch(`${API_BASE}/api/seo`);
      if (res.ok) setEntries(await res.json());
      alert('นำเข้าสำเร็จ');
    } catch (err: any) {
      alert('การนำเข้าไม่สำเร็จ: ' + (err.message || err));
    }
  };

  const startNew = () => setEditing({ path: '/', title: '', description: '', ogImage: '', canonical: '', robots: '' });

  const editEntry = (id?: string) => {
    const e = entries.find((x) => x._id === id) || null;
    setEditing(e);
  };

  const deleteEntry = async (id?: string) => {
    if (!id) return;
    if (!window.confirm('ต้องการลบรายการ SEO นี้หรือไม่?')) return;
    try {
      const res = await fetch(`${API_BASE}/api/seo/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-pass': adminPass || '' },
      });
      if (!res.ok) throw new Error('Delete failed');
      setEntries((e) => e.filter((it) => it._id !== id));
      setEditing(null);
    } catch (err: any) {
      setError(err.message || 'Delete failed');
    }
  };

  const save = async () => {
    if (!editing) return;
    setError('');
    try {
      if (editing._id) {
        const res = await fetch(`${API_BASE}/api/seo/${editing._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'x-admin-pass': adminPass || '' },
          body: JSON.stringify(editing),
        });
        if (!res.ok) throw new Error('Save failed');
        const updated = await res.json();
        setEntries((arr) => arr.map((a) => (a._id === updated._id ? updated : a)));
        setEditing(null);
      } else {
        const res = await fetch(`${API_BASE}/api/seo`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-admin-pass': adminPass || '' },
          body: JSON.stringify(editing),
        });
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(txt || 'Create failed');
        }
        const created = await res.json();
        setEntries((arr) => [...arr, created]);
        setEditing(null);
      }
    } catch (err: any) {
      setError(err.message || 'Save failed');
    }
  };

  const handleOgFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file || !editing) return;
    setError('');
    setUploading(true);
    try {
      const form = new FormData();
      form.append('image', file);
      const res = await fetch(`${API_BASE}/api/upload/image`, {
        method: 'POST',
        body: form,
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || 'Upload failed');
      }
      const data = await res.json();
      setEditing({ ...editing, ogImage: data.url });
    } catch (err: any) {
      setError(err.message || 'การอัพโหลดรูปไม่สำเร็จ');
    } finally {
      setUploading(false);
      // reset file input value so same file can be reselected if needed
      if (e.target) e.target.value = '';
    }
  };

  return (
    <div className="pt-[60px] min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8 mt-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">จัดการ SEO</h1>
          <div className="flex gap-2">
            <button onClick={() => navigate('/blog/admin')} className="px-3 py-2 border rounded">← กลับ</button>
            <button onClick={startNew} className="bg-[#D4B595] text-white px-3 py-2 rounded">+ สร้างใหม่</button>
            {adminPass && localStorage.getItem('seoEntries') && (
              <button onClick={importLocal} className="px-3 py-2 border rounded">นำเข้าจากเครื่องนี้</button>
            )}
          </div>
        </div>

        {error && <div className="text-red-600 mb-4">{error}</div>}

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="font-semibold mb-3">รายการที่มี</h2>
            {loading ? (
              <div className="text-sm text-gray-500">กำลังโหลด...</div>
            ) : entries.length === 0 ? (
              <div className="text-sm text-gray-500">ยังไม่มีรายการ</div>
            ) : (
              <ul className="space-y-2">
                {entries.map(e => (
                  <li key={e._id} className="flex items-center justify-between border p-3 rounded">
                    <div>
                      <div className="font-medium">{e.path}</div>
                      <div className="text-sm text-gray-600">{e.title}</div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => editEntry(e._id)} className="px-3 py-1 border rounded">แก้ไข</button>
                      <button onClick={() => deleteEntry(e._id)} className="px-3 py-1 bg-red-500 text-white rounded">ลบ</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h2 className="font-semibold mb-3">ตัวแก้ไข</h2>
            {editing ? (
              <div className="space-y-3">
                <label className="block text-sm">เส้นทาง (เช่น /, /blog, /blog/my-post)</label>
                <input value={editing.path} onChange={(e) => setEditing({...editing, path: e.target.value})} className="w-full border p-2 rounded" />

                <label className="block text-sm">หัวข้อ (Title)</label>
                <input value={editing.title} onChange={(e) => setEditing({...editing, title: e.target.value})} className="w-full border p-2 rounded" />

                <label className="block text-sm">คำอธิบาย (Description)</label>
                <textarea value={editing.description} onChange={(e) => setEditing({...editing, description: e.target.value})} className="w-full border p-2 rounded h-24" />

                <label className="block text-sm">รูป Open Graphics (absolute หรือ /path)</label>
                <input value={editing.ogImage} onChange={(e) => setEditing({...editing, ogImage: e.target.value})} className="w-full border p-2 rounded" />
                <div className="mt-2 flex items-center gap-3">
                  <input type="file" accept="image/*" onChange={handleOgFileChange} className="" />
                  {uploading && <div className="text-sm text-gray-500">กำลังอัปโหลด...</div>}
                </div>
                {editing.ogImage && (
                  <div className="mt-3">
                    <div className="text-sm text-gray-500">ตัวอย่างรูป:</div>
                    <img src={editing.ogImage} alt="OG preview" className="mt-1 max-h-40 object-contain rounded border" />
                  </div>
                )}

                <label className="block text-sm">ลิงก์ชี้ URL ที่ต้องการให้เป็นต้นฉบับ (Canonical URL)</label>
                <input value={editing.canonical} onChange={(e) => setEditing({...editing, canonical: e.target.value})} className="w-full border p-2 rounded" />

                <label className="block text-sm">Robots (เช่น index,follow)</label>
                <input value={editing.robots} onChange={(e) => setEditing({...editing, robots: e.target.value})} className="w-full border p-2 rounded" />

                <div className="flex gap-2">
                  <button onClick={save} className="px-4 py-2 bg-amber-900 text-white rounded">บันทึก</button>
                  <button onClick={() => setEditing(null)} className="px-4 py-2 border rounded">ยกเลิก</button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500">เลือกหนึ่งรายการเพื่อแก้ไขหรือสร้างใหม่</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
