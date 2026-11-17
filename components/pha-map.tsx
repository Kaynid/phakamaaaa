"use client";

import { useState } from 'react';
import { PhaMap } from '@/components/pha-map';
import { reports } from '@/lib/demo-data';

export default function MapPage() {
  const [selectedReportId, setSelectedReportId] = useState(reports[0].id);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Map view</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Potholes across South Africa</h1>
        </div>
      </div>
      <div className="h-[72vh] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft p-2">
        <PhaMap reports={reports} selectedReportId={selectedReportId} onSelectReport={setSelectedReportId} />
      </div>
    </main>
  );
}
