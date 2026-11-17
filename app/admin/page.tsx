import Link from 'next/link';

const rows = [
  { role: 'Citizen', access: 'Reports only', status: 'Active' },
  { role: 'Moderator', access: 'Flag, review and verify', status: 'Active' },
  { role: 'Municipal representative', access: 'Assigned municipality only', status: 'Restricted' },
  { role: 'Administrator', access: 'All districts', status: 'Active' },
];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Administration</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Municipal oversight dashboard</h1>
        </div>
        <Link href="/" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Back to home</Link>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ['4,382', 'Reports received'],
          ['1,104', 'Awaiting review'],
          ['438', 'Duplicates flagged'],
          ['92%', 'Verification completion'],
        ].map(([value, label]) => (
          <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">{label}</p>
            <h3 className="mt-2 text-3xl font-black text-slate-900">{value}</h3>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Role-based access controls</h2>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Export CSV</button>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Role</th>
                <th className="px-4 py-3 font-semibold">Access scope</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {rows.map((row) => (
                <tr key={row.role}>
                  <td className="px-4 py-3 font-medium text-slate-900">{row.role}</td>
                  <td className="px-4 py-3 text-slate-600">{row.access}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${row.status === 'Restricted' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
