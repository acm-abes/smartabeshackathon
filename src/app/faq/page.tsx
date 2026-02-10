/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CRITERIA = [
  {
    subject: "Novelty",
    fullMark: 100,
    description:
      "Originality and creativity of the proposed solution, including innovative approaches and unique insights.",
  },
  {
    subject: "Articulation",
    fullMark: 100,
    description:
      "Clarity in explaining the problem, approach, and reasoning behind the solution.",
  },
  {
    subject: "Optimization & Depth",
    fullMark: 100,
    description:
      "The depth of algorithmic thinking and optimization strategies proposed, demonstrating a thorough understanding of the problem.",
  },
  {
    subject: "Methodology",
    fullMark: 100,
    description:
      "The soundness of the approach, including design choices and trade-offs.",
  },
  {
    subject: "Feasibility",
    fullMark: 100,
    description:
      "The practicality of the proposed solution within the hackathon constraints, including resource requirements and implementation complexity.",
  },
];

const FAQS = [
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and enthusiasm!",
  },
  {
    question: "When will I get the PS?",
    answer: "25th of January",
  },
  {
    question: "How many rounds will there be?",
    answer:
      "2 Rounds, Round 1 will end on the 14th of Feb, and Round 2 will take place on the 28th of Feb",
  },
  {
    question: "How to get in touch?",
    answer: "Reach out to us via the contact details on the home page.",
  },
  {
    question: "How many teams will qualify for Round 2?",
    answer: "30 teams",
  },
  {
    question: "Will we get any ppt template for the presentations?",
    answer:
      "Yes. Just go on the template page given on the navbar to get the template. Focus on the content and clarity of your presentation rather than the design.",
  },
  {
    question: "What do we need to submit for Round 1?",
    answer:
      "A brief description of what you plan to build, the problem it solves, and your vibe coding approach. No code required for Round 1. For the doc template refer to the Doc template from the Navbar.",
  },
  {
    question: "Can we use AI to write code?",
    answer:
      "We want YOU to do the thinking part, not the AI. You can use AI for debugging and improving your code, but the core logic and implementation should be your own work.",
  },
];

export default function FAQPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartData, setChartData] = useState(
    CRITERIA.map((c) => ({ subject: c.subject, value: 0, fullMark: 100 })),
  );

  useEffect(() => {
    const animatedValues = {
      point1: 0,
      point2: 0,
      point3: 0,
      point4: 0,
      point5: 0,
    };

    const updateChart = () => {
      setChartData([
        {
          subject: CRITERIA[0].subject,
          value: animatedValues.point1,
          fullMark: 100,
        },
        {
          subject: CRITERIA[1].subject,
          value: animatedValues.point2,
          fullMark: 100,
        },
        {
          subject: CRITERIA[2].subject,
          value: animatedValues.point3,
          fullMark: 100,
        },
        {
          subject: CRITERIA[3].subject,
          value: animatedValues.point4,
          fullMark: 100,
        },
        {
          subject: CRITERIA[4].subject,
          value: animatedValues.point5,
          fullMark: 100,
        },
      ]);
    };

    const ctx = gsap.context(() => {
      const criteriaTl = gsap.timeline({ defaults: { ease: "power2.out" } });
      const faqTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Animate judging criteria title
      criteriaTl
        .from(".criteria-title", {
          opacity: 0,
          y: -30,
          duration: 1,
        })
        // Animate judging divider
        .from(
          ".criteria-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        // Animate each criteria point sequentially
        .to(animatedValues, {
          point1: 100,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: updateChart,
        })
        .to(
          animatedValues,
          {
            point2: 100,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: updateChart,
          },
          "+=0.4",
        )
        .to(
          animatedValues,
          {
            point3: 100,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: updateChart,
          },
          "+=0.4",
        )
        .to(
          animatedValues,
          {
            point4: 100,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: updateChart,
          },
          "+=0.4",
        )
        .to(
          animatedValues,
          {
            point5: 100,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: updateChart,
          },
          "+=0.4",
        );

      // Animate FAQ content immediately (no dependency on criteria animation)
      faqTl
        .from(".faq-title", {
          opacity: 0,
          y: -30,
          duration: 1,
        })
        .from(
          ".faq-divider",
          {
            scaleX: 0,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".faq-item",
          {
            opacity: 0,
            x: -50,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen w-full overflow-hidden ">
      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20" />

      {/* SVG Drawing Layer */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <defs>
          <marker
            id="arrow-start"
            markerWidth="10"
            markerHeight="10"
            refX="1"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M9,0 L9,6 L0,3 z" fill="#165a94" />
          </marker>
          <marker
            id="arrow-end"
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
        {/* Outer Border Box */}
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
        {/* Top Dimension Line */}
        <line
          x1="5%"
          y1="10%"
          x2="95%"
          y2="10%"
          stroke="#165a94"
          strokeWidth="1"
          markerStart="url(#arrow-start)"
          markerEnd="url(#arrow-end)"
          className="opacity-30"
        />
        {/* Left Dimension Line */}
        <line
          x1="8%"
          y1="5%"
          x2="8%"
          y2="95%"
          stroke="#165a94"
          strokeWidth="1"
          markerStart="url(#arrow-start)"
          markerEnd="url(#arrow-end)"
          className="opacity-30"
        />
      </svg>

      {/* Content Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          {/* FAQ Title */}
          <div className="text-center mb-16 mt-28">
            <h1 className="faq-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight font-mono">
              You might be thinking about...
            </h1>
            <div className="faq-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>
          {/* Judging Criteria Title */}
          <div className="text-center mb-20">
            <h1 className="criteria-title text-5xl md:text-5xl font-bold text-[#165a94] mb-6 tracking-tight leading-tight font-mono">
              Judging Criteria
            </h1>
            <div className="criteria-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* Mobile Layout - Simple List */}
          <div className="md:hidden space-y-6">
            {CRITERIA.map((criterion, index) => {
              const isVisible = chartData[index].value > 0;
              return (
                <div
                  key={criterion.subject}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                >
                  <div className="bg-[#5fb8dc]/10 border border-[#165a94] rounded-lg p-6 backdrop-blur-md shadow-2xl">
                    <h3 className="text-lg font-bold text-[#165a94] mb-4 flex items-center gap-3 leading-tight">
                      <span className="text-xl text-[#104069] shrink-0">
                        {index + 1}.
                      </span>
                      <span>{criterion.subject}</span>
                    </h3>
                    <p className="text-[#104069] text-sm leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Layout - Chart Container */}
          <div className="hidden md:flex relative items-center justify-center min-h-175">
            {/* Radar Chart */}
            <svg viewBox="0 0 400 400" className="w-full max-w-2xl">
              {/* Grid Lines */}
              {[0.25, 0.5, 0.75, 1].map((scale) => (
                <polygon
                  key={scale}
                  points="200,50 342.7,153.6 288.2,321.4 111.8,321.4 57.3,153.6"
                  fill="none"
                  stroke="#165a94"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity={0.3}
                  transform={`translate(200, 200) scale(${scale}) translate(-200, -200)`}
                />
              ))}

              {/* Axis Lines */}
              <line
                x1="200"
                y1="200"
                x2="200"
                y2="50"
                stroke="#165a94"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="342.7"
                y2="153.6"
                stroke="#165a94"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="288.2"
                y2="321.4"
                stroke="#165a94"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="111.8"
                y2="321.4"
                stroke="#165a94"
                strokeWidth="1"
              />
              <line
                x1="200"
                y1="200"
                x2="57.3"
                y2="153.6"
                stroke="#165a94"
                strokeWidth="1"
              />

              {/* Data Polygon */}
              <polygon
                points={`
                  200,${200 - (chartData[0].value / 100) * 150}
                  ${200 + (chartData[1].value / 100) * 142.7},${200 - (chartData[1].value / 100) * 46.4}
                  ${200 + (chartData[2].value / 100) * 88.2},${200 + (chartData[2].value / 100) * 121.4}
                  ${200 - (chartData[3].value / 100) * 88.2},${200 + (chartData[3].value / 100) * 121.4}
                  ${200 - (chartData[4].value / 100) * 142.7},${200 - (chartData[4].value / 100) * 46.4}
                `}
                fill="#165a94"
                fillOpacity="0.6"
                stroke="#165a94"
                strokeWidth="3"
                strokeLinejoin="round"
              />

              {/* Corner Points */}
              {[
                {
                  x: 200,
                  y: 200 - (chartData[0].value / 100) * 150,
                  visible: chartData[0].value > 0,
                },
                {
                  x: 200 + (chartData[1].value / 100) * 142.7,
                  y: 200 - (chartData[1].value / 100) * 46.4,
                  visible: chartData[1].value > 0,
                },
                {
                  x: 200 + (chartData[2].value / 100) * 88.2,
                  y: 200 + (chartData[2].value / 100) * 121.4,
                  visible: chartData[2].value > 0,
                },
                {
                  x: 200 - (chartData[3].value / 100) * 88.2,
                  y: 200 + (chartData[3].value / 100) * 121.4,
                  visible: chartData[3].value > 0,
                },
                {
                  x: 200 - (chartData[4].value / 100) * 142.7,
                  y: 200 - (chartData[4].value / 100) * 46.4,
                  visible: chartData[4].value > 0,
                },
              ].map((point, index) => (
                <circle
                  key={index}
                  cx={point.x}
                  cy={point.y}
                  r="6"
                  fill="#165a94"
                  stroke="#5fb8dc"
                  strokeWidth="2"
                  opacity={point.visible ? 1 : 0}
                  className="transition-opacity duration-300"
                />
              ))}
            </svg>

            {/* Criteria Descriptions - Around the Graph */}
            <div className="absolute inset-0 pointer-events-none">
              {CRITERIA.map((criterion, index) => {
                const isVisible = chartData[index].value > 0;
                const positions = [
                  {
                    position: "top-[2%] left-1/2 -translate-x-1/2",
                  },
                  {
                    position: "top-[15%] right-[5%]",
                  },
                  {
                    position: "bottom-[5%] right-[15%]",
                  },
                  {
                    position: "bottom-[5%] left-[15%]",
                  },
                  {
                    position: "top-[15%] left-[5%]",
                  },
                ];

                return (
                  <div
                    key={criterion.subject}
                    className={`absolute ${positions[index].position} max-w-xs transition-all duration-700 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                  >
                    <div className="bg-[#5fb8dc]/10 border border-[#165a94] rounded-lg p-5 backdrop-blur-md shadow-2xl pointer-events-auto">
                      <h3 className="text-base font-bold text-[#165a94] mb-3 flex items-center gap-2 leading-tight">
                        <span className="text-lg text-[#104069] shrink-0">
                          {index + 1}.
                        </span>
                        <span>{criterion.subject}</span>
                      </h3>
                      <p className="text-[#104069] text-sm leading-relaxed">
                        {criterion.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Title */}
          <div className="text-center mb-16 mt-28">
            <h1 className="faq-title text-5xl md:text-7xl font-bold text-[#165a94] mb-4 tracking-tight font-mono">
              Or...
            </h1>
            <div className="faq-divider h-1 w-32 bg-[#165a94] mx-auto"></div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto w-full space-y-8">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="faq-item bg-[#3791c4]/30 backdrop-blur-sm border-2 border-[#165a94] p-6 rounded-lg"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-mono">
                  {faq.question}
                </h3>
                <p className="text-white/90 text-base md:text-lg font-mono leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
