import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="homepage" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
