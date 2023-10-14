import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

// import resObj from "../utils/mockData";

const Body = () => {
  //Local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(
    resObj.restaurants
    // [
    // {
    //   data: {
    //     id: "2192",
    //     name: "Aroma's Hyderabad House",
    //     cloudinaryImageId: "y2hukcrkdh4p4v6djdff",
    //     costForTwo: "₹500 for two",
    //     cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
    //     avgRating: 4.1,
    //   },
    // },
    // {
    //   data: {
    //     id: "2193",
    //     name: "Hyderabad House",
    //     cloudinaryImageId: "y2hukcrkdh4p4v6djdff",
    //     costForTwo: "₹500 for two",
    //     cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
    //     avgRating: 3.8,
    //   },
    // },
    // {
    //   data: {
    //     id: "2194",
    //     name: "Mcd",
    //     cloudinaryImageId: "y2hukcrkdh4p4v6djdff",
    //     costForTwo: "₹500 for two",
    //     cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
    //     avgRating: 4.1,
    //   },
    // },
    // ]
  );

  // normal Js variable
  // let listOfRestaurantsJs = [
  //   {
  //     data: {
  //       id: "2192",
  //       name: "Aroma's Hyderabad House",
  //       cloudinaryImageId: "y2hukcrkdh4p4v6djdff",
  //       costForTwo: "₹500 for two",
  //       cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
  //       avgRating: 4.1,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "2193",
  //       name: "Hyderabad House",
  //       cloudinaryImageId: "y2hukcrkdh4p4v6djdff",
  //       costForTwo: "₹500 for two",
  //       cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
  //       avgRating: 3.8,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "2194",
  //       name: "Mcd",
  //       cloudinaryImageId: "y2hukcrkdh4p4v6djdff",
  //       costForTwo: "₹500 for two",
  //       cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
  //       avgRating: 4.1,
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          //Event Handler
          onClick={() => {
            console.log(listOfRestaurants);

            //filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setListOfRestaurants([...filteredList]);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants &&
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
