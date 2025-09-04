import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "400px",
          height: "365px",
          margin: "0 auto",
    
        }}
      >
        <div style={{ width: "50%", height: "100%" }}>
          <img
            src="https://imgs.search.brave.com/I0x_Vdq38RDKdAFX2eceqNdlUyfTFPF3KvHSIe02X6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjMxNzAzNTEtYmU4/MmJjODg4YWE0P2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1UWjhmR05vWVc1/bGJDVXlNSEJsY21a/MWJXVjhaVzU4TUh4/OE1IeDhmREE9"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ background: "#FFF", width: "50%",padding:'15px' }}>
          <h4 style={{ color: "#868795", textAlign: "justify", margin: '10px 0px' }}>
            PERFUME
          </h4>
          <h1
            style={{
              color: "black",
              fontWeight: 700,
              textAlign: "justify",
              fontSize: "30px",
              margin: "20px 0px 10px",
            }}
          >
            Gabrielle Essence Eau De Parfum
          </h1>
          <p style={{ color: "#9797a2", textAlign: "justify",margin:'10px 0px',fontSize:'12px' }}>
            A floral, solan and voluptuous interpretation composed by Olivier
            Polga, Perfumer-Creator for the House of CHANEL.
          </p>

          <p style={{ color: "#42745c", textAlign: "justify",margin:'10px 0px' }}>
            $149.99{" "}
            <span style={{ color: "#81848b", textDecoration: "line-through" }}>
              $169.99
            </span>
          </p>

          <button style={{ width: "100%"}}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
