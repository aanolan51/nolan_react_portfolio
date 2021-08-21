import bountiful from "../assets/bountiful.png";
import TeamProfileGenerator from "../assets/TeamProfileGenerator.png";
import Blog from "../assets/Blog.png";
import DailyVibes from "../assets/DailyVibes.png";
import weatherdashboard from "../assets/weatherdashboard.png";
import DailyPlanner from "../assets/DailyPlanner.png";

function Projects() {

    return (
    
        <div className = "container" id = "projects">
          <h1 id="name"><span className="font_change">p</span>ROJECTS</h1>
           <div className="container mt-5">
                <div className="content">
                  <a className = "link" href="https://bountiful-ca.herokuapp.com/" target="_blank" >
                    <div className="content-overlay"></div>
                    <img className="content-image" src={bountiful} />
                    <div className="project-details fadeIn-left">
                      <div>
                        <h3>Bountiful</h3>
                        <p>A peer-to-peer produce application to connect non-commercial gardeners to their local community.</p>
                      </div>
                      <div>
                        <a className = "git-link" href="https://github.com/aanolan51/Bountiful" target="_blank">GitHub</a>
                      </div>
                    </div>
                  </a>
                </div>
            </div>

            <div class="container mt-5">
            <div class = "row">
                <div class="content col">
                    <a class = "link" href="https://github.com/aanolan51/Team_Profile_Generator" target="_blank">
                      <div class="content-overlay"></div>
                      <img class="content-image" src={TeamProfileGenerator} />
                      <div class="project-details fadeIn-left">
                        <h3>Team Profile Generator</h3>
                        <p>Build a team and create an easy to navigate HTML page that contains each team member's information.</p>
                        <div>
                          <a class = "git-link" href="https://github.com/aanolan51/Team_Profile_Generator" target="_blank">GitHub</a>
                        </div>
                      </div>
                    </a>
                  </div>
      
                  <div class="content col">
                      <a class = "link" href="https://letstech.herokuapp.com/" target="_blank">
                        <div class="content-overlay"></div>
                        <img class="content-image" src={Blog} />
                        <div class="project-details fadeIn-left">
                          <h3>Let's Blog</h3>
                          <p>A full-stack blog application deployed on heroku.</p>
                          <div>
                            <a class = "git-link" href="https://github.com/aanolan51/LetsBlog" target="_blank">GitHub</a>
                          </div>
                        </div>
                      </a>
                    </div>
            </div>   
        </div>

     

           <div class="container mt-5">
                <div class="content">
                  <a class = "link" href="https://aanolan51.github.io/DailyVibes/" target="_blank">
                    <div class="content-overlay"></div>
                    <img class="content-image" src={DailyVibes} />
                    <div class="project-details fadeIn-left">
                      <div>
                        <h3>Daily Vibes</h3>
                        <p>An interactive dashboard to get your day started.</p>
                      </div>
                      <div>
                        <a class = "git-link" href="https://github.com/aanolan51/DailyVibes" target="_blank">GitHub</a>
                      </div>
                    </div>
                  </a>
                </div>
            </div>
        
       
        <div class="container mt-5">
            <div class = "row">
                <div class="content col">
                    <a class = "link" href="https://aanolan51.github.io/WeatherPlanner/" target="_blank">
                      <div class="content-overlay"></div>
                      <img class="content-image" src={weatherdashboard} />
                      <div class="project-details fadeIn-left">
                        <h3>Weather Planner</h3>
                        <p>Get your city's forecast.</p>
                        <div>
                          <a class = "git-link" href="https://github.com/aanolan51/WeatherPlanner" target="_blank">GitHub</a>
                        </div>
                      </div>
                    </a>
                  </div>
      
                  <div class="content col">
                      <a class = "link" href="https://aanolan51.github.io/DailyPlanner/" target="_blank">
                        <div class="content-overlay"></div>
                        <img class="content-image" src={DailyPlanner} />
                        <div class="project-details fadeIn-left">
                          <h3>Daily Planner</h3>
                          <p>Use this planner to keep your day organized.</p>
                          <div>
                            <a class = "git-link" href="https://github.com/aanolan51/DailyPlanner" target="_blank">GitHub</a>
                          </div>
                        </div>
                      </a>
                </div>
            </div>   
        </div>
    </div>
    
            
    );
};

export default Projects;