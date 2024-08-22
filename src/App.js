import "./App.scss";
import AppContent from "./components/Pages/App-content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Pages/Cart";
import Profile from "./components/Pages/Profile";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
          <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
