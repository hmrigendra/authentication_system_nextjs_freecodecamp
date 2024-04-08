"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
useState;

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="p-1 rounded bg-orange-500">
        {data === "nothing" ? (
          "Nothing"
        ) : (
                      <Link
                          rel="stylesheet" href={"/profile/${data"}>{data}
                      </Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-2 rounded-md"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 m-2 rounded-md"
      >
        User Details
      </button>
    </div>
  );
}
