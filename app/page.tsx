import Link from 'next/link';

const groups = [
  {
    name: "Unividual Philosophy",
    link: "https://t.me/+Q-FHq1hAmfRiN2Q0",
    description: "Deep philosophical discussions and exploration of Unividualism. [Add your description here]",
    emoji: "🧠",
  },
  {
    name: "Unividual Living",
    link: "https://t.me/+MQDldVYcxXZkMGZk",
    description: "Practical application and everyday living of Unividual principles. [Add your description here]",
    emoji: "🌱",
  },
  {
    name: "Unividual Guides",
    link: "https://t.me/+ykQqRV8MffgyMjc0",
    description: "Guides, resources, and structured support for the journey. [Add your description here]",
    emoji: "🗺️",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Unividualism Telegram Groups</h1>
          <p className="text-xl text-zinc-400">Choose the groups that resonate with you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {groups.map((group) => (
            <div key={group.name} className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-zinc-700 flex flex-col">
              <div className="text-6xl mb-6">{group.emoji}</div>
              <h3 className="text-2xl font-semibold mb-3">{group.name}</h3>
              <p className="text-zinc-400 mb-8 flex-grow">{group.description}</p>
              <a
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-zinc-100 text-black font-semibold py-4 rounded-2xl text-center transition"
              >
                Join {group.name} →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">How to Join</h2>
          <div className="space-y-6 text-lg">
            <div>1. Download Telegram on your phone</div>
            <div>2. Create or log into your account</div>
            <div>3. Tap the "Join" button for the group(s) you want</div>
            <div className="text-amber-400">4. After joining → tap ⋮ (top right) → "View as Topics"</div>
          </div>
        </div>

        <div className="text-center text-zinc-500">
          Need help? Contact <a href="mailto:jessicaevenathanson@gmail.com" className="text-blue-400 underline">Jessica</a>
        </div>
      </div>
    </main>
  );
}
