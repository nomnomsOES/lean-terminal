import React from "https://esm.sh/react@18";

export default function App() {
  return React.createElement(
    "div",
    {
      style: {
        background: "#111111",
        color: "white",
        minHeight: "100vh",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      },
    },
    React.createElement(
      "h1",
      { style: { marginTop: 0 } },
      "Lean Terminal is LIVE"
    ),
    React.createElement(
      "p",
      null,
      "If you see this, GitHub Pages is wired correctly."
    ),
    React.createElement(
      "div",
      {
        style: {
          marginTop: "20px",
          padding: "16px",
          border: "1px solid #333",
          borderRadius: "12px",
          background: "#1a1a1a",
        },
      },
      React.createElement("div", null, "READY: 82"),
      React.createElement("div", null, "RISK: 41"),
      React.createElement("div", null, "PLAN: LEAN")
    )
  );
}
