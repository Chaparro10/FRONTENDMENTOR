import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const infoCards = [
    {
      id: 1,
      name: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
      icon: "",
      color: "#60c8c7",
    },

    {
      id: 2,
      name: "Team Builder",
      description:
        "Scans our talent network to cerate the optimal team for you project",
      icon: "",
      color: "#da554e",
    },
    {
      id: 3,
      name: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      icon: "",
      color: "#f0a946",
    },
    {
      id: 4,
      name: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
      icon: "",
      color: "#6491df",
    },
  ];

  return (
    <>
      <div
        style={{
          textAlign: "center",
          width: "350px",
          margin: "0 auto",
        }}
      >
        <h3 style={{ color: "black" }}>Reliable, efficient delivery</h3>
        <h3 style={{ color: "black" }}>Powered by Technology</h3>
        <p style={{ color: "black", fontSize: "10px" }}>
          Our Artificial Intelligence powered tools use millions of project data
          point to ensure that your project is successful
        </p>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {Array.from({ length: 4 }).map((item, idx) => {
          return (
            <div style={{ alignItems: "center", display: "flex" }}>
              {idx == 1 ? (
                <div>
                  <div style={{ marginBottom: "15px" }}>
                    <Card
                      name={infoCards[1].name}
                      description={infoCards[1].description}
                      color={infoCards[1].color}
                    />
                  </div>
                  <div>
                    <Card
                      name={infoCards[2].name}
                      description={infoCards[2].description}
                      color={infoCards[2].color}
                    />
                  </div>
                </div>
              ) : (
                idx != 2 && (
                  <Card
                    name={infoCards[idx].name}
                    description={infoCards[idx].description}
                    color={infoCards[idx].color}
                  />
                )
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
