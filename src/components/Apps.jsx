import React from "react";
import "./App.css";

const appsData = [
  {
    name: "Kite Connect",
    description: "Build trading & investment apps using Investo APIs.",
    status: "Active",
  },
  {
    name: "Investo Console",
    description: "In-depth reports, tax P&L, and account analytics.",
    status: "Active",
  },
  {
    name: "Investo Coin",
    description: "Direct mutual fund investments with zero commission.",
    status: "Active",
  },
  {
    name: "Strategy Builder",
    description: "Create, backtest and deploy trading strategies.",
    status: "Coming Soon",
  },
];

const Application = () => {
  return (
    <div className="apps-container">
      <h1>Apps</h1>
      <p className="apps-subtitle">
        Explore Investo products and third-party integrations
      </p>

      <div className="apps-grid">
        {appsData.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-header">
              <h3>{app.name}</h3>
              <span
                className={`status ${
                  app.status === "Active" ? "active" : "soon"
                }`}
              >
                {app.status}
              </span>
            </div>

            <p className="app-desc">{app.description}</p>

            <button
              className="app-btn"
              disabled={app.status !== "Active"}
            >
              {app.status === "Active" ? "Launch" : "Coming Soon"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
