import React from "react";
import newfeed from "./newfeed";
import comment from "./comment";
import divider from "../style";
import { useState } from "react";

function Feeds() {
  const [changeColor, setChangeColor] = useState({
    myIndex: "",
    colorCode: "",
  });

  const [showComment, setShowComment] = useState({
    commentIndex: "",
    displayALlComment:true
  });

  function handelColor(iconName, index) {
    setChangeColor((prev) => {
      return {
        ...prev,
        myIndex: index,
        colorCode:
          iconName === "like"
            ? "#ff1251"
            : iconName === "retweet"
            ? "#13e824"
            : "#1C9BF0",
      };
    });
  }
  function handelComment (idx){
    setShowComment((prev) =>{
      return{
        ...prev,
        commentIndex: idx,
        displayALlComment: !prev.displayALlComment
      }
    })
  }
  return (
    <div>
      <div>
        {newfeed.map((newfeeds) => {
          const feedIndex  = newfeed.findIndex((object) =>{
             return object.id === newfeeds.id;
          })
          const showALLCOmments = newfeeds.comments.map((items) => {
            return (
              <div key={items.id} className="conatiner flex items-start p-5 opacity-80">
                <img
                  src={`${items.profileImage}`}
                  alt="profile-image"
                  className=" w-10 rounded-full"
                />
                <div className="flex flex-col px-4">
                  <h1 className="text-sm">{items.commenterName}</h1>
                  <h2 className="text-sm">{items.commentText}</h2>
                </div>
              </div>
            );
          });

          const showOneComments = newfeeds.comments
            .filter((_items, idx) => (idx < 1))
            .map((items) => {
              return (
                <div key={items.id} className="conatiner flex items-start p-5 opacity-80">
                  <img
                    src={`${items.profileImage}`}
                    alt="profile-image"
                    className=" w-10 rounded-full"
                  />
                  <div className="flex flex-col px-4">
                    <h1 className="text-sm">{items.commenterName}</h1>
                    <h2 className="text-sm">{items.commentText}</h2>
                  </div>
                </div>
              );
            });

          return (
            <div key={newfeeds.id}>
              <div className="container p-5">
                <div className="flex">
                  <img
                    src={`${newfeeds.profileImage}`}
                    alt="profile-image"
                    className=" w-16 rounded-full"
                  />
                  <div className="container">
                    <div className=" flex items-center">
                      <h1 className="text-light pl-5 text-lg font-semibold">
                        {newfeeds.accountName}
                      </h1>
                      {newfeeds.verified && (
                        <i className="fa-solid fa-circle-check text-light pl-2"></i>
                      )}
                    </div>
                  </div>
                </div>
                <div className="px-20 -mt-8">
                  <p className="text-light text-justify text-lg font-normal">
                    {newfeeds.description}
                  </p>
                  <img
                    src={`${newfeeds.feedImage}`}
                    alt="feed image"
                    className="w-full py-5"
                  />
                </div>
                <div className="flex px-20 justify-between py-5">
                  {comment.map((comments) => {
                    const theIndex = comment.findIndex((object) => {
                      return object.id === comments.id;
                    });
                    return (
                      <div
                        key={comments.id}
                        className="text-light opacity-50 cursor-pointer"
                        onMouseEnter={() =>
                          handelColor(comments.name, theIndex)
                        }
                        onMouseLeave={() =>
                          setChangeColor({ myIndex: "", colorCode: "" })
                        }
                        style={{
                          color:
                            theIndex === changeColor.myIndex &&
                            `${changeColor.colorCode}`,
                        }}
                      >
                        <i className={`${comments.icon} fa-xl mr-2 `}></i>
                        <span className="pl-2 text-lg">
                          {comments.name === "comment"
                            ? newfeeds.comments.length
                            : comments.name === "retweet"
                            ? newfeeds.retweet
                            : comments.name === "like"
                            ? newfeeds.like
                            : newfeeds.share}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-light px-20">
                  <h1 className="opacity-50 cursor-pointer hover:underline py-2"
                  onClick={()=>handelComment(feedIndex)}>
                    {feedIndex == showComment.commentIndex && showComment.displayALlComment ?  "Hide Comments": `View All ${newfeeds.comments.length} comments` }
                  </h1>
                  {feedIndex == showComment.commentIndex && showComment.displayALlComment ?showALLCOmments: showOneComments }
                </div>
              </div>
              <div style={divider} className="mt-5"></div>
            </div>
          );
        })}
      </div>

      <div
        className="p-10 text-hover-white flex items-center justify-center"
        role="status"
      >
        <svg
          aria-hidden="true"
          className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-light"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>
  );
}

export default Feeds;
