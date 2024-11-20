"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <div className="flex">
            <img
              src="/renthub1.png"
              alt=""
              width={"90px"}
              height={"30px"}
              className="rounded"
            />
            <img
              src="./nigeria.png"
              alt=""
              width={"60px"}
              height={"30px"}
            />
          </div>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent focus:outline-none w-24 sm:w-64 border-none"
          />
          <button className="">
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex text-xl font-bold gap-6">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/onlinePayment">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Fees Payment
            </li>
          </Link>
          <Link to="/agent-dashboard">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Agent
            </li>
          </Link>
          <Link to="/tenant-dashboard">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Tenant
            </li>
          </Link>
          <Link to="/staff-dashboard">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Staff
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <>
                <>
                  <img
                    src={currentUser.avatar}
                    alt="profile"
                    className="rounded-full w-7 h-7 object-cover hover:p-0.5 object-transparent"
                  />
                </>
              </>
            ) : (
              <>
                <li className="sm:inline text-slate-700 hover:underline">
                  Sign-in
                </li>
              </>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
