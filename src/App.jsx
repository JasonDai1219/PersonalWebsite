import React, { useRef } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["home", "about", "experiences", "projects"];

function NavPortal({ apiRef }) {
  return ReactDOM.createPortal(
    <nav
      style={{ position: "fixed", top: "50vh", right: "16px", transform: "translateY(-50%)" }}
      className="z-[2147483647] bg-white/70 backdrop-blur px-2.5 py-2 rounded-xl
                shadow-md hover:shadow-lg transition
                ring-0 hover:ring-1 hover:ring-black/10
                pointer-events-auto select-none"
    >
      <ul className="list-none m-0 p-0 flex flex-col gap-2">
        {anchors.map((a) => (
          <li key={a}>
            <button
              onClick={() => apiRef.current?.moveTo(a)}
              className="bg-transparent text-gray-800 hover:text-black
                        px-2.5 py-1 rounded-lg cursor-pointer
                        hover:bg-black/5 transition-colors focus:outline-none"
            >
              {a[0].toUpperCase() + a.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>,
    document.body
  );
}

export default function App() {
  const apiRef = useRef(null);

  return (
    <div className="font-sans">
      <NavPortal apiRef={apiRef} />
      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        anchors={anchors}
        scrollingSpeed={700}
        // navigation 先不要，用自定义的
        render={({ fullpageApi }) => {
          apiRef.current = fullpageApi;
          return (
            <ReactFullpage.Wrapper>
              {/* 你的四个 section，保持或替换成下面这些类名 */}
              <section
                className="section flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: "linear-gradient(to bottom, #1e3a8a, #fb923c)" }}
              >
                <h1 className="!text-[120px] md:!text-[160px] font-extrabold tracking-tight">
                  Jason Dai
                </h1>
                <p className="mt-4 !text-[60px] text-white/80">Data Scientist · Machine Learning Engineer · Data Analyst</p>
              </section>

              {/* About */}
              <section className="section flex items-center justify-center bg-white">
                <div className="max-w-2xl text-center px-6">
                  <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
                  <p className="mt-4 text-gray-600">Short bio placeholder</p>
                </div>
              </section>

              <section className="section flex flex-col items-center justify-center bg-gray-100 text-gray-900">
                <h2 className="text-3xl md:text-4xl font-semibold">Experiences</h2>
                <ul className="mt-6 space-y-3 text-gray-700">
                  <li>[Company A] — role + impact</li>
                  <li>[Company B] — role + impact</li>
                  <li>[Research/Lab] — role + impact</li>
                </ul>
              </section>

              <section className="section flex flex-col items-center justify-center bg-gray-200 text-gray-900">
                <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl px-6">
                  <div className="p-4 rounded-2xl border shadow bg-white">
                    <h3 className="font-medium">Project 1</h3>
                    <p className="text-sm text-gray-600 mt-2">Short blurb.</p>
                  </div>
                  <div className="p-4 rounded-2xl border shadow bg-white">
                    <h3 className="font-medium">Project 2</h3>
                    <p className="text-sm text-gray-600 mt-2">Short blurb.</p>
                  </div>
                </div>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}