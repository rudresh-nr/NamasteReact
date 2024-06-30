import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    
    const[resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu();
    },[])

const fetchMenu = async () => {
    const data = await fetch("");
}
    return resInfo === null ? (
        <Shimmer/>
    ) : (
        <div className="menu">
            <h1>Name Of The Restaurant</h1>    
            <h2>Menu</h2>

            <ul>
                <li>Biriyani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;