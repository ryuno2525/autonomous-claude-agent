"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("speedcv_pro", "true");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-green-400 text-3xl">+</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">You're Pro!</h1>
        <p className="text-gray-400 mb-8">
          SpeedCV Pro is now unlocked. All 5 templates, no watermark, cover
          letter builder, and unlimited exports -- yours forever.
        </p>
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Build Your Resume
        </Link>
      </div>
    </main>
  );
}
