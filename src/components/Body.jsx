import RestaurantCard from "./Restaurant";
import {useState, useEffect} from "react"
import resList from "../utils/swiggyData";
import Shimmer from "./Shimmer";

//not using key(not acceptable) <<<<<<<<<< index as a key <<<<<<<<<<<< unique id (best practice)
const Body = () => { 
// State Variable - Super powerful variable
const [listOfRes, setListOfRes] = useState([]);
const [filteredRes, setFilteredRes] = useState([]);
const[searchText, setSearchText] = useState("");

// Whenever state variables updates, react triggers a reconciliation cycle(re-renders the component)
//console.log("Body rendered");

useEffect(()=>{
  const data = fetchData()
},[])


const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();

  //console.log(json);
  //optional chaining
  setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

//Conditional Rendering

  return (listOfRes.length) === 0 ? <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} 
                onChange={(e) => {
                  setSearchText(e.target.value)
                }}/>
          <button onClick={() => {
            //Filter Cards and Update the UI
            //searchText
            //console.log(searchText);
            const searchResults = listOfRes.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRes(searchResults);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRes.filter(
            (res) => res.avgRating > 4);
            setListOfRes(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
        <div className="res-container">          
            {filteredRes.map((restaurant) => (
                <RestaurantCard key ={restaurant.id} resData = {restaurant}/>
            ))}

        </div>
    </div>
    );
};

export default Body;