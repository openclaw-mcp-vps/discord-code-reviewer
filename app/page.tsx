export default function Home() {
  const faqs = [
    {
      q: "Which languages does the bot support?",
      a: "JavaScript, TypeScript, Python, Rust, Go, Java, C/C++, and more. Any code block posted in Discord gets analyzed automatically."
    },
    {
      q: "How do I add the bot to my server?",
      a: "After subscribing, you'll receive an invite link and a dashboard to configure which channels the bot monitors."
    },
    {
      q: "Can I customize the review strictness?",
      a: "Yes. The dashboard lets you set review depth (quick tips vs. deep analysis) and toggle specific rule categories per channel."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Discord Dev Servers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Instant AI Code Review<br />Right in Discord
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Drop a code snippet in any channel and get automated feedback with syntax highlighting in seconds. No context switching, no extra tools.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Add to Discord — $15/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block"></span>
            <span className="text-[#8b949e] ml-2">#code-review</span>
          </div>
          <p className="text-[#8b949e] mb-2"><span className="text-[#58a6ff]">alex</span>: can someone review this?</p>
          <pre className="bg-[#0d1117] rounded p-3 text-[#c9d1d9] overflow-x-auto mb-3">{`function sum(arr) {
  let total = 0
  for (var i = 0; i <= arr.length; i++)
    total += arr[i]
  return total
}`}</pre>
          <p className="text-[#8b949e] mb-1"><span className="text-[#3fb950]">CodeReviewer Bot</span>:</p>
          <ul className="text-[#c9d1d9] space-y-1 pl-2">
            <li><span className="text-[#f85149]">⚠ Line 3:</span> Use <code className="bg-[#0d1117] px-1 rounded">let</code> instead of <code className="bg-[#0d1117] px-1 rounded">var</code></li>
            <li><span className="text-[#f85149]">⚠ Line 3:</span> Off-by-one: <code className="bg-[#0d1117] px-1 rounded">i &lt;= arr.length</code> should be <code className="bg-[#0d1117] px-1 rounded">i &lt; arr.length</code></li>
            <li><span className="text-[#3fb950]">✓</span> Consider <code className="bg-[#0d1117] px-1 rounded">Array.reduce</code> for cleaner code</li>
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-wide text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-[#c9d1d9]">
            {[
              "Unlimited code reviews",
              "All supported languages",
              "Up to 5 Discord servers",
              "Configurable review depth",
              "Syntax-highlighted feedback",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
