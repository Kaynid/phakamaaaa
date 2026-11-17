import Link from 'next/link';

export default function AuthPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white shadow-soft lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">PHAKAMA</p>
          <h1 className="mt-4 text-4xl font-black">Track road issues with confidence.</h1>
          <p className="mt-4 text-slate-300">Sign in to save reports, receive notices and follow the progress of the roads you care about.</p>
          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">• Optional Google sign-in</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">• Guest reporting without mandatory registration</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">• End-to-end report tracking and notifications</div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Access</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Welcome back</h2>
            </div>
            <Link href="/" className="text-sm font-medium text-slate-600">Home</Link>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" defaultValue="citizen@phakama.org" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-slate-400 focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" defaultValue="password" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-slate-400 focus:outline-none" />
            </div>
            <button type="button" className="w-full rounded-full bg-phakama-orange px-4 py-3 font-semibold text-white hover:bg-orange-500">Sign in</button>
            <button type="button" className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-800 hover:bg-slate-50">Continue with Google</button>
          </form>
        </div>
      </div>
    </main>
  );
}
