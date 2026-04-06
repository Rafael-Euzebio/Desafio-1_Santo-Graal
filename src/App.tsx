import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <div style={{ textAlign: 'center' }}>
            Agile RiseUp — Desafio 1 - Santo Graal
          </div>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  )
}
