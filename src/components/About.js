import profilepic from "../assets/photo_me.jpg";

function About() {

    return (
    <div className="jumbotron p-5 mb-2" id="About Me">
        <div className="row featurette p-5 mb-2">
            <div className="col-md-3 my-auto">
                <img className="featurette-image img-fluid mx-auto" alt="Female portrait photo" id = "profile_pic" src={profilepic} data-holder-rendered="true" />
            </div>
            <div className="col-md-9">
                <h1 id="name"><span className="font_change">a</span>BOUT <span className="font_change">m</span>E</h1>
                <h2 className="featurette-heading">Alyssa Nolan</h2>
                <h3 classname="text-muted">Full-Stack Web Developer. Chemical Engineer.</h3>
                <p className="lead">Welcome! My name is Alyssa Nolan and I am a chemical engineer with an strong interest in programming. I have worked in multiple industries, 
                    including automotive, biotech and teaching. As a project leader, I bring strong organizational skills with experience completing milestones on target and 
                    presenting to upper management. I am using programming to further my development in this ever-evolving technical landscape. I currently 
                    use HTML, CSS, and JavaScript.</p>
            </div>  
        </div>
    </div>

    );
};

export default About;
