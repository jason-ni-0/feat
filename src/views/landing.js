import React from 'react'

import "./landing.css"

import About from "../components/about"
import FeatPortal from "../components/feat-portal"
import { Helmet } from 'react-helmet'


function Landing(){
    const [curSlide, setCurSlide] = React.useState("about");
    var toRender = <About></About>;
    if(curSlide === "portal"){
        toRender = <FeatPortal></FeatPortal>;
    }
    function setSlide(slide){
        setCurSlide(slide);
    }
    return(
        <div>
            <Helmet>
            <title>Home - Feat</title>
            <meta property="og:title" content="Home - Feat" />
            </Helmet>
            <nav class="navbar" id="main-nav">
            <div class="container-fluid">
                <a class="navbar-brand" id="logo" href="/#/feat">FEAT</a>
            </div>
            </nav>
            <nav class="navbar navbar-expand-sm" id="nav-app">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item active px-md-5" id="nav-item-main">
                        <a class="nav-link align-middle" onClick={() => setSlide('about')}>
                        <svg xmlns="http://www.w3.org/2000/svg" color="black" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                        </svg>
                        </a>
                        Home
                        </li>
                        <li class="nav-item active px-md-5" id="nav-item-main">
                            <a class="nav-link align-middle" onClick={() => setSlide('portal')}>
                            <svg xmlns="http://www.w3.org/2000/svg" color="black" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                            </a>
                            Use Feat
                        </li>
                </ul>
                </div>
            </div>
            </nav>
            {toRender}
            <nav class="navbar" id="main-nav">
            <p>&nbsp;</p>
            <div class="container-fluid">
                <a class="navbar-brand" id="logo" href="/#/feat">FEAT</a>
            </div>
            <div id="botContact" class="container-fluid col d-grid gap-1">
                <p>&nbsp;</p>
                <h3>Contact</h3><p class="lead">Questions or suggestions: jasonni12345@gmail.com</p>
                <p>&nbsp;</p>
            </div>
            </nav>
        </div>
    )
}
export default Landing