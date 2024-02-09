import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Nearvy from "./components/Nearvy/Nearvy";

function App() {
  return (
    <>
      <div style={{ background: "#083758", color: "white", padding: "20px", textAlign: "center", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)", backgroundImage: "linear-gradient(to bottom, #083758, #061c2b)", fontSize: "1.5rem" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "2rem" }}>LAS BRISAS DE CIX</h1>
      </div>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/nearvy" element={<Nearvy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
