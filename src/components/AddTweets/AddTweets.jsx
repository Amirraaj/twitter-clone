import React from "react";
import tweetIcon from "./iconTweets";
import { useRef, useState } from "react";
import styles from "../style";
import Webcam from "react-webcam";
import Picker, { Emoji } from 'emoji-picker-react';
import { Theme } from 'emoji-picker-react';

function AddTweets() {
  // state and ref section
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState();
  const [tweetMessage, setTweetMessage] =useState("");
  // const [displayWebcam, setDisplayWebacm] = useState(true);
  const [showEmoji,setShowEmoji] = useState(false);
  const webcamRef = useRef();

  // constants for the webcam
  const cameraWidth = 720;
  const cameraHeight = 720;
  const aspectRatio = cameraWidth / cameraHeight;
  const videoConstraints = {
    width: {
      min: cameraWidth,
    },
    height: {
      min: cameraHeight,
    },
    aspectRatio,
  };

  // function to display webcam
  const openWebCam = () => {
    {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }
    return (
      // <div className="fixed inset-0 bg-light z-10  flex justify-center items-center">
      //   <h1 className="text-black">This is it</h1>
        //  <div>
        //   <Webcam
        //     ref={webcamRef}
        //     videoConstraints={videoConstraints}
        //     width={cameraWidth}
        //     height={cameraHeight}
        //   />
        //   <button
        //     onClick={handleCaptureScreenshot}
        //     className="text-light px-5 py-3 bg-hover-dark"
        //   >
        //     {console.log("sssssssssssssss")}
        //     Capture photo{" "}
        //   </button>
        //   <button className="text-light px-5 py-3 bg-hover-dark">
        //     {" "}
        //     Cancel{" "}
        //   </button>
        // </div> 
      // </div>
          <div style={{ 
            position:"fixed",
            top:"0",
            bottom:"0",
            left:"0",
            right:"0",
            background:"white"
           }}>
                {console.log("111111111111111111111111111111111111111111111111111")}
          </div>
    );
  };
  // function to capture image
  function handleCaptureScreenshot() {
    const imageSrc = webcamRef.current.getScreenshot();
    selectedImage(imageSrc);
  }
  // function for the upload image section
  const handleClick = () => {
    inputRef.current.click();
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setSelectedImage(fileObj);
    event.target.value = null;
  };

  const changeTweet = event => {
    setTweetMessage(event.target.value);
    setShowEmoji(false);
  }

  // handel emoji
  function handelEmoji(event){
    setTweetMessage(prev => prev + event.emoji)
    
  }

  // show the uploaded image
  const showImage = selectedImage && (
    <div style={styles.preview}>
      <img
        src={URL.createObjectURL(selectedImage)}
        style={styles.image}
        alt="Thumb"
      />
      <i
        className="fa-solid fa-xmark fa-2x absolute top-5 left-5 cursor-pointer text-red-900 "
        onClick={removeSelectedImage}
      ></i>
    </div>
  );

  // icons if else condtion
  function selectifelse(data) {
    if (data === "image") {
      setShowEmoji(false);
      handleClick();
    } else if (data === "camera") {
      setShowEmoji(false);
      openWebCam();
    } else if (data === "emoji") {
      setShowEmoji(prev => !prev)
    } else {
      setShowEmoji(false);
      console.log("icon clicked");
    }
  }
  // icons display mapping
  const showIcons = tweetIcon.map((icon) => {
    return (
      <div key={icon.id}>
        <i
          className={`${icon.icon} fa-xl  text-blue p-2 mr-2 cursor-pointer`}
          onClick={() => selectifelse(icon.name)}
        ></i>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
      </div>
    );
  });

  return (
    <div className="w-full p-5 inline-flex  w-full"
    // onClick={showEmoji ? ()=>setShowEmoji(false): 0}
    >
      <div className="p-5">
        <i className="fa-regular fa-user fa-2x text-light rounded-full p-5 bg-dark-blue"></i>
      </div>
      <form className="p-7 flex flex-col w-full">
        <textarea
          className="text-light font-normal text-2xl opacity-70 mb-5 outline-none bg-dark break-words overflow-hidden resize-none"
          cols="10"
          rows="2"
          placeholder="What's hapenning"
          value={tweetMessage}
          onChange={changeTweet}
        ></textarea>
        <div className="relative">{showImage}</div>
        <div className="flex mb-5 mt-5 justify-between items-center">
          <div className="flex flex-wrap">{showIcons}</div>
          <button className="bg-blue p-3 px-5 cursor-pointer rounded-full  hover:opacity-80">
            Tweet
          </button>
        </div>
          {showEmoji && <Picker
          theme="dark"
          emojiStyle="twitter" 
          suggestedEmojisMode="recent"
          onEmojiClick={handelEmoji}
          height={400} width={700}
          dark
          />}
      </form>
    </div>
  );
}
export default AddTweets;
