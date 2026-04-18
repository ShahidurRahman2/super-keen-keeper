"use client";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
export default function Footer() {
    return (

        <div  >

            <footer className="footer mt-4 footer-horizontal bg-[#244D3F] footer-center  bottom-0 left-0 w-full text-white space-y-3 p-4">
                <div className="space-y-4 mt-6">
                    <h1 className="text-3xl">KeenKeeper</h1>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>

                <nav>
                    <h1 className="text-center text-2xl">Social Links</h1>
                    <div className="grid grid-flow-col gap-4">
                        <a href="">
                            <FaInstagram className=" w-[25px]
                               h-[25px]"/>

                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                        <a href="">
                            <RiTwitterXFill className=" w-[24px]
                               h-[24px]"  />

                        </a>
                    </div>
                </nav>
                <aside className="flex gap-4  justify-between">
                    <div><p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p></div>
                    <div>
                        <ul className="flex gap-2">
                            <li>Privacy Policy</li>
                            <li>Terms of Services</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </aside>
            </footer>
        </div >
    )
}