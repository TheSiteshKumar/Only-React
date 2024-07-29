import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-300 p-4 mb-4   rounded-xl ">
        Props with Tailwind
      </h1>
      <div className="flex">
      <Card
        title="Macbook Air M1"
        desc="MacBook Air, and the new MacBook Pro 14″ and 16″. Learn more. Intuitive by design. You can do more than you ever imagined."
        btn="Buy Now"
        image="https://images.unsplash.com/photo-1609144324678-dff17a2d8892?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <Card
        title="iPhone 15 Pro"
        desc="From ₹21483.00/mo.Per Month with instant savings§§ and No Cost EMI§Footnote or₹134900.00Footnote‡"
        btn="Shop"
        image="https://images.unsplash.com/photo-1695619575474-9b45e37bc1e6?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      </div>
      
    </>
  );
}

export default App;
