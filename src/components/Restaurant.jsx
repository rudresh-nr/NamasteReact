import { CDN_URL } from "../utils/constants.js"

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = resData?.info;
    //console.log(resData)
    return (
      <div className="res-card" style={cardStyle}>
        <img 
        className="res-logo"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h5>{avgRating}</h5>
      </div>  
    );
};
const cardStyle = {
    background : "#f0f0f0"
}
export default RestaurantCard