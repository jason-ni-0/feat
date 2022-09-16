function About(){
    return(
        <div class="container-expand" id="about-bg" 
        style={{ backgroundImage: `url(./foodbg.jpeg)` }}>
        <div class="container-fluid bg-white" id="content-hold">
    <ul class="nav nav-tabs" id="myTab">
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
            Save your time.
            <small class="text-muted"> Let fate make the tedious decisions for you.</small>
            </h1>
            <p>&nbsp;</p>
            <p class="h5">Feat divines your next restaurant visit in about a minute. No more overthinking and time wasting for all the indecisive ones out there. Simply give Feat some simple criteria (or none at all) 
                and let fate do its course.</p>
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
        </div>
    </div>
</div>
        </div>
    )
}

export default About