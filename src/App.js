import "./App.css";
import React from "react";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Main from "./components/Main/Main";
import Explore from "./components/Explore/Explore";
import Message from "./components/Message/Message";
import Notification from "./components/Notification/Notification";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex divide-x divide-divider-color">
        <LeftSidebar />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/Home" exact element={<Main />} />
          <Route path="/Explore" exact element={<Explore />} />
          <Route path="/Notification" exact element={<Notification />} />
          <Route path="/Messages" exact element={<Message />} />
          <Route path="/Bookmarks" exact element={<Message />} />
          <Route path="/Lists" exact element={<Message />} />
          <Route path="/Profile" exact element={<Message />} />
          <Route path="/More" exact element={<Message />} />
        </Routes>
        <RightSidebar />
      </div>
    </BrowserRouter>
  );
}
export default App;
