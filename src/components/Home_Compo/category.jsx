import React from "react";

export default function category() {
  return (
    <div className=" w-[85%] my-10 mx-auto sm:w-[90%] ">
    <h1 className=" text-center text-xl my-6 font-semibold text-gray-500">Features</h1>
      <div className=" grid grid-cols-4 gap-4 sm:grid-cols-1">
        
          <div className=" text-center py-20 rounded-lg bg-green-400">
            <h1 className=" text-xl font-semibold">Project Uploading</h1>
          </div>

          <div className=" text-center py-20 rounded-lg bg-purple-400">
            <h1 className=" text-xl font-semibold">Paper Uploading</h1>
          </div>

          <div className=" text-center py-20 rounded-lg bg-red-500">
            <h1 className=" text-xl font-semibold">All Course</h1>
          </div>

          <div className=" text-center py-20 rounded-lg bg-gray-400">
            <h1 className=" text-xl font-semibold">Follow & Like Posts</h1>
          </div>

          <div className=" text-center py-20 rounded-lg bg-teal-500">
            <h1 className=" text-xl font-semibold">Filter your projects better</h1>
          </div>

          <div className=" text-center py-20 rounded-lg bg-orange-500">
            <h1 className=" text-xl font-semibold">Who View My Projects</h1>
          </div>
      </div>
    </div>
  );
}
