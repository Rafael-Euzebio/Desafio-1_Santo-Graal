import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <header>
        <Navbar />
      </header>

        <main className="min-h-[60vh] flex flex-col">
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
        
      </BrowserRouter>
    </>
  )
}
