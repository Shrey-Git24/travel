import Home from "./components/home/Home";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  );
}
