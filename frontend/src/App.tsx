import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
    <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;