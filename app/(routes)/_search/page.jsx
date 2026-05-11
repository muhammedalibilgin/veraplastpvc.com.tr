"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        if (!query) return;

        setLoading(true);
        setError(null);

        fetch(`http://localhost:3001/api/search?q=${query}&limit=all`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Arama başarısız.");
                }
                return res.json();
            })
            .then((data) => {
                setResults(data.results || []);
                setTotalCount(data.totalCount || 0);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [query]);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">
                    Arama Sonuçları:{" "}
                    <span className="text-blue-600">"{query}"</span>
                </h1>

                {loading && <p className="text-gray-600">Yükleniyor...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && results.length === 0 && (
                    <p className="text-gray-500">Sonuç bulunamadı.</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {results.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow hover:shadow-md transition p-4 border"
                        >
                            <img
                                src={item.images?.[0].url || ""}
                                alt={item.name || "Resim"}
                                className="w-full h-32 object-cover rounded"
                            />
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.name || "Başlık"}
                            </h2>
                            <p className="text-sm text-gray-600 line-clamp-2">
                                {item.price || "Fiyat"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
