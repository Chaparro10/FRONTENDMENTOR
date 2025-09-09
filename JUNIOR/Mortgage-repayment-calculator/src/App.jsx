import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "350px",
          width: "600px",
          backgroundColor: "#FFF",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: "50%",
            backgroundColor: "#FFF",
            borderRadius: "20px 0px 0px 20px",
            padding: "15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
            <h4 style={{ color: "black" }}>Mortgage Calculator</h4>
            <a
              href=""
              style={{ textDecoration: "underline", color: "#5c676d" }}
            >
              Clear All
            </a>
          </div>

          <div>
            <div style={{ textAlign: "left" }}>
              <label style={{ color: "#5c676d", fontSize: "12px" }}>
                Mortgage Amount
              </label>
              <div
                style={{
                  display: "flex",
                  borderRadius: "4px",
                  contain: "content",
                  border: "solid 1px #7f8c92",
                  height: "25px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e3f1fc",
                    display: "flex",
                    alignItems: "center",
                    width: "30px",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="https://imgs.search.brave.com/DvwIELI2Y-6WpikP-YgmdpY4X-llstuYUASF5kfvyUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMzcvUE5H/LzUxMi9wZXJjZW50/YWdlXzMxNTUucG5n"
                    style={{ height: "10px" }}
                  />
                </div>
                <input
                  type="text"
                  style={{
                    width: "90%",
                    backgroundColor: "#FFF",
                    border: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ textAlign: "left" }}>
                <label style={{ color: "#5c676d", fontSize: "12px" }}>
                  Mortgage Term
                </label>
                <div
                  style={{
                    display: "flex",
                    border: "solid 1px #7f8c92",
                    borderRadius: "5px",
                    contain: "content",
                    maxHeight: "25px",
                  }}
                >
                  <input
                    type="text"
                    style={{
                      width: "70%",
                      backgroundColor: "#FFF",
                      border: "none",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#e3f1fc",
                      display: "flex",
                      alignItems: "center",
                      width: "30%",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        color: "black",
                        padding: "0px 20px",
                      }}
                    >
                      years
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "left" }}>
                <label style={{ color: "#5c676d", fontSize: "12px" }}>
                  Interest Rate
                </label>
                <div
                  style={{
                    display: "flex",
                    border: "solid 1px #7f8c92",
                    borderRadius: "5px",
                    contain: "content",
                    minHeight: "25px",
                  }}
                >
                  <input
                    type="text"
                    style={{
                      width: "90%",
                      backgroundColor: "#FFF",
                      border: "none",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#e3f1fc",
                      display: "flex",
                      alignItems: "center",
                      width: "30px",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="https://imgs.search.brave.com/DvwIELI2Y-6WpikP-YgmdpY4X-llstuYUASF5kfvyUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaWNvbi1pY29u/cy5jb20vMzcvUE5H/LzUxMi9wZXJjZW50/YWdlXzMxNTUucG5n"
                      style={{ height: "10px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "left" }}>
              <label style={{ color: "#5c676d", fontSize: "12px" }}>
                Mortgage Type
              </label>
              <div
                style={{
                  border: "solid 1px #7f8c92",
                  display: "flex",
                  maxHeight: "25px",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <input type="checkbox" style={{ width: "10%" }} />,
                <p style={{ color: "black" }}>Repayment</p>
              </div>

              <div
                style={{
                  border: "solid 1px #7f8c92",
                  display: "flex",
                  maxHeight: "25px",
                  alignItems: "center",
                  margin: "10px 0px",
                  borderRadius: "5px",
                }}
              >
                <input type="checkbox" style={{ width: "10%" }} />,
                <p style={{ color: "black" }}>Interest Only</p>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <button
              style={{
                backgroundColor: "#d3d62a",
                borderRadius: "20px",
                color: "#1a2a2c",
              }}
            >
              Calculate Repayments
            </button>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            backgroundColor: "#182938",
            borderRadius: "0px 20px 20px 50px",
            padding: "10px",
         
           display:'flex',
           alignItems:'center'
          }}
        >
          <div >
            <img
              src="https://imgs.search.brave.com/tYj59ghgLgALTn1Ah2pul75Ax9KmJJIrh7WgZEAGUKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni85NTU0Lzk1NTQ4/MjUucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
              style={{ height: "100px" }}
            />
            <h4 style={{ margin: 0 }}>Results shown here</h4>
            <p style={{ fontSize: "10px" }}>
              Complete the form and click "calculate repayments" to see what
              yout monthly repayments woulds be.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
