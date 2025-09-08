import Hero from "./assets/illustration-hero.svg";
import Music from "./assets/icon-music.svg";
import "./App.css";

function App() {
  return (
    <div style={{ width: "280px", contain: "content", borderRadius: "10px" }}>
      <img
        src={Hero}
        style={{ height: "100%", width: "100%", margin: 0, display: "block" }}
      />
      <div style={{ backgroundColor: "#FFF", padding: "20px", height: "70%" }}>
        <h3 style={{ color: "#22294d" }}>Order Summary</h3>
        <p style={{ color: "#8c90a3" }}>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            gap: "10px",
            backgroundColor: "#f7f8fe",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              width: "70%",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <img src={Music} style={{ height: "30px" }} />

            <div>
              <p style={{ color: "#29304d", margin: 0 }}>Annual Plan</p>
              <p style={{ color: "#8c90a4", margin: 0 }}>$59.99/year</p>
            </div>
          </div>

          <a href="" style={{ textDecoration: "underline" }}>
            Change
          </a>
        </div>

        <button style={{ width: "100%", marginBottom: "5px", color: "#FFF", backgroundColor:'#3622dd' }}>
          Proceed to Payment
        </button>

        <a href="" style={{ color: "#6c738c" }}>
          Cancel Order
        </a>
      </div>
    </div>
  );
}

export default App;
