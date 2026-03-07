"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("pairscore_pro", "true");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">&#10024;</div>
        <h1 className="text-3xl font-bold mb-4">You&apos;re Pro!</h1>
        <p className="text-gray-400 mb-8">
          PairScore Pro is now unlocked. All your compatibility cards will be
          watermark-free.
        </p>
        <Link
          href="/"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-xl transition"
        >
          Take a Quiz
        </Link>
      </div>
    </div>
  );
}
