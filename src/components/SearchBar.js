import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import SearchIcon from "../images/Icon.svg";
import { ReactComponent as FilterIcon } from "../images/Filter.svg";
const SearchBar = (props) => {
  const { setVisible } = props;

  const rectangleRef = useRef(null);
  const filterRef = useRef(null);
  const locationRef = useRef(null);
  const locationActiveRef = useRef(null);

  const handleMouseEnter = () => {
    rectangleRef.current.classList.add("active-rectangle");
  };

  const handleMouseLeave = () => {
    rectangleRef.current.classList.remove("active-rectangle");
  };

  const onFilterHover = () => {
    filterRef.current.classList.add("filter-hover");
  };

  const onFilterLeave = () => {
    filterRef.current.classList.remove("filter-hover");
  };

  const onLocationClick = () => {
    locationRef.current.classList.add("active-location-heading");
    locationActiveRef.current.classList.add("active-location");
    rectangleRef.current.classList.add("active-rectangle");

    console.log("click");
    setVisible(true);
  };

  const onLocationBlur = () => {
    console.log("blur");
    locationRef.current.classList.remove("active-location-heading");
    locationActiveRef.current.classList.remove("active-location");
    setVisible(false);
  };
  return (
    <div className="rectangle">
      <div
        className="inner-rectangle"
        ref={rectangleRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={locationActiveRef}
          className="location"
          tabIndex={0}
          onBlur={onLocationBlur}
          onClick={onLocationClick}
        >
          <p className="location-heading" ref={locationRef}>
            Location
          </p>
          <p className="location-text">Bahria Town, Islamabad </p>
        </div>
        <div className="borderline"></div>
        <div className="property">
          <p className="property-heading">Property</p>
          <p className="location-text">Appartment</p>
        </div>
        <div className="borderline"></div>
        <div
          className="filter"
          onMouseEnter={onFilterHover}
          onMouseLeave={onFilterLeave}
        >
          <div className="icon-center">
            <FilterIcon ref={filterRef} />
          </div>
        </div>
        <div className="borderline"></div>
        <div className="search">
          <div className="icon-center">
            <img src={SearchIcon} alt="Search icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
