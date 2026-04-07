import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

        <main className="min-h-screen flex-col">
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </main>

      <footer>
        <Footer />
      </footer>
      </div>
      </BrowserRouter>
    </>
  )
}
