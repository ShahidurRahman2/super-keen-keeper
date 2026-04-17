"use client";

import { useGlobal } from "@/context/GlobalContext";
import { useState } from "react";

export default function TimelinePage() {
    const { timeline } = useGlobal();

    //  search ar state
    const [search, setSearch] = useState("");

    // filter ar logic 
    const filteredTimeline = timeline.filter((item) =>
        item.type.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Timeline</h1>

            {/*  SEARCH  */}
            <input
                type="text"
                placeholder="Search (call, text, video)..."
                className="input input-bordered w-full mb-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filteredTimeline.length === 0 ? (
                <p>No interactions found</p>
            ) : (
                <div className="space-y-3">
                    {filteredTimeline.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 bg-base-200 rounded flex justify-between"
                        >
                            <div>
                                <p className="font-bold">{item.title}</p>
                                <p className="text-sm text-gray-500">
                                    {item.date}
                                </p>
                            </div>

                            <span className="badge">
                                {item.type}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}