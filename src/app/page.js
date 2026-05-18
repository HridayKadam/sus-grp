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

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}

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
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="orb-1 animate-float"></div>
        <div className="orb-2 animate-float"></div>
      </div>

      <header className="pt-6 pb-16 border-b border-white/10 bg-gradient-to-b from-black to-transparent px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-between items-center mb-20">
            <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              SUS Group
            </div>
            <div className="flex gap-8 text-sm font-medium">
              <a href="#" className="text-white">
                Directory
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                About
              </a>
            </div>
          </nav>
          
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Startup Community
            </h1>
            <p className="text-xl text-zinc-400 mb-12">
              Discover founders, explore startups, and find your next big opportunity.
            </p>
            
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search by founder, startup, or domain..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full border border-white/10 bg-white/5 text-white placeholder-zinc-500 outline-none transition-all focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] backdrop-blur-md"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-white text-black"
                : "border border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("hiring")}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === "hiring"
                ? "bg-white text-black"
                : "border border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            Hiring Now
          </button>
        </div>

        {filteredFounders.length === 0 ? (
          <div className="text-center text-zinc-500 py-12">
            No founders match your search criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFounders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        )}
      </main>
      
      <footer className="py-10 border-t border-white/10 text-center text-sm text-zinc-500 mt-auto">
        &copy; 2026 SUS Group Community. All rights reserved.
      </footer>
    </>
  );
}

function FounderCard({ founder }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className="glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:border-white/20"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)"
        }}
      />
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-semibold mb-1">{founder.name}</h3>
          <div className="text-violet-400 font-medium">{founder.startup}</div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center font-semibold text-lg shrink-0">
          {getInitials(founder.name)}
        </div>
      </div>
      
      <div className="flex-grow mb-6">
        {founder.hiring ? (
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 shadow-[0_0_8px_currentColor]" />
            Hiring Now
          </div>
        ) : (
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-rose-500/15 text-rose-400 text-xs font-semibold mb-4">
            Not Hiring
          </div>
        )}
        
        {founder.hiring ? (
          <div className="text-sm text-zinc-400">
            <strong className="text-zinc-300 font-medium">Roles:</strong> {founder.domain}
          </div>
        ) : (
          <div className="text-sm text-zinc-500">Team is currently full.</div>
        )}
      </div>
      
      <div className="pt-6 border-t border-white/10 flex justify-end">
        <a
          href={founder.contact}
          className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-sm font-medium hover:bg-white hover:text-black transition-colors"
        >
          Connect
        </a>
      </div>
    </div>
  );
}
