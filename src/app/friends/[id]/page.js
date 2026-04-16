"use client";

import friends from "@/data/friends.json";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function FriendDetails() {
    const { id } = useParams();

    const friend = friends.find((f) => f.id == id);

    const [timeline, setTimeline] = useState([]);

    if (!friend) return <p className="p-6">Friend not found</p>;

    const addTimeline = (type) => {
        const newEntry = {
            id: Date.now(),
            type,
            title: `${type} with ${friend.name}`,
            date: new Date().toLocaleDateString(),
        };

        setTimeline([newEntry, ...timeline]);
    };

    const statusColor =
        friend.status === "overdue"
            ? "bg-red-500"
            : friend.status === "almost due"
                ? "bg-yellow-500"
                : "bg-green-500";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">

            {/* LEFT SIDE */}
            <div className="card bg-base-200 shadow-xl p-4">
                <img src={friend.picture} className="rounded-xl h-60 object-cover" />

                <h1 className="text-2xl font-bold mt-3">{friend.name}</h1>

                <span className={`badge mt-2 ${statusColor}`}>
                    {friend.status}
                </span>

                <div className="flex gap-2 mt-2">
                    {friend.tags.map((tag, i) => (
                        <span key={i} className="badge badge-outline">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="mt-3">{friend.bio}</p>
                <p className="text-sm">{friend.email}</p>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col gap-2 mt-4">
                    <button className="btn btn-warning">⏰ Snooze 2 Weeks</button>
                    <button className="btn btn-info">📦 Archive</button>
                    <button className="btn btn-error">🗑️ Delete</button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-4">

                {/* STATS */}
                <div className="grid grid-cols-3 gap-3">
                    <div className="card bg-base-200 p-3 text-center">
                        <p>Days</p>
                        <b>{friend.days_since_contact}</b>
                    </div>

                    <div className="card bg-base-200 p-3 text-center">
                        <p>Goal</p>
                        <b>{friend.goal}</b>
                    </div>

                    <div className="card bg-base-200 p-3 text-center">
                        <p>Next Due</p>
                        <b>{friend.next_due_date}</b>
                    </div>
                </div>

                {/* GOAL */}
                <div className="card bg-base-200 p-4">
                    <h2 className="font-bold">Relationship Goal</h2>
                    <p>Contact every {friend.goal} days</p>
                    <button className="btn btn-sm mt-2">Edit</button>
                </div>

                {/* QUICK CHECK-IN */}
                <div className="card bg-base-200 p-4">
                    <h2 className="font-bold mb-2">Quick Check-In</h2>

                    <div className="flex gap-2">
                        <button className="btn btn-primary" onClick={() => addTimeline("Call")}>
                            Call
                        </button>

                        <button className="btn btn-secondary" onClick={() => addTimeline("Text")}>
                            Text
                        </button>

                        <button className="btn btn-accent" onClick={() => addTimeline("Video")}>
                            Video
                        </button>
                    </div>
                </div>

                {/* TIMELINE */}
                <div className="card bg-base-200 p-4">
                    <h2 className="font-bold mb-2">Timeline</h2>

                    {timeline.length === 0 ? (
                        <p>No interactions yet</p>
                    ) : (
                        timeline.map((t) => (
                            <div key={t.id} className="border-b py-2">
                                <p className="font-semibold">{t.title}</p>
                                <p className="text-sm">{t.date}</p>
                            </div>
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}