/** @format */

import Link from "next/link";

const Defence = () => {
  return (
    <div className="min-h-screen w-full px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 mt-10">
          <h1 className="text-5xl font-bold text-[#165a94] mb-4 font-mono">
            Defence Problem Statements
          </h1>
          <div className="h-1 w-32 bg-[#165a94] mb-6"></div>
        </div>

        {/* Problem Statements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PS-1 */}
          <Link href="/problem-statements/defence/ps-1">
            <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-semibold text-white mb-1">
                Autonomous Surveillance Path Optimisation
              </h3>
              <p className="mb-2">
                <span className="text-white/70">from</span> Mr Vijay Kumar
                Shukla
              </p>
              <p className="text-white/70 text-sm">
                Design a path planning algorithm for unmanned surveillance
                drones that maximizes area coverage while minimizing energy
                consumption and ensuring safe navigation.
              </p>
            </div>
          </Link>

          {/* PS-2 */}
          <Link href="/problem-statements/defence/ps-2">
            <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-semibold text-white mb-1">
                Offline-First Navigation Aid for Counter-Insurgency Patrols
              </h3>
              <p className="mb-2">
                <span className="text-white/70">from</span> Inhouse
              </p>
              <p className="text-white/70 text-sm">
                Build an Offline-First, Terrain-Aware Navigation Aid designed 
                for scenarios where GPS and communications fail
              </p>
            </div>
          </Link>

          {/* PS-3 */}
          <Link href="/problem-statements/defence/ps-3">
            <div className="bg-[#165a94]/10 backdrop-blur-sm border-2 border-[#165a94] p-8 rounded-lg hover:bg-[#165a94]/20 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-xl font-semibold text-white mb-1">
                Predictive Intelligence Fusion System for Counter-Insurgency
              </h3>
              <p className="mb-2">
                <span className="text-white/70">from</span> Inhouse
              </p>
              <p className="text-white/70 text-sm">
                Build a Predictive Intelligence Fusion System that synthesizes 
                multiple data streams to anticipate threats before they materialize.
              </p>
            </div>
          </Link>

          {/* Add more problem statements here */}
        </div>
      </div>
    </div>
  );
};

export default Defence;
