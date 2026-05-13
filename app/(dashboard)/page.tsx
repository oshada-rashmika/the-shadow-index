import { Targets } from '@/lib/db';

export default async function Dashboard() {
  'use cache';

  return (
    <main className='p-10 bg-[#0a0a0a] min-h-screen'>
      <h1 className="text-3xl font-serif text-[#b21a1a] mb-8">Intelligence Feed</h1>
      <div className='grid gap-4 border border-white/10 rounded-lg p-4 hover:border-[#b21a1a]/50'>
        {Targets.map((target) => (
          <div key={target.id}>
            <h3>{target.alias}</h3>
            <p>Threat Level: {target.threatLevel}</p>
            <p>Status: {target.status}</p>
            <p>{target.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}