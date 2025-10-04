import React, { useRef } from "react"
import ReactDOM from "react-dom"
import ReactFullpage from "@fullpage/react-fullpage"

const anchors = ["home", "about", "experiences", "projects"]

function NavPortal({ apiRef }) {
  return ReactDOM.createPortal(
    <nav
      id="my-nav"
      // 保险：只用内联管住“位置”，其它都交给 Tailwind
      style={{
        position: "fixed",
        top: "50vh",
        right: "16px",
        transform: "translateY(-50%)",
      }}
      className="z-[2147483647]
                 bg-black/60 backdrop-blur px-2.5 py-2 rounded-xl
                 border border-white/10 pointer-events-auto select-none"
    >
      <ul className="list-none m-0 p-0 flex flex-col gap-2">
        {anchors.map((a) => (
          <li key={a}>
            <button
              onClick={() => apiRef.current?.moveTo(a)}
              className="text-white/90 hover:text-white
                         px-2.5 py-1 rounded-lg cursor-pointer
                         hover:bg-white/10 transition-colors
                         focus:outline-none"
            >
              {a[0].toUpperCase() + a.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>,
    document.body // <—— 一定要挂到 body
  );
}

export default function App() {
  const apiRef = useRef(null)

  return (
    <>
      <NavPortal apiRef={apiRef}> </NavPortal>

      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        anchors={anchors}
        // navigation
        scrollingSpeed={700}
        render={({ fullpageApi }) => {
          apiRef.current = fullpageApi
          return (
            <ReactFullpage.Wrapper>
              {/* Home */}
<section className="section flex flex-col items-center justify-center
                    bg-gradient-to-b from-indigo-900 to-indigo-700 text-white">
  <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Jason Dai</h1>
  <p className="mt-4 text-lg/7 text-white/80">Data Science · ML · Systems</p>
</section>

{/* About */}
<section className="section flex flex-col items-center justify-center
                    bg-white text-gray-900">
  <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
  <p className="mt-4 max-w-xl text-center text-gray-600">
    Short bio placeholder
  </p>
</section>

{/* Experiences */}
<section className="section flex flex-col items-center justify-center
                    bg-gray-100 text-gray-900">
  <h2 className="text-3xl md:text-4xl font-semibold">Experiences</h2>
  <ul className="mt-6 space-y-3 text-gray-700">
    <li>[Company A] — role + impact</li>
    <li>[Company B] — role + impact</li>
    <li>[Research/Lab] — role + impact</li>
  </ul>
</section>

{/* Projects */}
<section className="section flex flex-col items-center justify-center
                    bg-gray-200 text-gray-900">
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
          )
        }}
      />
    </>
  )
}