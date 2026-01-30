import "./App.css";
import Ecommerce from "./Ecomerce.jsx";
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
import AddProduct from "./AddProduct.jsx";
import Billing from "./Billing.jsx";
import Invoices from "./Invoices.jsx";
import SingleInvoice from "./SingleInvoice.jsx";
import CreateInvoice from "./CreateInvoice.jsx";
import ProductForm from "./ProductForm.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Layout from "./Layout.jsx";
import ProtectedRoutes from "./components/ProtectedRoute.jsx";
import NotFound from "./NotFound .jsx";

function App() {
  return (
    <Routes>
       {/* Public routes - no layout  */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/*" element={<NotFound />} />

      {/* Protected routes - with layout */}

      <Route
        path="/*"
        element={
          <ProtectedRoutes>
            <Layout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Products />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="crm" element={<Crm />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="text-generator" element={<TextGenerator />} />
        <Route path="image-generator" element={<ImageGenerator />} />
        <Route path="code-generator" element={<CodeGenerator />} />
        <Route path="video-generator" element={<VideoGenerator />} />
        <Route path="products" element={<Products />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="billing" element={<Billing />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="single-invoice" element={<SingleInvoice />} />
        <Route path="create-invoice" element={<CreateInvoice />} />
        <Route path="product-form" element={<ProductForm />} />
        <Route path="product-form/edit/:id" element={<ProductForm />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
