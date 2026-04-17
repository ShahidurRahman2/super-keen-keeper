"use client";

import { useGlobal } from "@/context/GlobalContext";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function StatsPage() {
    const { timeline } = useGlobal();

    // COUNT TYPES  HERE LOOK
    const callCount = timeline.filter((t) => t.type === "Call").length;
    const textCount = timeline.filter((t) => t.type === "Text").length;
    const videoCount = timeline.filter((t) => t.type === "Video").length;

    // CHART DATA  HERE LOOK
    const data = [
        { name: "Call", value: callCount },
        { name: "Text", value: textCount },
        { name: "Video", value: videoCount },
    ];

    const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">
                Friendship Analytics
            </h1>

            {timeline.length === 0 ? (
                <p>No data yet</p>
            ) : (
                <div className="w-full h-[400px]">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                dataKey="value"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>

                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}