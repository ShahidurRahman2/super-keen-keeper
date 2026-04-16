"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaStream, FaChartPie } from "react-icons/fa";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/", icon: <FaHome /> },
        { name: "Timeline", path: "/timeline", icon: <FaStream /> },
        { name: "Stats", path: "/stats", icon: <FaChartPie /> },
    ];

    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">

            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
                KeenKeeper
            </div>

            {/* Links */}
            <div className="flex gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`flex items-center gap-2 px-3 py-1 rounded-md transition 
              ${pathname === link.path
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:text-blue-600"
                            }`}
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}