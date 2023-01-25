import React from "react";
import { useRef, useState } from "react";
import { ReactComponent as PostAdd } from "../images/postAdd.svg";
import { ReactComponent as Star } from "../images/star.svg";
import { ReactComponent as Search } from "../images/Search.svg";
import { ReactComponent as Inbox } from "../images/Inbox.svg";
import { ReactComponent as Login } from "../images/Login.svg";

const Footer = () => {
  const postAddRef = useRef(null);
  const starRef = useRef(null);
  const searchRef = useRef(null);
  const inboxRef = useRef(null);
  const loginRef = useRef(null);
  const [postVisible, setPostVisible] = useState(false);
  const [starVisible, setStarVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [inboxVisible, setInboxVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);

  const handlePostIcon = () => {
    if (postVisible == false) {
      postAddRef.current.classList.add("postAdd-hover");
      setPostVisible(true);
    }
    if (postVisible == true) {
      postAddRef.current.classList.remove("postAdd-hover");
      setPostVisible(false);
    }
  };

  const handleSearchIcon = () => {
    if (searchVisible == false) {
      searchRef.current.classList.add("postAdd-hover");
      setSearchVisible(true);
    }
    if (searchVisible == true) {
      searchRef.current.classList.remove("postAdd-hover");
      setSearchVisible(false);
    }
  };

  const handleStarIcon = () => {
    if (searchVisible == false) {
      starRef.current.classList.add("postAdd-hover");
      setStarVisible(true);
    }
    if (starVisible == true) {
      starRef.current.classList.remove("postAdd-hover");
      setStarVisible(false);
    }
  };

  const handleInboxIcon = () => {
    if (inboxVisible == false) {
      inboxRef.current.classList.add("postAdd-hover");

      setInboxVisible(true);
    }
    if (inboxVisible == true) {
      inboxRef.current.classList.remove("postAdd-hover");
      setInboxVisible(false);
    }
  };

  const handleLoginIcon = () => {
    if (loginVisible == false) {
      loginRef.current.classList.add("postAdd-hover");
      setLoginVisible(true);
    }

    if (loginVisible == true) {
      loginRef.current.classList.remove("postAdd-hover");
      setLoginVisible(false);
    }
  };
  return (
    <footer>
      <div className="footer-color">
        <div onClick={handlePostIcon}>
          <PostAdd ref={postAddRef} />
        </div>
        <div onClick={handleStarIcon}>
          <Star ref={starRef} />
        </div>
        <div onClick={handleSearchIcon}>
          <Search ref={searchRef} />
        </div>
        <div onClick={handleInboxIcon}>
          <Inbox ref={inboxRef} />
        </div>
        <div onClick={handleLoginIcon}>
          <Login ref={loginRef} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
