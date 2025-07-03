import { useState } from "react";
import { Navbar } from "./days/day-01-navbar/Navbar";

function App() {
  const [activePage, setActivePage] = useState("Home");
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        <h1 className="m-16">{activePage} PAGE</h1>
      </div>
    </>
  );
}

export default App;
