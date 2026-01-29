import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import SmoothFollower from "../common/SmoothFollower";
import GridBackground from "../common/GridBackground";
import ScrollToTop from "../common/ScrollToTop";
import useScrollTop from "../../hooks/useScrollTop";

const MainLayout = () => {
  useScrollTop();

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <SmoothFollower />
      <GridBackground />
      <Navbar />
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
