"use client";
import { BarChart, Compass, Layout, List } from "lucide-react";
import Sidebaritem from "./Sidebaritem";
import { usePathname } from "next/navigation";

export default function SidebarRoutes() {
  const pathname = usePathname();
  const isTeacher = pathname?.includes("/teacher");
  const guestRoutes = [
    { icon: Layout, label: "Dashboard", herf: "/" },
    { icon: Compass, label: "Browse", herf: "/search" },
  ];
  const teacherRoutes = [
    { icon: List, label: "Courses", herf: "/teacher/courses" },
    { icon: BarChart, label: "Analytics", herf: "/teacher/analytics" },
  ];

  const routes = isTeacher ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <Sidebaritem
          key={route.herf}
          icon={route.icon}
          label={route.label}
          herf={route.herf}
        />
      ))}
    </div>
  );
}
