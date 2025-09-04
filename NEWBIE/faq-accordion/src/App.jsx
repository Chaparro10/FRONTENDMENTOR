import { useState } from "react";
import Background from "./assets/backgrounddesktop.svg";
import start from "./assets/icon-start.svg";
import iconPlus from "./assets/icon-plus.svg";
import iconMinus from "./assets/icon-minus.svg";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is Frontend Mentor, and how will it help me?",
      description: "hola description",
    },
    {
      id: 2,
      question: "Is Frontend Mentor free?",
      description: "hola",
    },
    {
      id: 3,
      question: "Can I use Frontend Mentor projects in my portafolio?",
      description: "hola",
    },
    {
      id: 4,
      question: "How can I get help if I'm stuck on a challenge?",
      description: "hola",
    },
  ];

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <img src={Background} style={{ width: "100%" }} />

        <div
          style={{
            backgroundColor: "#F9F0FF",
            height: "100%",
            position: "relative",
          }}
        >
          .
        </div>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            position: "absolute",
            zIndex: 2,
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "15px",
            padding: "15px",
            minHeight: "400px",
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <img src={start} />
            <h1 style={{ color: "black", textAlign: "justify" }}>FAQs</h1>
          </div>

          <div>
            {questions.map((item, idx) => (
              <>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <h3
                    style={{
                      color: "black",
                      textAlign: "justify",
                      fontSize: "15px",
                      width: "90%",
                    }}
                  >
                    {item.question}
                  </h3>
                  <img
                    src={
                      selected && open && item.id == selected
                        ? iconMinus
                        : iconPlus
                    }
                    onClick={() => {
                      setOpen((o) => !o);
                      setSelected(item.id);
                    }}
                  />
                </div>
                {/* collapse */}
                {open && item.id == selected && (
                  <p
                    style={{
                      color: "black",
                      textAlign: "justify",
                      margin: "0",
                      fontSize: "13px",
                    }}
                  >
                    {item.description}
                  </p>
                )}

                {idx != questions.length - 1 && (
                  <p style={{ border: "solid 1px #f9f9f9" }}></p>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
