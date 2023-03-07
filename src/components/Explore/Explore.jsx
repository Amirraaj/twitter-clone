import React from "react";
import trend from "../TrendBar/trend";
import SearchBar from "../SearchBar/SearchBar";
import Feeds from "../Feeds/Feeds";
import divider from "../style";

const style = {
  Background: "blue",
};

function Explore() {
  return (
    <div className="w-2/4 w-full bg-dark relative ">
      <div className="flex items-center w-full ">
        <SearchBar />
      </div>
      <div>
        <div className="mt-2  rounded-3xl w-full ">
          <h1 className="text-light px-10 py-5 text-left font-extrabold text-2xl ">
            Trends For You
          </h1>
          {trend
            .filter((_trends, idx) => idx < 5)
            .map((trends) => {
              return (
                <div
                  key={trends.id}
                  className="flex justify-between items-start px-10 hover:bg-hover-dark bg-opacity-5"
                >
                  <div className="flex flex-col py-3 item-right">
                    <div className="flex">
                      <h3 className="text-light opacity-60 text-sm font-thin">
                        {trends.genres}
                      </h3>
                      {trends.isTrending && (
                        <span className="text-light opacity-60 text-sm font-thin px-2">
                          . Trending
                        </span>
                      )}
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
          <div className="w-full py-5 px-10 rounded-3xl cursor-pointer">
            <h1 className="text-blue hover:text-light ">Show More</h1>
          </div>
        </div>
      </div>
      <div style={divider}> </div>
      <div className="flex items-center px-10 py-5 ">
        <i className="fa-regular fa-window-restore fa-2x px-1 py-px  mt-2 text-blue"></i>
        <h1 className="text-light  text-left font-extrabold px-3 py-3 text-2xl ">
          Post & Collection
        </h1>
      </div>
      <Feeds />
    </div>
  );
}

export default Explore;
