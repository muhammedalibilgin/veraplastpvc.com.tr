"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/menuData";
import { Menu, X, ChevronDown, BookOpen, FileText } from "lucide-react";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenuId, setOpenMenuId] = useState(null);
    const [openCatalogMenu, setOpenCatalogMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleSubMenu = (menuId) => {
        setOpenMenuId(openMenuId === menuId ? null : menuId);
    };

    return (
        <div className="lg:hidden">
            <button onClick={toggleMenu} className="p-2 text-gray-700">
                <Menu size={30} />
            </button>

            {isOpen && <div className="fixed inset-0 bg-black/50 z-[99] transition-opacity" onClick={toggleMenu} />}

            <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center p-5 border-b">
                    <span className="font-bold text-lg">MENÜ</span>
                    <button onClick={toggleMenu}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="overflow-y-auto h-[calc(100%-70px)] pt-4">
                    <ul className="space-y-4">
                        {NAV_LINKS.map((item) => (
                            <li key={item.id} className="border-b border-[#ddd] pb-2 px-4">
                                {item.isMega ? (
                                    <div>
                                        <button onClick={() => toggleSubMenu(item.id)} className="flex items-center justify-between w-full text-left font-medium text-gray-800">
                                            {item.label}
                                            <ChevronDown className={`transition-transform ${openMenuId === item.id ? "rotate-180" : ""}`} size={18} />
                                        </button>

                                        {openMenuId === item.id && (
                                            <ul className="mt-3 ml-4 space-y-3 bg-[#ddd] p-3 rounded-lg">
                                                {item.columns.flat().map((subLink, index) => (
                                                    <li key={index}>
                                                        <Link href={subLink.href} className="text-gray-600 block text-sm" onClick={toggleMenu}>
                                                            › {subLink.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <Link href={item.href} className="block font-medium text-gray-800" onClick={toggleMenu}>
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="relative flex justify-end mt-4 mr-4">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex h-[57px] items-center justify-start px-[13px] pr-[40px] font-montserrat text-[14px] text-[#596574] border border-[#E2E5EA] bg-transparent opacity-80 cursor-pointer relative rounded-[2px] hover:opacity-100 transition-opacity">
                            <span>E-Katalog</span>
                            <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        {dropdownOpen && (
                            <>
                                {/* Overlay */}
                                <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />

                                {/* Dropdown Menu */}
                                <ul className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <li>
                                        <a href="/katalog.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 px-4 py-3 hover:bg-gray-100 transition-colors">
                                            <BookOpen size={18} className="text-gray-600" />
                                            <span className="text-gray-900">Kataloglar</span>
                                        </a>
                                    </li>
                                    <li className="border-t border-gray-100">
                                        <a href="/brosur.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-3 px-4 py-3 hover:bg-gray-100 transition-colors">
                                            <FileText size={18} className="text-gray-600" />
                                            <span className="text-gray-900">Broşürler</span>
                                        </a>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
