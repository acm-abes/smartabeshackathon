/** @format */

import type { Metadata } from "next";

import { constructMetadata } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Offline-First Navigation Aid for Counter-Insurgency Patrols - Smart ABES Hackathon",
  description:
    "Problem Statement 2: Offline-First Navigation Aid for Counter-Insurgency Patrols. Develop a navigation system that functions effectively without continuous internet connectivity, ensuring reliable guidance for patrol units in remote or communication-limited areas.",
});

const DEFPS2 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 select-text">
      <h1 className="text-4xl font-bold mb-2">
        Offline-First Navigation Aid for Counter-Insurgency Patrols
      </h1>
      <p className="text-lg text-[#165a94] font-medium mb-4">
        <span className="text-gray-600">from</span> Inhouse
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Context & Background</h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Location: Dense Forest, North-Eastern Insurgency Zone.</li>
          <li>
            Current Situation: A patrol unit has been operating in hostile 
            territory for 72 hours. Radio contact was lost 4 hours ago.
          </li>
          <li>
            Environmental Constraints: GPS is unreliable due to forest canopy 
            and jamming. Visibility is dropping, with total darkness expected by 
            1900 hours.
          </li>
          <li>
            The Threat: Insurgents possess superior knowledge of the local terrain.
          </li>
          <li>
            Logistics & Status: The nearest extraction point is 8km northwest. 
            The team is fatigued, and available maps are outdated (from 2015).
          </li>
          <li>
            Stakes: One wrong turn could be fatal.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">The Objective</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Build an Offline-First, Terrain-Aware Navigation Aid designed for 
          scenarios where GPS and communications fail
        </p>
        <h2 className="text-2xl font-semibold mb-4">Key Requirements to Address</h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Routing Strategy: Explain how the routing algorithm balances safety versus speed.</li>
          <li>Error Handling: Address how the system manages accumulated positioning error.</li>
          <li>User Experience: Demonstrate how soldiers will use the system effectively while under stress and in the dark.</li>
          <li>Connectivity: Explain how peer-to-peer sharing functions without existing infrastructure.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
        <p className="text-gray-700 leading-relaxed">
          A technical proposal (maximum 10 pages) explaining the approach, 
          system architecture, and decision logic prior to deployment.
        </p>
      </section>
    </div>
  );
};

export default DEFPS2;
