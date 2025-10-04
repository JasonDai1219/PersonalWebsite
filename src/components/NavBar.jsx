import React from "react";

const NAV = [
  { label: "Home", anchor: "home" },
  { label: "About", anchor: "about" },
  { label: "Experiences", anchor: "experiences" },
  { label: "Projects", anchor: "projects" },
];

export default function NavBar({ moveTo }) {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[2147483647]
                 bg-black/60 backdrop-blur px-3 py-2 rounded-2xl
                 shadow-lg border border-white/10"
    >
      <ul className="flex gap-2">
        {NAV.map((item) => (
          <li key={item.anchor}>
            <button
              onClick={() => (moveTo ? moveTo(item.anchor) : window.location.hash = item.anchor)}
              className="text-white/90 hover:text-white text-sm md:text-base
                         px-3 py-1 rounded-lg hover:bg-white/10"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}