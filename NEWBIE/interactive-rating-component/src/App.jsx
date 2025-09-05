import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const raitings = [1, 2, 3, 4, 5];

  const [raiting, setRaiting] = useState(raitings);

  return (
    <>
      <div
        style={{
          backgroundColor: "#1f232b",
          height: "300px",
          width: "300px",
          borderRadius: "20px",
          padding: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            backgroundColor: "#232931",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.freepik.com/256/8446/8446527.png?semt=ais_white_label"
            style={{ height: "50%", width: "50%", objectFit: "cover" }}
          />
        </div>

        <h4 style={{ textAlign: "justify",margin:'10px 0px' }}>How did we do?</h4>

        <p style={{ textAlign: "justify",margin:'0px 0px 5px' }}>
          Please let us know how we did with your support request.All feedback
          is appreciated to help us improve our offering!
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          {raiting.map((item) => (
            <div
              style={{
                display: "flex",
                borderRadius: "50%",
                backgroundColor: "#232931",
                width: "50px",
                height: "50px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button
          style={{
            backgroundColor: "#eb741d",
            width: "100%",
            borderRadius: "20px",
            color: "black",
          }}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
}

export default App;
