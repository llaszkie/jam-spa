import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "src/components/hero";
import Home from "src/components/home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":heroId" element={<Hero />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
