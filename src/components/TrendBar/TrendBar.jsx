import React from "react";
import trend from "./trend";

function TrendBar() {
  return (
    <div className="px-5 py-2 ">
      <div className="mt-2 bg-hover-dark rounded-3xl w-4/5">
        <h1 className="text-light p-5 text-left font-extrabold text-2xl ">
          Trends For You
        </h1>
        {trend.map((trends) => {
          return (
            <div key={trends.id} className="flex justify-between items-start pr-5">
              <div className="flex flex-col px-5 py-3 item-right">
                <div className="flex">
                  <h3 className="text-light opacity-60 text-sm font-thin">
                    {trends.genres}
                  </h3>
                 {trends.isTrending && <span className="text-light opacity-60 text-sm font-thin px-2">
                    . Trending
                  </span>}
                </div>
                <h1 className="text-light text-lg font-semibold py-1">
                  {trends.name}
                </h1>
                <h3 className="text-light opacity-60 text-sm font-thin">
                  {trends.tweets} tweets
                </h3>
              </div>
              <i className="fa-solid fa-ellipsis fa-2x px-3 py-px  mt-2 text-light cursor-pointer hover:bg-hover-white hover:rounded-full"></i>
            </div>
          );
        })}
        <div className="w-full p-5 rounded-3xl cursor-pointer">
            <h1 className="text-blue hover:text-light ">Show More</h1>
        </div>
      </div>
    </div>
  );
}

export default TrendBar;
