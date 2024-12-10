import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout() {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <header>
        <Header nav={nav} setNav={setNav} />
      </header>
      <main className={`${nav ? "" : "block"}`}>
        <Outlet />
      </main>
      <footer className={`${nav ? "" : "block"}`}>
        <Footer />
      </footer>
    </div>
  );
}
