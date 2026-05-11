"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Container from "../ui/container";

const Categories = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const router = useRouter();

    const categories = [
        {
            id: 1,
            title: "60'lık seri",
            name: "Momentum",
            icon: "/categories/1.png",
            url: "/momentum-60"
        },
        {
            id: 2,
            title: "70'lik seri",
            name: "Dinamic",
            icon: "/categories/2.png",
            url: "/dinamic-70"
        },
        {
            id: 4,
            title: "80'lik seri",
            name: "Energy",
            icon: "/categories/4.png",
            url: "/energy-80"
        },
        {
            id: 3,
            title: "Easyslide",
            name: "Sürme Seri",
            icon: "/categories/3.png",
            url: "/easyslide-surme-seri"
        },        
        {
            id: 5,
            title: "Isotherm",
            name: "Isı Yalıtımlı seri",
            icon: "/categories/5.png",
            url: "/isotherm"
        },
    ];

    return (
        <div className="w-full relative px-4 z-10 lg:-top-12">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-lg:pt-4 gap-1 lg:gap-0">
                    {categories.map((category, index) => {
                        const isFirst = index === 0;
                        const isLast = index === categories.length - 1;
                        const isFirstInRow = index % 5 === 0; // Desktop için
                        const isLastInRow = index % 5 === 4; // Desktop için

                        return (
                            <div key={category.id} className={`relative group flex justify-center items-center cursor-pointer bg-white border border-gray-200 p-6 transition-all duration-300 h-[250px] ${hoveredCategory === category.id ? "shadow-lg" : ""} ${"lg:rounded-none " + (isFirstInRow ? "lg:rounded-l-lg " : "") + (isLastInRow ? "lg:rounded-r-lg " : "") + "max-lg:rounded-lg"}`} onMouseEnter={() => setHoveredCategory(category.id)} onMouseLeave={() => setHoveredCategory(null)} onClick={() => router.push(category.url)}>
                                {/* Normal State */}
                                <div className={`text-center transition-opacity duration-300`}>
                                    <div className="text-3xl mb-3 flex justify-center">
                                        <img src={category.icon} alt={category.title} className="object-contain" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">{category.title}<br/>{category.name}</h3>
                                </div>

                                {/* Hover Arrow - sadece hover olduğunda görünür */}
                                <div className={`absolute top-1/2 right-4 transition-opacity duration-300 ${hoveredCategory === category.id ? "opacity-100" : "opacity-0"}`} style={{ transform: "translateY(-50%)" }}>
                                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Categories;
