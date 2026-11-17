"use client";

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import type { Report } from '@/lib/demo-data';

function makeMarkerIcon(color: string) {
  return L.divIcon({
    className: '',
    html: `<span style="display:flex;align-items:center;justify-content:center;height:18px;width:18px;border-radius:9999px;border:2px solid white;background:${color};box-shadow:0 8px 18px rgba(15,23,42,.18);"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

const colorFromStatus = (status: string) => {
  switch (status) {
    case 'Resolved':
      return '#22c55e';
    case 'Repair in progress':
      return '#f59e0b';
    case 'Awaiting municipal acknowledgement':
      return '#f97316';
    case 'Received':
      return '#38bdf8';
    default:
      return '#64748b';
  }
};

export function PhaMap({
  reports,
  selectedReportId,
  onSelectReport,
}: {
  reports: Report[];
  selectedReportId: string;
  onSelectReport: (id: string) => void;
}) {
  return (
    <MapContainer center={[-26.2041, 28.0473]} zoom={10} scrollWheelZoom className="h-full w-full rounded-[1.5rem]">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {reports.map((report) => (
        <Marker
          key={report.id}
          position={report.coords}
          icon={makeMarkerIcon(colorFromStatus(report.status))}
          eventHandlers={{
            click: () => onSelectReport(report.id),
          }}
        >
          <Popup>
            <div className="max-w-[220px]">
              <div className="mb-2 flex items-center gap-2">
                <img src={report.image} alt={report.location} className="h-14 w-14 rounded-lg object-cover" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{report.id}</p>
                  <p className="text-sm font-bold text-slate-900">{report.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600">{report.suburb} • {report.severity}</p>
              <p className="mt-2 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-700">{report.status}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
