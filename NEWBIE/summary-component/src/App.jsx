import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const summarys = [
    {
      id: 1,
      name: "Reaction",
      value: 80,
      color: '#fef6f4',
      textColor: "#d96967"
    },
    {
      id: 2,
      name: "Memory",
      value: 92,
      color: '#fefaf2',
      textColor: "#f4b434"
    },
    {
      id: 3,
      name: "Verbal",
      value: 61,
      color: '#f2fcf8',
      textColor: "#5eb591"
    },
    {
      id: 4,
      name: "Visual",
      value: 73,
      color: '#f2f2fe',
      textColor: "#3e3bac"
    },
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "520px",
          height: "370px",
          borderRadius: "20px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: "50%",
            borderRadius: "20px",
            backgroundColor: "#5637fd",
            padding: "20px",
          }}
        >
          <h4>Your Result</h4>
          <div
            style={{
              display: "block",
              backgroundColor: "#3f25d5",
              height: "100px",
              width: "100px",
              margin: "0 auto",
              borderRadius: "50%",
              alignContent: "center",
            }}
          >
            <h3 style={{margin:0,fontSize:'30px'}}>76</h3>
            <p style={{margin:0,fontSize:'10px',color:'#8072ff'}}>of 100</p>
          </div>
          <h3>Great</h3>
          <p>
            You scored higher than 65% of the people whoe have taken these
            tests.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "50%",
            borderRadius: "0px 20px 20px",
            padding: "0px 20px",
          }}
        >
          <h3 style={{ color: "black", textAlign: "justify" }}>Summary</h3>
          {
            summarys.map((item) => (
              <div key={item.id} style={{ display: 'flex', backgroundColor: item.color, borderRadius: '10px', marginBottom: '12px', padding: '0px 10px', height:'40px',alignItems:'center' }}>
                <p style={{ color: item.textColor, width: '70%', textAlign: 'justify' }}>
                  {item.name}
                </p>
                <p style={{ color: 'black' }}>
                  {item.value} / 100
                </p>
              </div>
            ))
          }

          <button style={{
            borderRadius
              : '20px', width: '100%',marginTop
              :'15px'
          }}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
