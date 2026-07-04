"use client";

import { useState } from "react";
import { Bell, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#101010]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-4 sm:px-6 lg:px-16">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-heading text-2xl font-black tracking-tighter text-[#e50914] transition-transform hover:scale-[1.02]"
          >
            CineStream
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            <Link href="/" className="border-b-2 border-[#e50914] pb-1 text-sm font-semibold text-[#e5e2e1]">
              Browse
            </Link>
            {/* <Link
              className="text-sm font-semibold text-[#b48d88] transition-colors hover:text-[#e5e2e1]"
              href="/movies/inception"
            >
              Movies
            </Link>
            <a className="text-sm font-semibold text-[#b48d88] transition-colors hover:text-[#e5e2e1]" href="#">
              TV Shows
            </a>
            <a className="text-sm font-semibold text-[#b48d88] transition-colors hover:text-[#e5e2e1]" href="#">
              My List
            </a> */}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[#e5e2e1] transition-transform hover:scale-105 hover:border-[#ffb4aa]/40 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[#e5e2e1] transition-transform hover:scale-105 hover:border-[#ffb4aa]/40">
            <Bell className="h-4 w-4" />
          </button>
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        className={`border-t border-white/8 bg-[#0f0f0f]/98 px-4 py-4 backdrop-blur-xl transition-all duration-200 md:hidden ${
          mobileMenuOpen ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 overflow-hidden py-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-360 flex-col gap-4">
          <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
            <SearchInput />
          </div>

          <div className="grid gap-2">
            <Link
              href="/"
              className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-semibold text-[#e5e2e1] transition-colors hover:border-[#e50914]/35 hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </Link>
            {/* <Link
              href="/movies/inception"
              className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-semibold text-[#e5e2e1] transition-colors hover:border-[#e50914]/35 hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              href="#"
              className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-semibold text-[#e5e2e1] transition-colors hover:border-[#e50914]/35 hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              TV Shows
            </Link>
            <Link
              href="#"
              className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-semibold text-[#e5e2e1] transition-colors hover:border-[#e50914]/35 hover:bg-white/8"
              onClick={() => setMobileMenuOpen(false)}
            >
              My List
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
