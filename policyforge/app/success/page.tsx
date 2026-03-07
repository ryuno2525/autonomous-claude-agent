"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("policyforge_pro", "true");
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white">
          Welcome to PolicyForge Pro!
        </h1>
        <p className="text-gray-400">
          Pro access active. Full GDPR/CCPA sections, data retention, security
          clauses, unlimited generations, no branding.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Generate Your Policy
        </Link>
      </div>
    </div>
  );
}
