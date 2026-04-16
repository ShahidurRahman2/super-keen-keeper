
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";

export default function Home() {
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
    </>

  );
}
