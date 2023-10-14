import { CDN_URL } from "../utils/constants";
import resObj from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props; //destructuring
  const { cloudinaryImageId, cuisines, name, avgRating, costForTwo } =
    resData?.info; //destructuring and optional chaining(doesn't throw an error instead "undefined")

  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="img"
        className="res-logo"
      ></img>

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
console.log(resObj);

export default RestaurantCard;
