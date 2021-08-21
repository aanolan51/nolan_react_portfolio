import Dropdown from 'react-bootstrap/Dropdown';
import WebDevResume from '../assets/WebDevResume_ANAug2021.pdf';
import EngResume from '../assets/Resume_ANolan_May2021.pdf';
import {Link} from 'react-router-dom';

function Navbar () {
 
    return (
        <div className="container" id = "top">
            <nav className="navbar navbar-expand-sm navbar-light bg-light shadow p-3 mb-5 rounded">
                <div className = "text-nowrap">
                    <h1 id="name"><span className="font_change">p</span>ORTFOLIO</h1>
                </div>                
              <div className="container-fluid justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to = "/nolan_react_portfolio">
                        <a className="nav-link linkstyle" href="#About Me">About&nbsp;Me</a>
                        </Link>                        
                    </li>
                    <li className="nav-item">
                        <Link to="/projects">
                        <a className="nav-link linkstyle" href="#projects">Projects</a>
                        </Link>
                        
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">
                        <a className="nav-link linkstyle" href="#">Contact</a>
                        </Link>
                        
                    </li>
                    <Dropdown className="custom-btn nav-item" >
                            <Dropdown.Toggle className="custom-btn" id="dropdown-autoclose-true">
                                Resumes
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item
                                href={WebDevResume}
                                target="_blank"> <i className="fas fa-file"></i> Web Development Resume</Dropdown.Item>
                                <Dropdown.Item
                                href={EngResume}
                                target="_blank"> <i className="fas fa-file"></i> Engineering Resume</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </ul>            
              </div>
            </nav>
          </div>
    );
};



export default Navbar;

