import {useLocation} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, useNavigate, Routes} from "react-router-dom";

function Feat(){
    const location = useLocation();
    console.log(location.state)
    const restaurant = location.state;

    let navigate = useNavigate(); 
    const goHome = () =>{ 
        let path = `/`; 
        navigate(path);
        window.location.reload();

  }
    return (
    <div>
        <h2>Your FEAT is to eat at...</h2>
        <div><h1>{restaurant.name}</h1>
        <p>Address: {restaurant.location.address1}</p>
        <p>Phone: {restaurant.display_phone}</p>
        <p>Rating: {restaurant.rating} Reviews: {restaurant.reviews}</p>
        <a href={restaurant.url}>Link to Yelp page</a>
        {<button onClick={goHome}>Get Another FEAT</button>}
        <div><img src={restaurant.image_url}></img></div>
        </div>
    </div>)
}

export default Feat;