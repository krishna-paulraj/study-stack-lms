import NavbarRoutes from "@/components/navbar-routes";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className="h-full p-4 border-b flex items-center bg-white shadow-sm">
      <MobileSideBar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
