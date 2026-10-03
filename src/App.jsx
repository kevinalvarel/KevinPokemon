import { useState } from "react";
import "./App.css";
import { CardComponent } from "./_components/card";
import Pokemon from "./data/pokemon.json";

function App() {
  return (
    <main className="p-6 grid grid-cols-4 mx-auto w-full max-w-7xl gap-4">
      {Pokemon.map((item) => {
        return (
          <CardComponent
            key={item.title}
            judul={item.title}
            deskripsi={item.description}
            gambar={item.image}
          />
        );
      })}
    </main>
  );
}

export default App;
