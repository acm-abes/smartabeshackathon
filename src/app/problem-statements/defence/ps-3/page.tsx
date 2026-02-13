/** @format */

import type { Metadata } from "next";

import { constructMetadata } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title:
    "Predictive Intelligence Fusion System for Counter-Insurgency- Smart ABES Hackathon",
  description:
    "Problem Statement 3: Predictive Intelligence Fusion System for Counter-Insurgency. Develop a system that integrates multiple intelligence sources to predict and counter insurgent activities effectively.",
});

const DEFPS3 = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 select-text">
      <h1 className="text-4xl font-bold mb-2">
        Predictive Intelligence Fusion System for Counter-Insurgency
      </h1>
      <p className="text-sm font-semibold text-[#165a94] mb-3">
        PS ID: DEFENCE-PS-3
      </p>
      <p className="text-lg text-[#165a94] font-medium mb-4">
        <span className="text-gray-600">from</span> Inhouse
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Context & Background:</h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>Location: Red Corridor, India.</li>
          <li>
            Operational Environment: Counter-insurgency operations span 2,000 sq
            km where insurgents blend into a civilian population of 50,000.
          </li>
          <li>
            The Threat: IED patterns shift every 4-6 weeks. A recent failure
            involved 3 IED attacks in 2 weeks on routes deemed "safe"; the
            pattern was visible in the data 10 days prior but was missed by
            analysts until after the third attack, resulting in 2 KIA and 5
            wounded.
          </li>
          <li>
            Data Challenges: The unit receives 500+ intelligence inputs daily
            (HUMINT, SIGINT, patrol reports). Of this data, 40% is noise and 10%
            is deception.
          </li>
          <li>
            Process Bottleneck: Manual analysis currently takes 8-12 hours, by
            which time the intelligence is stale.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">The Objective</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Build a Predictive Intelligence Fusion System that synthesizes
          multiple data streams to anticipate threats before they materialize.
        </p>
        <h2 className="text-2xl font-semibold mb-4">
          Key Requirements to Address
        </h2>
        <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
          <li>
            Pattern Recognition: Explain how the system will detect patterns
            that human analysts miss.
          </li>
          <li>
            Data Reliability: Detail measures to prevent over-reliance on false
            or deceptive intelligence.
          </li>
          <li>
            Explainability: The system must be able to explain why a specific
            route is classified as risky.
          </li>
          <li>
            Adversarial Adaptation: Address how the system handles scenarios
            where insurgents adapt their tactics in response to the system.
          </li>
          <li>
            Failure Mode Resolution: Demonstrate the resolution of at least one
            critical intelligence failure mode.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
        <p className="text-gray-700 leading-relaxed">
          A technical proposal (maximum 10 pages) explaining the approach,
          architecture, and decision logic prior to deployment.
        </p>
      </section>
    </div>
  );
};

export default DEFPS3;
