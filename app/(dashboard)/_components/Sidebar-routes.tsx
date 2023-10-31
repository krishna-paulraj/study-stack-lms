"use client";
import { Compass, Layout } from "lucide-react";
import Sidebaritem from "./Sidebaritem";

export default function SidebarRoutes() {
  const guestRoutes = [
    { icon: Layout, label: "Dashboard", herf: "/" },
    { icon: Compass, label: "Browse", herf: "/search" },
  ];
  return (
    <div>
      {" "}
      {guestRoutes.map((route) => (
        <Sidebaritem
          key={route.herf}
          icon={route.icon}
          label={route.label}
          herf={route.herf}
        />
      ))}{" "}
    </div>
  );
}
