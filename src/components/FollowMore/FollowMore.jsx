import React from "react";

function FollowMore() {
  return (
    <div>
      <div className="px-5 py-2">
        <div className="mt-2 bg-hover-dark rounded-3xl w-4/5">
          <h1 className="text-light p-5 text-left font-extrabold text-2xl ">
            Who to Follow
          </h1>
          <div className="flex items-start py-3">
            <img
              src="images/Amir-01.png"
              alt="profile-image"
              className="ml-5 w-16 rounded-full"
            />
            <div className="flex flex-col px-3">
              <h1 className="text-light  text-ms font-medium">
                Amir Raj Regmi
              </h1>
              <h2 className="text-light opacity-60 ">@Rajamir</h2>
            </div>
            <button className="text-dark bg-light px-7 py-3 mr-5 rounded-full cursor-pointer hover:opacity-50 ">
              Follow
            </button>
          </div>
          <div className="flex items-start py-3">
            <img
              src="images/Amir-01.png"
              alt="profile-image"
              className="ml-5 w-16 rounded-full"
            />
            <div className="flex flex-col px-3">
              <h1 className="text-light  text-ms font-medium">
                Amir Raj Regmi
              </h1>
              <h2 className="text-light opacity-60 ">@Rajamir</h2>
            </div>
            <button className="text-dark bg-light px-7 py-3 mr-5 rounded-full cursor-pointer hover:opacity-50">
              Follow
            </button>
          </div>
          <div className="w-full p-5 rounded-3xl cursor-pointer">
            <h1 className="text-blue hover:text-light ">Show More</h1>
          </div>
        </div>
      </div>
      <div className="text-light px-10 py-3 w-4/5">
       <a href="#" className="text-light opacity-60 pr-3 hover:underline ">Terms of Service</a>
       <a href="#" className="text-light opacity-60 pr-3 hover:underline ">Private Policy</a>
       <a href="#" className="text-light opacity-60 pr-3 hover:underline">Cookie Policy</a>
       <a href="#" className="text-light opacity-60 pr-3 hover:underline ">Ads Info</a>
       <a href="#" className="text-light opacity-60 pr-3 hover:underline ">More...</a>
       <br />
       <span className="text-light opacity-60">© 2022 Twitter, Inc.</span>
      </div>
    </div>
  );
}

export default FollowMore;
