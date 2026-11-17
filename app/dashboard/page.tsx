import Link from 'next/link';

const reports = [
  ['PHA-2026-1042', 'Johannesburg South', 'Awaiting acknowledgement', 'Large pothole', 'R 18,400'],
  ['PHA-2026-1094', 'Cape Town CBD', 'Repair in progress', 'Severe surface damage', 'R 22,150'],
  ['PHA-2026-1167', 'Pretoria East', 'Resolved', 'Multiple potholes', 'R 9,800'],
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">My dashboard</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Your road reports</h1>
        </div>
        <Link href="/" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Home</Link>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ['12', 'Submitted'],
          ['7', 'Still open'],
          ['3', 'Resolved'],
          ['2', 'Need info'],
        ].map(([value, label]) => (
          <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">{label}</p>
            <h3 className="mt-2 text-3xl font-black text-slate-900">{value}</h3>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="text-xl font-bold text-slate-900">Recent submissions</h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Reference</th>
                <th className="px-4 py-3 font-semibold">Location</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Issue type</th>
                <th className="px-4 py-3 font-semibold">Estimate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {reports.map(([reference, location, status, issueType, estimate]) => (
                <tr key={reference}>
                  <td className="px-4 py-3 font-medium text-slate-900">{reference}</td>
                  <td className="px-4 py-3 text-slate-700">{location}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">{status}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{issueType}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{estimate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
