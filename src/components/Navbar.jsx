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
        <div className="navbar bg-base-100 shadow-sm px-4">

            {/* LEFT: Logo */}
            <div className="navbar-start">
                <Link href="/" className="btn btn-ghost text-2xl font-bold">
                    KeenKeeper
                </Link>
            </div>

            {/* RIGHT: Desktop Menu */}
            <div className="navbar-end hidden md:flex gap-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`flex items-center gap-2 px-3 py-1 rounded-md ${pathname === link.path
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:text-blue-600"
                            }`}
                    >
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* RIGHT: Mobile Dropdown */}
            <div className="navbar-end md:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        {/* Hamburger Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box"
                    >
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`flex items-center gap-2 ${pathname === link.path
                                            ? "bg-blue-600 text-white"
                                            : ""
                                        }`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}