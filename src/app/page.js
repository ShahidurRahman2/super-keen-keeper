"use client";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import friendsData from "@/data/friends.json";


export default function Home() {
  const [friends] = useState(friendsData);
  return (
    <>
      <div className="p-6 space-y-10">

        {/* Banner done just under the line */}
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

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] mx-auto">

        <div className="card   shadow-xl">
          <div className="card-body text-center text-[#244D3F]">
            <h2 className="text-lg">Total Tasks</h2>
            <p className="text-3xl font-bold">24</p>
          </div>
        </div>

        <div className="card   shadow-xl">
          <div className="card-body text-center text-[#244D3F]">
            <h2 className="text-lg">Completed</h2>
            <p className="text-3xl font-bold">10</p>
          </div>
        </div>

        <div className="card  shadow-xl">
          <div className="card-body text-center text-[#244D3F]">
            <h2 className="text-lg">Pending</h2>
            <p className="text-3xl font-bold">8</p>
          </div>
        </div>

        <div className="card   shadow-xl">
          <div className="card-body text-center text-[#244D3F]">
            <h2 className="text-lg">High Priority</h2>
            <p className="text-3xl font-bold">6</p>
          </div>
        </div>

      </div>

      {/* card data here showing under */}
      <div className="w-[90%] mx-auto mt-10">

        <h2 className="text-2xl font-bold mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {friends.map((friend) => (

            <div
              key={friend.id}
              className="card bg-base-100 shadow-xl hover:scale-105 transition"
            >

              {/* IMAGE */}
              <figure>
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="h-30 w-30 rounded-full "
                />
              </figure>

              <div className="card-body text-center w-[80%] mx-auto  ">

                {/* NAME */}
                <h2 className="card-title text-center">{friend.name}</h2>

                {/* EMAIL */}
                <p className="text-sm  text-gray-500">
                  {friend.email}
                </p>

                {/* DAYS */}
                <p className="text-sm">
                  📅 {friend.days_since_contact} days since contact
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 w-[99%] mx-auto mt-2">
                  {friend.tags.map((tag, index) => (
                    <span key={index} className="badge badge-outline">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* STATUS */}
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

          ))}

        </div>
      </div>

    </>

  );
}
