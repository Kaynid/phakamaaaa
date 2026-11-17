import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reports } from '@/lib/demo-data';

export default function ReportPage({ params }: { params: { id: string } }) {
  const report = reports.find((entry) => entry.id === params.id);

  if (!report) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Back to home</Link>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">{report.status}</span>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="p-4 sm:p-6">
            <img src={report.image} alt={report.location} className="h-[320px] w-full rounded-[1.6rem] object-cover" />
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[report.image, report.image, report.image].map((img, index) => (
                <img key={index} src={img} alt={`${report.location} ${index + 1}`} className="h-28 w-full rounded-2xl object-cover" />
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-6 lg:border-l lg:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Report reference</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">{report.id}</h1>

            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2"><span>Location</span><span className="font-semibold text-slate-900">{report.location}</span></div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2"><span>Suburb</span><span className="font-semibold text-slate-900">{report.suburb}</span></div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2"><span>Severity</span><span className="font-semibold text-slate-900">{report.severity}</span></div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2"><span>Community confirmations</span><span className="font-semibold text-slate-900">{report.confirmations}</span></div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2"><span>GPS</span><span className="font-semibold text-slate-900">{report.coords[0].toFixed(4)}, {report.coords[1].toFixed(4)}</span></div>
              <div className="flex items-center justify-between"><span>Created</span><span className="font-semibold text-slate-900">{report.date}</span></div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">Status history</h2>
          <div className="mt-5 space-y-4">
            {[
              ['Submitted', 'Citizen report received and logged.', '2026-11-12'],
              ['Received', 'Report assigned to review queue.', '2026-11-13'],
              ['Awaiting municipal acknowledgement', 'Awaiting official response from municipality.', '2026-11-14'],
            ].map(([label, note, date]) => (
              <div key={label} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-phakama-orange" />
                <div>
                  <p className="font-semibold text-slate-900">{label}</p>
                  <p className="text-sm text-slate-600">{note}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-slate-900">Community verification</h2>
          <div className="mt-5 space-y-3">
            <button className="w-full rounded-full bg-emerald-500 px-4 py-3 font-semibold text-white hover:bg-emerald-600">Still there</button>
            <button className="w-full rounded-full bg-slate-900 px-4 py-3 font-semibold text-white hover:bg-slate-700">Has been repaired</button>
          </div>
          <p className="mt-4 text-sm text-slate-600">Verification prevents false repair confirmations and keeps public trust high.</p>
        </div>
      </section>
    </main>
  );
}
