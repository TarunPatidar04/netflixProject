import React from "react";

const VideoTitle = () => {
  return (
    <div className=" w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">Tarun</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        assumenda.
      </p>
      <div className="mt-10">
        <button className="px-6 py-2 text-black bg-white rounded-md bg-opacity-80">
          Play
        </button>
        <button className=" ml-4 px-6 py-2 text-black bg-white rounded-md">
          watch more
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
