import React, { useRef } from "react"
import ReactDOM from "react-dom"
import ReactFullpage from "@fullpage/react-fullpage"

const anchors = ["home", "about", "experiences", "projects"]

function NavPortal({ apiRef }) {
  return ReactDOM.createPortal(
    <nav
    style={{
      position: "fixed",
      top: 16,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2147483647,
      background: "rgba(255,255,255,0.85)",  // 半透明白色
      padding: "8px 20px",
      borderRadius: "12px",
      pointerEvents: "auto",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)" // 阴影
    }}
    >
      <button onClick={() => apiRef.current?.moveTo("home")} style={{ color: "#111", marginRight: 20, fontWeight: 500 }}>Home</button>
      <button onClick={() => apiRef.current?.moveTo("about")} style={{ color: "#111", marginRight: 20, fontWeight: 500 }}>About</button>
      <button onClick={() => apiRef.current?.moveTo("experiences")} style={{ color: "#111", marginRight: 20, fontWeight: 500 }}>Experiences</button>
      <button onClick={() => apiRef.current?.moveTo("projects")} style={{ color: "#111", fontWeight: 500 }}>Projects</button>
    </nav>,
    document.body
  )
}

export default function App() {
  const apiRef = useRef(null)

  return (
    <>
      <NavPortal apiRef={apiRef}> </NavPortal>

      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        anchors={anchors}
        navigation
        scrollingSpeed={700}
        render={({ fullpageApi }) => {
          apiRef.current = fullpageApi
          return (
            <ReactFullpage.Wrapper>
              {/* Home Section */}
              <section className="section flex flex-col items-center justify-center bg-zinc-900 text-white">
                <h1 className="text-5xl font-bold">[Your Name Here]</h1>
                <p className="mt-4 text-lg opacity-80">[Tagline / One sentence intro]</p>
                <p className="mt-2 text-sm opacity-60">TODO: add profile photo and a catchy headline</p>
              </section>

              {/* About Section */}
              <section className="section flex flex-col items-center justify-center bg-white text-black">
                <h2 className="text-3xl font-semibold">About Me</h2>
                <p className="mt-4 text-gray-600">[Short bio placeholder]</p>
                <p className="mt-2 text-sm text-gray-400">TODO: LinkedIn, GitHub, email links</p>
              </section>

              {/* Experiences Section */}
              <section className="section flex flex-col items-center justify-center bg-gray-100 text-black">
                <h2 className="text-3xl font-semibold">Professional Experiences</h2>
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li>[Company A] – TODO: write role + achievements</li>
                  <li>[Company B] – TODO: write role + achievements</li>
                  <li>[Research/Lab] – TODO: write role + achievements</li>
                </ul>
              </section>

              {/* Projects Section */}
              <section className="section flex flex-col items-center justify-center bg-gray-200 text-black">
                <h2 className="text-3xl font-semibold">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl px-6">
                  <div className="p-4 rounded-2xl border shadow bg-white">
                    <h3 className="font-medium">[Project 1 Name]</h3>
                    <p className="text-sm text-gray-600 mt-2">TODO: short description of project</p>
                  </div>
                  <div className="p-4 rounded-2xl border shadow bg-white">
                    <h3 className="font-medium">[Project 2 Name]</h3>
                    <p className="text-sm text-gray-600 mt-2">TODO: short description of project</p>
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