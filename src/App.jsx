import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
///////// main pages////////
import Home from "./pages/Home";
import Sector from "./pages/Sector";
import Service from "./pages/Service";
import Layout from "./components/Layout";
import Resources from "./pages/Resources";
import ClientAndPartnership from "./pages/ClientAndPartnership";
/////// sub-pages//////////
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="sector" element={<Sector />} />
          <Route path="resources" element={<Resources />} />
          <Route
            path="client & partnership"
            element={<ClientAndPartnership />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
