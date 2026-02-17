/** @format */

const results = [
  { rank: 1, team: "xnords", track: "AI", problem: "ai-ps-1" },
  { rank: 2, team: "Rusty", track: "DEFENCE", problem: "defence-ps-1" },
  { rank: 3, team: "Blockhashers", track: "WEB3", problem: "web3-ps-2" },
  { rank: 4, team: "Zenith", track: "AI", problem: "ai-ps-1" },
  { rank: 5, team: "Curious Coders", track: "AI", problem: "ai-ps-1" },
  { rank: 6, team: "Flux", track: "AI", problem: "ai-ps-3" },
  { rank: 7, team: "Matrix", track: "DEFENCE", problem: "defence-ps-1" },
  { rank: 8, team: "Erastus", track: "WEB3", problem: "web3-ps-2" },
  { rank: 9, team: "MindForge", track: "AI", problem: "ai-ps-4" },
  { rank: 10, team: "CodeBashers", track: "AI", problem: "ai-ps-2" },
  { rank: 11, team: "Code Wizard", track: "AI", problem: "ai-ps-1" },
  { rank: 12, team: "Drop2Life", track: "DEFENCE", problem: "defence-ps-1" },
  { rank: 13, team: "DevNexus", track: "AI", problem: "ai-ps-1" },
  {
    rank: 14,
    team: "HackHive [be3597d6]",
    track: "DEFENCE",
    problem: "defence-ps-1",
  },
  { rank: 15, team: "TeamX", track: "AI", problem: "ai-ps-1" },
  { rank: 16, team: "DEADLOCK", track: "WEB3", problem: "web3-ps-2" },
  { rank: 17, team: "Agile Ninjas", track: "AI", problem: "ai-ps-1" },
  { rank: 18, team: "Code_Assasins", track: "AI", problem: "ai-ps-2" },
  { rank: 19, team: "WEBFLEX", track: "DEFENCE", problem: "defence-ps-1" },
  { rank: 20, team: "techno Bytes", track: "AI", problem: "ai-ps-3" },
  { rank: 21, team: "theNovice", track: "AI", problem: "ai-ps-2" },
  { rank: 22, team: "BattleByte", track: "WEB3", problem: "web3-ps-2" },
  { rank: 23, team: "Future Innovators", track: "AI", problem: "ai-ps-1" },
  { rank: 24, team: "Tech Titans [6eaa401f]", track: "AI", problem: "ai-ps-4" },
  { rank: 25, team: "WebSpark", track: "AI", problem: "ai-ps-1" },
  { rank: 26, team: "CodeCrafters", track: "AI", problem: "ai-ps-4" },
  {
    rank: 27,
    team: "InsightSprint",
    track: "DEFENCE",
    problem: "defence-ps-3",
  },
  { rank: 28, team: "Crusader", track: "WEB3", problem: "web3-ps-2" },
  { rank: 29, team: "Sacred Eye", track: "AI", problem: "ai-ps-1" },
  { rank: 30, team: "SyntaxX", track: "AI", problem: "ai-ps-2" },
];

const Round1Results = () => {
  const podium = results.slice(0, 3);
  const rest = results.slice(3);

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-16">
      <section className="relative mx-auto w-full max-w-6xl">
        <header className="results-hero">
          <p className="results-eyebrow">Round 1 Results</p>
          <h1 className="results-title">Results Are Out</h1>
          <p className="results-subtitle">
            Top teams from every track. Check your global rank and problem
            statement below.
          </p>
        </header>

        <div className="results-podium">
          {[podium[1], podium[0], podium[2]].map((entry, index) => (
            <div
              key={entry.rank}
              className={`results-podium-card results-podium-${index === 1 ? "first" : index === 0 ? "second" : "third"}`}
            >
              <div className="results-rank">#{entry.rank}</div>
              <div className="results-team">{entry.team}</div>
              <div className="results-track">{entry.track}</div>
              <div className="results-problem">{entry.problem}</div>
            </div>
          ))}
        </div>

        <div className="results-table">
          <div className="results-table-head">
            <span>Rank</span>
            <span>Team</span>
            <span>Track</span>
            <span>Problem</span>
          </div>
          {rest.map((entry) => (
            <div key={entry.rank} className="results-row">
              <span className="results-row-rank">{entry.rank}</span>
              <span className="results-row-team">{entry.team}</span>
              <span className="results-row-track">{entry.track}</span>
              <span className="results-row-problem">{entry.problem}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Round1Results;
