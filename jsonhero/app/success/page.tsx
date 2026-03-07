"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("jsonhero_pro", "true");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-green-400 text-3xl">+</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">You're Pro!</h1>
        <p className="text-gray-400 mb-8">
          JSONHero Pro is now unlocked. Tree view, JSON diff, TypeScript/CSV
          conversion, and all future features -- yours forever.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Start Using Pro
        </Link>
        <p className="text-xs text-gray-600 mt-6">
          Your Pro status is saved in this browser. If you clear your browser
          data, revisit this page from your Stripe receipt email to reactivate.
        </p>
      </div>
    </main>
  );
}
