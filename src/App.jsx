import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/PagesComponents/Home/Home";
import WhyAlivio from "./components/PagesComponents/WhyAlivio/WhyAlivio";
import Solutions from "./components/PagesComponents/Solutions/Solutions";
import Community from "./components/PagesComponents/Community/Community";
import Pricing from "./components/PagesComponents/Pricing/Pricing";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whyAlivio" element={<WhyAlivio />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/community" element={<Community />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
