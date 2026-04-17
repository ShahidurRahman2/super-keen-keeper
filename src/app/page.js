"use client";

import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { useState, useEffect } from "react";
import friendsData from "@/data/friends.json";
import Link from "next/link";

export default function Home() {
  const [friends] = useState(friendsData);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  //  CALCULATE STATS 
  const total = friends.length;
  const completed = friends.filter(f => f.status === "on-track").length;
  const pending = friends.filter(f => f.status === "overdue").length;
  const highPriority = friends.filter(f => f.status === "almost due").length;

  if (loading) {
    return (
      <div className="p-6 text-xl font-bold">
        Loading friends...
      </div>
    );
  }

  return (
    <>
      {/* ===== BANNER  ===== */}
      <div className="p-6 space-y-10">
        <div className="hero bg-base-200 rounded-2xl">
          <div className="hero-content text-center">
            <div className="max-w-[482px]">
              <h1 className="text-3xl font-bold ">
                Friends to keep close in your life
              </h1>
              <p className="py-4">
                Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.
              </p>
              <button className="btn bg-[#244D3F] text-white">
                <IoMdAdd />Add a Friend
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto">

        <div className="card shadow-xl">
          <div className="card-body text-center text-[#244D3F]">
            <h2 className="text-lg">Total Friends</h2>
            <p className="text-3xl font-bold">{total}</p>
          </div>
        </div>

        <div className="card shadow-xl">
          <div className="card-body text-center text-[#244D3F]">
            <h2 className="text-lg">On Track</h2>
            <p className="text-3xl font-bold">{completed}</p>
          </div>
        </div>

        <div className="card shadow-xl">
          <div className="card-body text-center text-[#244D3F]">
            <h2 className="text-lg">Overdue</h2>
            <p className="text-3xl font-bold">{pending}</p>
          </div>
        </div>

        <div className="card shadow-xl">
          <div className="card-body text-center text-[#244D3F]">
            <h2 className="text-lg">Almost Due</h2>
            <p className="text-3xl font-bold">{highPriority}</p>
          </div>
        </div>

      </div>

      {/* ===== ===== */}
      <div className="w-[90%] mx-auto mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {friends.map((friend) => (


            <Link
              key={friend.id}
              href={`/friends/${friend.id}`}
            >
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition">


                <figure>
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="h-30 w-30 rounded-full "
                  />
                </figure>

                <div className="card-body text-center w-[80%] mx-auto">

                  <h2 className="card-title text-center">
                    {friend.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {friend.email}
                  </p>

                  <p className="text-sm">
                    {friend.days_since_contact} days since contact
                  </p>

                  <div className="flex flex-wrap gap-2 w-[99%] mx-auto mt-2">
                    {friend.tags.map((tag, index) => (
                      <span key={index} className="badge badge-outline">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`mt-3 badge text-white w-[80%] mx-auto ${friend.status === "overdue"
                      ? "bg-red-500"
                      : friend.status === "almost due"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                      }`}
                  >
                    {friend.status}
                  </div>

                </div>
              </div>
            </Link>

          ))}

        </div>
      </div>
    </>
  );
}