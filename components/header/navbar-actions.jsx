"use client";

import { SearchIcon, ShoppingBag, BookOpen, FileText, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const inputRef = useRef(null);

    const router = useRouter();
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Live search
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery.length > 2) {
                fetch(`http://localhost:3001/api/search?q=${searchQuery}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setSearchResults(data.results || []);
                        setTotalCount(data.totalCount || 0);
                    })
                    .catch((err) => console.error("Arama hatası", err));
            } else {
                setSearchResults([]);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);

    const handleSearch = () => {
        router.push(`/search?q=${searchQuery}`);
        setSearchVisible(false);
        setSearchResults([]);
    };

    const handleResultClick = (slug) => {
        router.push(`/product/${slug}`);
        setSearchVisible(false);
        setSearchQuery("");
        setSearchResults([]);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSearchVisible(false);
            }
        };
        if (searchVisible && inputRef.current) {
            inputRef.current.focus();
        }
    
        if (searchVisible) {
            document.body.classList.add("overflow-hidden");
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    
        return () => {
            document.body.classList.remove("overflow-hidden");
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [searchVisible]);
    

    if (!isMounted) {
        return null;
    };    

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <button onClick={() => setSearchVisible(true)} className="flex items-center rounded-full p-2">
                <SearchIcon size={20} color="black" aria-label="search icon" />
            </button>

            {searchVisible && (
                <>
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSearchVisible(false)}></div>

                    {/* Search Box */}
                    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            ref={inputRef}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:orange-500"
                        />

                        {/* Arama Sonuçları */}
                        {searchResults.length > 0 && (
                            <ul className="absolute top-full w-full bg-white border border-gray-200 rounded-md max-h-60 overflow-y-auto z-10 left-0">
                                {searchResults.slice(0, 5).map((item) => (
                                    <li key={item.id} onClick={() => handleResultClick(item.id)} className="p-2 hover:bg-gray-100 cursor-pointer">
                                        {item.name}
                                    </li>
                                ))}
                                {totalCount > searchResults.length && (
                                    <li onClick={() => router.push(`/search?q=${searchQuery}`)} className="p-2 bg-gray-100 text-blue-500 text-center cursor-pointer hover:underline">
                                        Tüm sonuçları gör ({totalCount})
                                    </li>
                                )}
                            </ul>
                        )}

                        <button onClick={() => setSearchVisible(false)} className="mt-2 w-full bg-gray-700 text-white py-2 rounded-md">
                            Kapat
                        </button>
                    </div>
                </>
            )}

            {/* <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white" aria-label="shopping bag for card" />
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button> */}

            {/* E-Katalog Dropdown */}
            <div className="relative hidden lg:block">
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex h-[57px] items-center justify-start px-[13px] pr-[40px] font-montserrat text-[14px] text-[#596574] border border-[#E2E5EA] bg-transparent opacity-80 cursor-pointer relative rounded-[2px] hover:opacity-100 transition-opacity"
                >
                    <span>E-Katalog</span>
                    <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                    <>
                        {/* Overlay */}
                        <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setDropdownOpen(false)}
                        />

                        {/* Dropdown Menu */}
                        <ul className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                            <li>
                                <a
                                    href="/katalog.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-x-3 px-4 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    <BookOpen size={18} className="text-gray-600" />
                                    <span className="text-gray-900">Kataloglar</span>
                                </a>
                            </li>
                            <li className="border-t border-gray-100">
                                <a
                                    href="/brosur.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-x-3 px-4 py-3 hover:bg-gray-100 transition-colors"
                                >
                                    <FileText size={18} className="text-gray-600" />
                                    <span className="text-gray-900">Broşürler</span>
                                </a>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavbarActions;
