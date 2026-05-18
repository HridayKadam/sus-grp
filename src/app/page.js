"use client";

import { useState } from "react";

const foundersData = [
  {
    id: 1,
    name: "Alex Rivera",
    startup: "Nexus AI",
    hiring: true,
    domain: "Machine Learning, Frontend Eng",
    contact: "#",
  },
  {
    id: 2,
    name: "Sarah Chen",
    startup: "HealthSync",
    hiring: false,
    domain: "",
    contact: "#",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    startup: "EcoLogistics",
    hiring: true,
    domain: "Operations, Sales",
    contact: "#",
  },
  {
    id: 4,
    name: "Priya Patel",
    startup: "FinFlow",
    hiring: true,
    domain: "Backend (Node.js), DevOps",
    contact: "#",
  },
  {
    id: 5,
    name: "David Kim",
    startup: "SecureNet",
    hiring: false,
    domain: "",
    contact: "#",
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    startup: "EduVerse",
    hiring: true,
    domain: "UI/UX Designer, React Dev",
    contact: "#",
  },
  {
    id: 7,
    name: "James Wilson",
    startup: "PropTech Solutions",
    hiring: false,
    domain: "",
    contact: "#",
  },
  {
    id: 8,
    name: "Anita Desai",
    startup: "AgriSmart",
    hiring: true,
    domain: "Data Science, Marketing",
    contact: "#",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredFounders = foundersData.filter((founder) => {
    const matchesSearch =
      founder.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      founder.startup.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (founder.domain && founder.domain.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = filter === "all" ? true : filter === "hiring" ? founder.hiring : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      {/* Header Section */}
      <header className="bg-[#F9F9F9] border-b border-[#EAEAEA] py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
            Startup Founders Directory
          </h1>
          <p className="text-[#666666] text-lg max-w-2xl mb-8">
            Discover founders from our community, explore their startups, and see who is actively hiring for their next growth phase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <input
              type="text"
              placeholder="Search founders, startups, or roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-3 border border-[#EAEAEA] rounded focus:outline-none focus:border-[#F26522] transition-colors"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        <div className="flex gap-4 mb-8 border-b border-[#EAEAEA] pb-4">
          <button
            onClick={() => setFilter("all")}
            className={`text-sm font-semibold pb-4 -mb-[17px] border-b-2 transition-colors ${
              filter === "all" ? "border-[#F26522] text-black" : "border-transparent text-[#666666] hover:text-black"
            }`}
          >
            All Founders
          </button>
          <button
            onClick={() => setFilter("hiring")}
            className={`text-sm font-semibold pb-4 -mb-[17px] border-b-2 transition-colors ${
              filter === "hiring" ? "border-[#F26522] text-black" : "border-transparent text-[#666666] hover:text-black"
            }`}
          >
            Hiring Now
          </button>
        </div>

        {filteredFounders.length === 0 ? (
          <div className="py-12 text-[#666666]">
            No results found. Try adjusting your search or filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFounders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

function FounderCard({ founder }) {
  return (
    <div className="border border-[#EAEAEA] bg-white p-6 rounded hover:shadow-sm transition-shadow flex flex-col">
      <div className="mb-4">
        <h3 className="font-bold text-xl text-black leading-tight mb-1">{founder.name}</h3>
        <div className="text-[#F26522] font-semibold text-sm">{founder.startup}</div>
      </div>
      
      <div className="flex-grow mb-6">
        {founder.hiring ? (
          <div>
            <div className="text-xs font-bold text-green-700 bg-green-50 uppercase inline-block px-2 py-1 rounded mb-3 border border-green-200">
              Hiring
            </div>
            <div className="text-sm text-[#666666]">
              <span className="font-semibold text-black">Roles:</span> {founder.domain}
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xs font-bold text-[#666666] bg-[#F9F9F9] uppercase inline-block px-2 py-1 rounded mb-3 border border-[#EAEAEA]">
              Not Hiring
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-auto">
        <a
          href={founder.contact}
          className="block w-full text-center bg-[#F26522] hover:bg-[#d9561c] text-white font-semibold py-2 px-4 rounded text-sm transition-colors"
        >
          Connect
        </a>
      </div>
    </div>
  );
}
