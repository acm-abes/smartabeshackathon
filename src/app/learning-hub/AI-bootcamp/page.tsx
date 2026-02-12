/** @format */

export default function AIBootcampPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      {/* SVG Drawing Layer */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <defs>
          <marker
            id="arrow-bootcamp"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#165a94" />
          </marker>
        </defs>
        <rect
          x="5%"
          y="5%"
          width="90%"
          height="90%"
          fill="none"
          stroke="#165a94"
          strokeWidth="2"
          className="opacity-30"
        />
        <line
          x1="5%"
          y1="10%"
          x2="95%"
          y2="10%"
          stroke="#165a94"
          strokeWidth="1"
          markerEnd="url(#arrow-bootcamp)"
          className="opacity-30"
        />
      </svg>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#165a94] font-mono tracking-tight">
            AI Agent Mastery Bootcamp 2026
          </h1>
          <div className="w-32 h-0.5 bg-[#165a94] mx-auto mb-6"></div>
          <div className="flex justify-center items-center gap-8 text-white/80 font-mono">
            <p className="text-lg">📅 From 12 February 2026 to 14 February 2026</p>
            <p className="text-lg">🕒 04:00 PM - 06:00 PM</p>
          </div>
        </div>

        {/* Speaker Info Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4">
              Speakers
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#165a94]/20 rounded-full flex items-center justify-center text-3xl">
                🎤
              </div>
              <div>
                <p className="text-xl font-bold text-white font-mono">
                  Docker Captain Naman Kaley & Co-founder Ritu Soni
                </p>
                <p className="text-white/70 font-mono">SkillBrew.AI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bootcamp Overview */}
          <section className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4 border-b-2 border-[#165a94]/30 pb-2">
              Bootcamp Overview
            </h2>
            <div className="text-white/90 font-mono space-y-4">
              <p>
                Join us for an intensive 3-day bootcamp designed to transform your understanding of AI agents 
                and their real-world applications. This comprehensive program will take you from fundamental 
                concepts to practical implementation.
              </p>
              <p>
                Students will learn what AI agents are, how they differ from traditional AI systems, and where 
                they're used in real-world applications.
              </p>
              <p>
                The session covers agent workflows, tool usage, memory, decision-making, and practical use cases.
              </p>
              <p>
                The final day will focus on soft skills, interview skills, and other related topics.
              </p>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4 border-b-2 border-[#165a94]/30 pb-2">
              What You Will Learn
            </h2>
            <div className="text-white/90 font-mono space-y-4">
              <h3 className="text-xl font-semibold text-[#165a94]">Day 1: Foundations</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Understanding AI agents and their core principles</li>
                <li>How AI agents differ from traditional AI systems</li>
                <li>Real-world applications and use cases</li>
                <li>Agent architectures and design patterns</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#165a94] mt-6">Day 2: Technical Deep Dive</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Agent workflows and orchestration</li>
                <li>Tool usage and integration strategies</li>
                <li>Memory management in AI agents</li>
                <li>Decision-making algorithms and frameworks</li>
                <li>Hands-on implementation exercises</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#165a94] mt-6">Day 3: Career & Professional Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Soft skills for AI professionals</li>
                <li>Interview preparation and techniques</li>
                <li>Building a portfolio with AI projects</li>
                <li>Networking and career growth strategies</li>
              </ul>
            </div>
          </section>

          {/* About the Speakers */}
          <section className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4 border-b-2 border-[#165a94]/30 pb-2">
              About the Speakers
            </h2>
            <div className="text-white/90 font-mono space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Naman Kaley</h3>
                <p>
                  Docker Captain
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Ritu Soni</h3>
                <p>
                  Co-founder of SkillBrew.AI
                </p>
              </div>
            </div>
          </section>

          {/* Prerequisites & Registration 
          <section className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4 border-b-2 border-[#165a94]/30 pb-2">
              Prerequisites
            </h2>
            <div className="text-white/90 font-mono space-y-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Basic understanding of Python programming</li>
                <li>Familiarity with machine learning concepts (recommended)</li>
                <li>Laptop with development environment set up</li>
                <li>Enthusiasm to learn and experiment!</li>
              </ul>
            </div>
          </section>*/}

          {/* Resources & Links */}
          <section className="bg-white/5 backdrop-blur-sm border-2 border-[#165a94] p-8">
            <h2 className="text-2xl font-bold text-[#165a94] font-mono mb-4 border-b-2 border-[#165a94]/30 pb-2">
              Resources & Links
            </h2>
            <div className="text-white/90 font-mono space-y-2">
              <p>Resources and session recordings will be added here after the bootcamp.</p>
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center py-8">
            <a
              href="/learning-hub"
              className="inline-block bg-[#165a94] hover:bg-[#3791c4] text-white font-mono px-8 py-3 border-2 border-[#165a94] hover:border-[#5fb8dc] transition-all duration-300"
            >
              ← Back to Learning Hub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
