import React from 'react'

import "./landing.css"

import About from "../components/about"
import FeatPortal from "../components/feat-portal"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


function Landing(){
    /*
    const [curSlide, setCurSlide] = React.useState("about");
    var toRender = <About></About>;
    if(curSlide === "portal"){
        toRender = <FeatPortal></FeatPortal>;
    }
    
    function setSlide(slide){
        setCurSlide(slide);
    }
    */
    return(
        <div>
            <Helmet>
            <title>Home - Feat</title>
            <meta property="og:title" content="Home - Feat" />
            </Helmet>
            <nav class="navbar" id="main-nav">
            <div class="container-fluid">
                <Link className="navbar-brand" id="logo" to="/">FEAT</Link>
            </div>
            </nav>
            {/*
            <nav class="navbar navbar-expand-sm" id="nav-app">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class={(curSlide == "about") ? "nav-item active px-md-5" : "nav-item px-md-5"} id="nav-item-main">
                        <a class="nav-link align-middle" onClick={() => setSlide('about')}>
                        <svg xmlns="http://www.w3.org/2000/svg" color="black" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                        </svg>
                        </a>
                        Home
                        </li>
                        <li class={(curSlide == "portal") ? "nav-item active px-md-5" : "nav-item px-md-5"} id="nav-item-main">
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
            */}
            <FeatPortal></FeatPortal>
    <div className="container-fluid col d-grid gap-3 px-4 bg-white">
    <p>&nbsp;</p>
    <ul class="nav nav-tabs" id="myTab">
    <p>&nbsp;</p>
        <li class="nav-item" >
            <a href="#home" id="sublist-item" class="nav-link active" data-bs-toggle="tab">About</a>
        </li>
        <li class="nav-item" >
            <a href="#howtouse" id="sublist-item" class="nav-link" data-bs-toggle="tab">How to use Feat</a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="home">
        <h1 class="mt-2">
        Hungry? But indecisive?
            <small class="text-muted"> Let Feat suggest where to eat.</small>
            </h1>
            <p>&nbsp;</p>
            <p class="h5">Feat divines your next restaurant visit in about a minute. No more overthinking and time wasting for all the indecisive ones out there. Simply give Feat some simple criteria (or none at all) 
                and let fate do its course.</p>
            <p>&nbsp;</p>
            <h1 className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            </h1>
            <p>&nbsp;</p>
        </div>
        <div class="tab-pane fade" id="howtouse">
            <h4 class="mt-2">How to get started</h4>
            <ol>
                <li>Click the "Use Feat" tab</li>
                <li>Enter your location or get location using the GPS button</li>
                <li>Tell Feat how far you are willing to travel</li>
                <li>(Optional) Select your preferred categories, eg. breakfast, asian food, etc.</li>
                <li>(Optional) Select your budget</li>
                <li>Submit for your divination</li>
            </ol>
            <p>You will get up to three Feats, choose wisely! Try to choose one of those paths and stick to it, we are solving indecisiveness!</p>
            <p>&nbsp;</p>
            <h1 className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
            </svg>
            </h1>
        </div>
    </div>
    <p>&nbsp;</p>
    </div>
            <nav class="navbar" id="main-nav">
            <p>&nbsp;</p>
            <div class="container-fluid">
                <Link className="navbar-brand" id="logo" to="/">FEAT</Link>
            </div>
            <div id="botContact" class="container-fluid col d-grid gap-1">
                <p>&nbsp;</p>
                <h3>Contact</h3><p className="lead">Questions or suggestions: jasonni12345@gmail.com</p>
                <p>© 2022 FEAT - ALL RIGHTS RESERVED.</p>
                <p>&nbsp;</p>
            </div>
            </nav>
        </div>
    )
}
export default Landing