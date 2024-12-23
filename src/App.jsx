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
import Hotels from "./pages/subpages/Hotels";
import Hospitals from "./pages/subpages/Hospitals";
import College from "./pages/subpages/College";
import StoresAndMalls from "./pages/subpages/StoresAndMalls";
import CorporateOffices from "./pages/subpages/CorporateOffices";
import SuccessStoriesSub from "./pages/subpages/successStories sub";
import BlogSub from "./pages/subpages/blogSub";
import ContactUs from "./pages/subpages/ContactUs";
import AboutUs from "./pages/subpages/AboutUs";
import Carriers from "./pages/carriers";
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
          <Route path="hotels" element={<Hotels />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="college" element={<College />} />
          <Route path="storesandmalls" element={<StoresAndMalls />} />
          <Route path="corporateoffices" element={<CorporateOffices />} />
          <Route path="successstoriessub" element={<SuccessStoriesSub />} />
          <Route path="blogsub" element={<BlogSub />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="carriers" element={<Carriers />} />
        </Route>
      </Routes>
    </Router>
  );
}
