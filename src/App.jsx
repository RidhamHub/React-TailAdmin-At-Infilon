import "./App.css";
import Side from "./Side.jsx";
import Nav from "./Nav.jsx";
import Ecommerce from "./Ecomerce.jsx";
import Check from "./Check.jsx";
import { Routes, Route } from "react-router-dom";
import Analytics from "./Analytics.jsx";
import Marketing from "./Marketing.jsx";
import Crm from "./CRM.jsx";
import Stocks from "./Stocks.jsx";
import TextGenerator from "./TextGenerator.jsx";
import ImageGenerator from "./ImageGenerator.jsx";
import CodeGenerator from "./CodeGenerator.jsx";
import VideoGenerator from "./VideoGenerator.jsx";
import Products from "./Products.jsx";
import "simple-datatables/dist/style.css";

function App() {
  return (
    <div className="flex w-full">
      <div>
        <Side />
      </div>
      <div className="flex-1 w-full">
        <Nav />
        <Routes>
          <Route path="/" element={<Ecommerce />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/crm" element={<Crm />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/text-generator" element={<TextGenerator />} />
          <Route path="/image-generator" element={<ImageGenerator />} />
          <Route path="/code-generator" element={<CodeGenerator />} />
          <Route path="/video-generator" element={<VideoGenerator />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
