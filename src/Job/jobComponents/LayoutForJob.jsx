import HeaderForJob from "./headerForJob";
import FooterForJob from "./FooterForJob";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <header>
        <HeaderForJob />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <FooterForJob />
      </footer>
    </div>
  );
}
