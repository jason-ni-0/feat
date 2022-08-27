import React from 'react'
import { changePage, changeDist } from "../actions";
import { useNavigate } from "react-router-dom";
import { changePage } from "../actions";

function FeatPortal(){
    const navigate = useNavigate(); 
    const featPort = () =>{ 
      const path = `/use`; 
      dispatch(changePage("start"));
      navigate(path);
    }
    return(
        <div class="container-expand" id="about-bg" 
            style={{ backgroundImage: `url(https://www.pexels.com/photo/1640777/download/)` }}>
            <div class="container-fluid bg-white" id="content-hold">
            <ul class="nav nav-tabs" id="myTab">
        <li>
            <p>&nbsp;</p>
            <h1>Click to get fate!</h1>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="home">
            <p>&nbsp;</p>
            <button type="button" class="btn btn-primary btn-lg" onClick={featPort}>Get Started</button>
            </div>
        </div>
    </div>
</div>
    )
}
export default FeatPortal