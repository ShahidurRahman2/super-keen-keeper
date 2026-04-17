"use client";

import { useGlobal } from "@/context/GlobalContext";

export default function TimelinePage() {
    const { timeline } = useGlobal();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Timeline</h1>

            {timeline.length === 0 ? (
                <p>No interactions yet</p>
            ) : (
                <div className="space-y-3">
                    {timeline.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 bg-base-200 rounded flex justify-between"
                        >
                            <div>
                                <p className="font-bold">{item.title}</p>
                                <p className="text-sm text-gray-500">{item.date}</p>
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