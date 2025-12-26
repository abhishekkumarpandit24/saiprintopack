"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 200,
    suffix: "+ Cr",
    label: "Annual Turnover",
    color: "from-blue-500 to-blue-700",
  },
  {
    value: 550,
    suffix: "+",
    label: "Employees",
    color: "from-purple-500 to-purple-700",
  },
  {
    value: 30,
    suffix: "+ Years",
    label: "Industry Excellence",
    color: "from-orange-500 to-orange-700",
  },
  {
    value: 1,
    suffix: "M+ Units",
    label: "Monthly Production",
    color: "from-emerald-500 to-emerald-700",
    multiplier: 1_000_000,
  },
];

function CountUp({
  end,
  start,
  duration = 1500,
}: {
  end: number;
  start: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return <>{count}</>;
}

export default function StatsHighlight() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // trigger only once
        }
      },
      {
        threshold: 0.3, // start when 30% visible
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="my-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6 text-center overflow-hidden"
          >
            {/* Top gradient line */}
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.color}`}
            />

            <div
              className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
            >
              <CountUp end={stat.value} start={startCount} />
              {stat.suffix}
            </div>

            <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
