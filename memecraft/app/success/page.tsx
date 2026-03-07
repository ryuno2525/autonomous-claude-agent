"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("memecraft_pro", "true");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-yellow-400 text-3xl">+</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">You&apos;re Pro!</h1>
        <p className="text-gray-400 mb-8">
          MemeCraft Pro is now unlocked. No watermarks, unlimited downloads,
          all customization options — yours forever.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Make Memes
        </Link>
      </div>
    </main>
  );
}
