import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <main>
          <div className="min-h-screen flex flex-col">
            Agile RiseUp — Desafio 1 - Santo Graal
          </div>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}
