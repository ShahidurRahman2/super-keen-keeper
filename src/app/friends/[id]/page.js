"use client";
import { useGlobal } from "@/context/GlobalContext";
import friends from "@/data/friends.json";
import { useParams } from "next/navigation";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineArchive } from "react-icons/md";
import { HiBellSnooze } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { toast } from "react-toastify";


export default function FriendDetails() {
    const { id } = useParams();
    const { timeline, addTimeline } = useGlobal();
    const friend = friends.find((f) => f.id == id);



    if (!friend) return <p className="p-6">Friend not found</p>;



    const statusColor =
        friend.status === "overdue"
            ? "bg-red-500"
            : friend.status === "almost due"
                ? "bg-yellow-500"
                : "bg-green-500";

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">

            {/* LEFT */}
            <div className="card bg-base-200 shadow-xl p-4  items-center  text-center w-1/2 mx-auto">
                <img src={friend.picture} className="rounded-full h-40 w-40  " />

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
                    <button className="btn "><HiBellSnooze /> Snooze 2 Weeks</button>
                    <button className="btn "><MdOutlineArchive /> Archive</button>
                    <button className="btn ">
                        <MdDeleteForever /> Delete</button>
                </div>
            </div>

            {/* RIGHT */}
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
                <div className="card grid grid-cols-2  bg-base-200 p-4">
                    <div>
                        <h2 className="font-bold">Relationship Goal</h2>
                        <p>Contact every {friend.goal} days</p>
                    </div>
                    <div className="content-end">
                        <button className="btn btn-sm mt-2">Edit</button>
                    </div>
                </div>

                {/* QUICK CHECK-IN */}
                <div className="card bg-base-200 p-4">
                    <h2 className="font-bold mb-2">Quick Check-In</h2>

                    <div className="flex gap-2">
                        <button className="btn " onClick={() => {
                            addTimeline("Call", friend.name);
                            toast.success(`Call with ${friend.name}`);
                        }}>
                            <IoCallOutline /> Call
                        </button>


                        <button
                            className="btn" onClick={() => {
                                addTimeline("Text", friend.name);
                                toast.info(`Text with ${friend.name}`);
                            }}
                        >
                            <MdOutlineMessage /> Text
                        </button>

                        <button className="btn " onClick={() => {
                            addTimeline("Video", friend.name);
                            toast(`Video with ${friend.name}`);
                        }}>
                            <IoVideocamOutline />   Video
                        </button>


                    </div>
                </div>



            </div>
        </div>
    );
}