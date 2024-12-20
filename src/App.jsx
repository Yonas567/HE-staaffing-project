import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
///////// main pages////////
import Home from "./pages/Home";
import Sector from "./pages/Sector";
import Service from "./pages/Service";
import Layout from "./components/Layout";
import Resources from "./pages/Resources";
import ClientAndPartnership from "./pages/ClientAndPartnership";
/////// sub-pages//////////
import SecurityStaffing from "./pages/subpages/securityStaffing";
import CleaningStaffing from "./pages/subpages/cleaningStaffing";
import ManagementStaffing from "./pages/subpages/managementStaff";
import Consulting from "./pages/subpages/consulting";
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
          <Route path="securityStaffing" element={<SecurityStaffing />} />
          <Route path="cleaningStaffing" element={<CleaningStaffing />} />
          <Route path="managementStaffing" element={<ManagementStaffing />} />
          <Route path="consulting" element={<Consulting />} />
        </Route>
      </Routes>
    </Router>
  );
}
