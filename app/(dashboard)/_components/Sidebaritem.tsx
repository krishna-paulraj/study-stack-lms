"use client";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SidebaritemProps {
  icon: LucideIcon;
  label: string;
  herf: string;
}

const Sidebaritem = ({ icon: Icon, label, herf }: SidebaritemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && herf === "/") ||
    pathname === herf ||
    pathname?.startsWith(`${herf}/`);

  const onClick = () => {
    router.push(herf);
  };

  return <button onClick={onClick} type="button" className=""></button>;
};

export default Sidebaritem;
