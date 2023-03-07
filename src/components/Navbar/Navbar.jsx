import React from "react";
import icons from "./icon";
import { Link, useLocation, useRouter } from "react-router-dom";
import { useState } from "react";


const linkStyle ={
  width:"fit-content"
}
function Navbar() {
  function selectTitle(titleName){
   setSelectedCategore(titleName);
  }
  const Location = useLocation();
  const UrlPath = Location.pathname.slice(1);


  const[selectedCategore, setSelectedCategore] = useState(UrlPath || "Home");


  return (
    <nav className="sticky top-5 left-0 right-0">
      <div className="lg:px-5 lg:mx-5 md:px-5 md:mx-5 sm:px-1 sm:mx-1">
        <Link to="/">
          <i className="fa-brands fa-twitter text-xl sm:text-3xl md:text-3xl text-light p-3 mx-3 hover:bg-hover-white hover:rounded-full"
          onClick={()=>setSelectedCategore("Home")}
          ></i>
        </Link>
        <div className="flex flex-col">
          {icons.map((icon) => {
            return (
              <Link to={`/${icon.name}`} key={icon.id} style={linkStyle}>
              <button
                key={icon.id}
                className="flex item-baseline justify-start cursor-pointer py-2 my-px lg:py-5 md:py-2 sm:py-2 pl-5 hover:bg-hover-dark rounded-full"
                onClick={()=>selectTitle(icon.name)}
                style={{
                  background: icon.name === selectedCategore && "#242222",
                }}
              >
                <i
                  className={`${icon.iconType} ${icon.iconName} text-xl sm:text-3xl md:text-3xl text-light`}
                ></i>
                <h1 className="text-2xl px-10 font-medium text-light hidden sm:hidden md:hidden lg:block">
                  {icon.name}
                </h1>
              </button>
              </Link>
            );
          })}
          <button className="bg-blue mt-5 p-2 sm:p-2 md:p-5 text-light text-2xl font-medium rounded-full hover:bg-dark-blue">
            <span className=" hidden sm:hidden md:hidden lg:block">Tweet</span>
            <i className="fa-solid fa-feather-pointed text-xl sm:text-3xl md:text-3xl lg:hidden"></i>
          </button>
        </div>
      </div>
      <div className="flex mt-10 ml-1 md:ml-20 lg:ml-20 sm:ml-1 pl-2 mr-4 mb-4 py-2 cursor-pointer hover:bg-hover-dark hover:rounded-full">
        <i className="fa-regular fa-user fa-2x text-light rounded-full p-5 bg-dark-blue"></i>
        <div className="flex flex-col px-5 py-2">
          <h1 className="text-light font-medium text-xl hidden sm:hidden md:hidden lg:block">
            Amir Raj Regmi
          </h1>
          <h1 className="text-light font-medium text-base hidden sm:hidden md:hidden lg:block">
            @rajamir
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
