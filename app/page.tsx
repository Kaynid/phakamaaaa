"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPinned, MessageSquareWarning, Navigation, Search, ShieldCheck, TrendingUp } from 'lucide-react';
import { PhaMap } from '@/components/pha-map';
import { reports, stats, statusOptions } from '@/lib/demo-data';

const filters = ['All', ...statusOptions];

export default function HomePage() {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedReportId, setSelectedReportId] = useState(reports[0].id);

  const filteredReports = useMemo(() => {
    if (selectedStatus === 'All') return reports;
    return reports.filter((report) => report.status === selectedStatus);
  }, [selectedStatus]);

  const activeReport = filteredReports.find((report) => report.id === selectedReportId) ?? filteredReports[0] ?? reports[0];

  return (
    <main className="mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-phakama-orange text-lg font-black text-white shadow-lg shadow-orange-200">P</div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">PHAKAMA</p>
            <h1 className="text-xl font-bold text-slate-900">See it. Report it. Fix it.</h1>
          </div>
        </div>

        <nav className="flex items-center gap-2 text-sm text-slate-600">
          <Link href="/map" className="rounded-full px-3 py-2 transition hover:bg-slate-100">Map</Link>
          <Link href="/dashboard" className="rounded-full px-3 py-2 transition hover:bg-slate-100">Dashboard</Link>
          <Link href="/admin" className="rounded-full px-3 py-2 transition hover:bg-slate-100">Admin</Link>
          <Link href="/auth" className="rounded-full bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700">Login</Link>
        </nav>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-6 text-white shadow-soft">
          <div className="mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200">
            <ShieldCheck className="h-3.5 w-3.5 text-phakama-lime" />
            Community-powered road accountability for South Africa
          </div>
          <h2 className="max-w-xl text-3xl font-black leading-tight sm:text-5xl">Report road damage before it becomes a bigger problem.</h2>
          <p className="mt-4 max-w-lg text-sm text-slate-300 sm:text-base">
            PHAKAMA makes it easy to document potholes, share the location, and track whether the repair is truly progressing.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/auth" className="inline-flex items-center justify-center rounded-full bg-phakama-orange px-5 py-3 font-semibold text-white transition hover:bg-orange-500">
              Report a pothole
            </Link>
            <Link href="/map" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              View map
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <MapPinned className="h-4 w-4 text-phakama-lime" />
              1,284 reports this month
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <TrendingUp className="h-4 w-4 text-phakama-orange" />
              38% verified repair rate
            </div>
          </div>
        </motion.div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Quick search</p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">Find local issues</h3>
            </div>
            <Search className="h-5 w-5 text-slate-400" />
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              aria-label="Search by suburb or postcode"
              className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              placeholder="Search suburb, street or postal code"
            />
          </div>

          <div className="mt-5 space-y-3">
            {['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Gqeberha'].map((location) => (
              <button key={location} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-3 py-2 text-left transition hover:border-slate-300 hover:bg-slate-50">
                <span className="text-sm font-medium text-slate-700">{location}</span>
                <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">{Math.floor(Math.random() * 18) + 6}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{stat.label}</p>
                <h3 className="mt-3 text-3xl font-black text-slate-900">{stat.value}</h3>
              </div>
              <div className="rounded-2xl bg-orange-50 p-2 text-phakama-orange">{stat.icon}</div>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-phakama-orange" style={{ width: `${stat.progress}%` }} />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Live map</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">Nearby potholes</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedStatus(filter)}
                className={`rounded-full px-3 py-2 text-xs font-semibold transition ${selectedStatus === filter ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.5fr_0.7fr]">
          <PhaMap reports={filteredReports} selectedReportId={selectedReportId} onSelectReport={setSelectedReportId} />

          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Selected report</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={activeReport.image} alt={activeReport.location} className="h-16 w-16 rounded-2xl object-cover" />
                <div>
                  <h4 className="text-base font-bold text-slate-900">{activeReport.id}</h4>
                  <p className="text-sm text-slate-600">{activeReport.suburb}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="flex items-center justify-between"><span>Status</span><span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">{activeReport.status}</span></div>
                <div className="flex items-center justify-between"><span>Severity</span><span className="font-medium text-slate-800">{activeReport.severity}</span></div>
                <div className="flex items-center justify-between"><span>Confirmations</span><span className="font-medium text-slate-800">{activeReport.confirmations}</span></div>
              </div>
              <Link href={`/report/${activeReport.id}`} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                Open report
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-2">
              {filteredReports.slice(0, 4).map((report) => (
                <button
                  key={report.id}
                  onClick={() => setSelectedReportId(report.id)}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-2 text-left transition ${selectedReportId === report.id ? 'border-orange-200 bg-orange-50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
                >
                  <img src={report.image} alt={report.location} className="h-14 w-14 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-bold text-slate-900">{report.location}</p>
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-700">{report.status}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{report.suburb} • {report.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-5 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Reporting flow</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">Capture evidence in under 60 seconds</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-phakama-lime" /> Take a photo and auto-capture GPS.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-phakama-lime" /> Confirm location and damage severity.</li>
            <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 text-phakama-lime" /> Track the report and verify repair status.</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Verification</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">Public transparency</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3"><MessageSquareWarning className="mt-0.5 h-4 w-4 text-phakama-orange" /> Community confirmations are clearly separated from official municipal updates.</li>
            <li className="flex items-start gap-3"><MessageSquareWarning className="mt-0.5 h-4 w-4 text-phakama-orange" /> Reopened, duplicate and unable-to-verify flags remain visible.</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Ready for the next phase</p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">Built for future municipal integration</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3"><Navigation className="mt-0.5 h-4 w-4 text-sky-500" /> Multi-role access for citizens, moderators and representatives.</li>
            <li className="flex items-start gap-3"><Navigation className="mt-0.5 h-4 w-4 text-sky-500" /> Architecture supports assignment, CSV export and status tracking.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
