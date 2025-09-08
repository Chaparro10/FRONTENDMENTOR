import { useState } from "react";
import equilibriumLogo from "./assets/image-equilibrium.jpg";
import avatarLogo from "./assets/image-avatar.png";
import iconEtherum from "./assets/icon-ethereum.svg";

import iconClock from "./assets/icon-clock.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* CARD */}
      <div
        style={{
          backgroundColor: "#182237",
          width: "200px",
          borderRadius: "10px",
          padding: "20px",
          contain: "content",
        }}
      >
        <img
          src={equilibriumLogo}
          style={{ height: "200px", borderRadius: "7px" }}
        />
        <h4 style={{ textAlign: "justify", margin:'10px 0px' }}>Equilibrium #3429</h4>
        <p style={{ textAlign: "justify", color:'#627191', fontSize:'15px', margin:0 }}>
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div style={{ display: "flex" }}>
          <p
            style={{
              textAlign: "left",
              display: "flex",
              width: "50%",
              color: "#55d4dc",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <img src={iconEtherum} style={{ height: "15px" }} />
            0.041ETH
          </p>
          <p
            style={{
              display: "flex",
              textAlign: "right",
              width: "50%",
              color: "#6d7ea0",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img src={iconClock} style={{}} /> 3 days left
          </p>
        </div>
        <p style={{ border: "solid 1px #29344a", margin:'10px 0px' }}></p>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={avatarLogo}
            alt=""
            style={{
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              border: "solid 1px #FFF",
            }}
          />
          <p style={{ fontSize: "12px", color: "#6d7ea0" }}>
            Creation of
            <span style={{ color: "#b5bfd2" }}> Jules Wyvern</span>
          </p>
        </div>
      </div>
      {/* .CARD */}
    </>
  );
}

export default App;
