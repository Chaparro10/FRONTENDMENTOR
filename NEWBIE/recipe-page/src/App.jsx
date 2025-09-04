import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const instructions = [
    {
      textInitial: " Beat the eggs",
      textSecondary:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablspoon of water or milk for a fluffier texture.",
    },
    {
      textInitial: "Het the pan",
      textSecondary:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      textInitial: " Cook the omelette",
      textSecondary:
        "Once the butter is melted and bubbling, pour in the eggs, Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      textInitial: " Add fillings(optional)",
      textSecondary:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      textInitial: "Fold and serve",
      textSecondary:
        "As the omelette continues to cook,carfully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onta a plate.",
    },
    {
      textInitial: "Enjoys",
      textSecondary: " Serve hot, with additional salt and pepper if needed.",
    },
  ];

  const nutritions = [
    {
      clave: "Calories",
      valor: "277kcal",
    },
    {
      clave: "Carbs",
      valor: "0g",
    },
    {
      clave: "Protein",
      valor: "20g",
    },
    {
      clave: "Fat",
      valor: "22g",
    },
  ];

  const ingredients = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings:cheese,diced vegetables, cooked meats,herbs",
  ];
  const preparationTime = [
    {
      clave: "Total",
      valor: "Aproximately 10 minutes",
    },
    {
      clave: "Preparation",
      valor: "5 minutes",
    },
    {
      clave: "Cooking",
      valor: "5 minutes",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          width: "600px",
        }}
      >
        <div style={{ padding: "30px" }}>
          <img
            src="https://imgs.search.brave.com/4ylpzwR81G0KD46fkb8T2nBlPsBPIMxBlpYvU0G-VOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjkx/NTU0NDc4L3Bob3Rv/L29tZWxldC13aXRo/LXBhcnNsZXktY2hl/cnJ5LXRvbWF0b2Vz/LWFuZC1jb3B5c3Bh/Y2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUVEaThOaE9x/SU5oYUF1SjRJOVYx/NWxOR1pFczN1djFX/S1JPNV95ckxycGM9"
            style={{
              borderRadius: "10px",
              width: "100%",
            }}
          />

          <h1
            style={{ color: "black", fontSize: "35px", textAlign: "justify" }}
          >
            Simple Omelette Recipe
          </h1>
          <p style={{ color: "black", textAlign: "justify" }}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten egss cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div
            style={{
              backgroundColor: "#fef6fc",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3
              style={{
                color: "#764c61",
                textAlign: "justify",
                padding: "0px 20px",
              }}
            >
              Preparation time
            </h3>
            <ul>
              {preparationTime.map((item, idx) => (
                <li key={idx} style={{ color: "black", textAlign: "justify" }}>
                  <span style={{ fontWeight: "700" }}>{item.clave}:</span>
                  {item.valor}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 style={{ color: "#704333", textAlign: "justify" }}>
              Ingredients
            </h3>
            <ul>
              {ingredients.map((item, idx) => (
                <li key={idx} style={{ color: "black", textAlign: "justify" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* INSTRUCCIONES */}
          <div>
            <h3 style={{ color: "#704333", textAlign: "justify" }}>
              Instructions
            </h3>
            <ul>
              {instructions.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    color: "black",
                    listStyle: "number",
                    textAlign: "justify",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{item.textInitial}: </span>
                  {item.textSecondary}
                </li>
              ))}
            </ul>
          </div>

          {/* Nutricion */}

          <div>
            <h3 style={{ color: "#704333", textAlign: "justify" }}>Nutrition</h3>
            <p style={{ color: "black", textAlign: "justify" }}>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table style={{ width: "100%",borderCollapse
              :'collapse'
             }}>
              {nutritions.map((item, idx) => (
                <>
                  <tr
                    key={idx}
                    style={{
                      borderBottom:
                        idx != nutritions.length - 1
                          ? "1px solid black"
                          : "none",
                    }}
                  >
                    <td
                      style={{
                        color: "black",
                        textAlign: "justify",
                      }}
                    >
                      {item.clave}
                    </td>
                    <td
                      style={{
                        color: "#704333",
                        textAlign: "justify",
                      }}
                    >
                      {item.valor}
                    </td>
                  </tr>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
