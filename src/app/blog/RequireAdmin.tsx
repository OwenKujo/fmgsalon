
import React, { useState, createContext, useContext } from "react";

export const AdminPassContext = createContext<string | null>(null);

export function useAdminPass() {
  return useContext(AdminPassContext);
}

export default function RequireAdmin({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [authed, setAuthed] = useState(false);
  const [adminPass, setAdminPass] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = process.env.REACT_APP_ADMIN_PASSWORD || "FMGservice008335";
    if (input === correct) {
      setAuthed(true);
      setAdminPass(input);
      setError("");
    } else {
      setError("รหัสผ่านไม่ถูกต้อง");
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f7f3]">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow w-full max-w-xs space-y-4">
          <h2 className="text-xl font-bold mb-2">เข้าสู่ระบบผู้ดูแล</h2>
          <input
            type="password"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="ใส่รหัสผ่านผู้ดูแล"
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-[#D4B595]"
            autoFocus
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#D4B595] hover:bg-[#c4a27e] text-white py-2 rounded font-semibold"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    );
  }

  return (
    <AdminPassContext.Provider value={adminPass}>
      {children}
    </AdminPassContext.Provider>
  );
}
