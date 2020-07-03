import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './style.css';

class Resume extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div className="wrapper mb-3">
                <div className="intro">
                <div className="profile">
                    <div className="photo">
                    <img src="https://cdn.glitch.com/27911338-ce21-4c5e-8227-daa298f2e3ec%2Fself1.jpg?v=1577000297083" alt="self"/>
                    </div>
                    <div className="bio">
                    <h1 className="name">Phoebe Yaheng Wu</h1>
                    <p className="profession">Accountant & Front-end web developer<br/>
                        CPA & CISA exam passed</p>
                    </div>
                </div>
                <div className="intro-section about">
                    <h1 className="title">about me</h1>
                    <p className="paragraph">
                    I am Phoebe, an accountant and a front-end web developer. As an accountant, my experience lies in reconciliations and P&L analysis, and I'm capable of data wrangling and visualization through SQL, Python and Tableau, while also skilled at coding in VBA to automate event processes. As a web developer, I focus on creating modern-look websites using HTML, CSS, JavaScript, React, jQuery, Bootstrap and Materialize. Outside of work, I love Zumba! I was an aerobic dancing instructor for three years. I also love watching stand-up comedy in my free time. Sometimes I try to throw some jokes into conversations with friends. Most times, they fall flat - but hey, I try.
                    </p>
                </div>
                <div className="intro-section contact">
                    <h1 className="title">Contact</h1>
                    <div className="info-section">
                    <i className="fas fa-phone"></i>
                    <span>(+1) 646-897-4621</span>
                    </div>
                    <div className="info-section">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>New York, NY</span>
                    </div>
                    <div className="info-section">
                    <i className="fas fa-paper-plane"></i>
                    <span>wuyaheng2016@gmail.com</span> 
                    </div> 
                </div>


                <div className="intro-section follow">
                    <h1 className="title">Connect</h1>
                    <div className="info-section link">
                    <i className="fab fa-github"></i>
                    <a rel="author" href="https://github.com/PhoebeYahengWu">
                        <span>PhoebeYahengWu@github</span>
                    </a>
                    </div>
                    <div className="info-section link">
                        <i className="fab fa-linkedin-in"></i>
                    <a rel="author" href="https://www.linkedin.com/in/yahengwu/">
                        <span>linkedin.com/in/yahengwu</span>
                    </a>
                    </div>
                    <div className="info-section link">
                        <i className="fab fa-twitter"></i>
                    <a rel="author" href="https://twitter.com/YahengWu">
                        <span>twitter.com/YahengWu</span>
                    </a>
                    </div>

                    <div className="info-section link">
                        <i className="fab fa-facebook-f"></i>
                    <a rel="author" href="https://www.facebook.com/PhoebeYahengWu">
                        <span>facebook.com/PhoebeYahengWu</span>
                    </a>
                    </div>

                </div>
                </div>


                <div className="detail">

                <div className="detail-section edu">
                    <div className="detail-title">
                    <div className="title-icon">
                        <i className="fas fa-user-graduate"></i>
                    </div>
                    <span>Eduation</span>
                    </div>
                    <div className="detail-content">
                    <div className="timeline-block">
                        <h1>Master of Science in Information Systems</h1>
                        <p>Baruch College, New York</p>
                        <time>Jan 2019 – Present</time>
                    </div>
                    <div className="timeline-block">
                        <h1>Master of Science in Accounting</h1>
                        <p>Baruch College, New York</p>
                        <time>Sep 2015 - Dec 2018</time>
                    </div>
                    <div className="timeline-block">
                        <h1>Bachelor of Management in Public Administration</h1>
                        <p>Hainan University, Haikou</p>
                        <time>Sep 2010 - Jun 2014</time>
                    </div>
                    </div>
                </div>

                <div className="detail-section edu">
                    <div className="detail-title">
                    <div className="title-icon">
                        <i className="fas fa-user-tie"></i>
                    </div>
                    <span>Experience</span>
                    </div>
                    <div className="detail-content">
                    <div className="timeline-block">
                        <h1>Accounting Information Systems Intern</h1>
                        <p>Jimmy Choo, New York</p>
                        <time>Jan 2020 – May 2020</time>
                    </div>
                    <div className="timeline-block">
                        <h1>Budget Intern</h1>
                        <p>UN Women, New York</p>
                        <time>Nov 2018 - Jan 2019</time>
                    </div>
                    <div className="timeline-block">
                        <h1>Group Audit Summer Analyst Intern</h1>
                        <p>Deutsche Bank, New York</p>
                        <time>Jun 2018 - Aug 2018</time>
                    </div>
                    <div className="timeline-block">
                        <h1>Legal Intern</h1>
                        <p>Mona Shah & Associates, New York</p>
                        <time>Apr 2014 - Sep 2014</time>
                    </div>
                    </div>
                </div>

                <div className="detail-section pg-skill">
                    <div className="detail-title">
                    <div className="title-icon">
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <span>Skills</span>
                    </div>
                    <div className="detail-content">
                    <ul className="pg-list">
                        <li>
                        <span>Javascript</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                        </div>
                        </li>
                        <li>
                        <span>jQuery</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                        </div>
                        </li>
                        <li>
                        <span>NodeJS</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                        </div>
                        </li>
                        <li>
                        <span>SQL</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "85%"}}></div>
                        </div>
                        </li>
                        <li>
                        <span>Python</span>
                        <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                        </div>
                        </li>
                        <li>
                            <span>Tableau</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>HTML</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "90%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>CSS</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "70%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>VBA</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "65%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>React</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "65%"}}></div>
                            </div>
                        </li>

                        <li>
                            <span>Excel</span> 
                            <div className="sb-skeleton">
                            <div className="skillbar" style={{"--pgbar-length": "80%"}}></div>
                            </div>
                        </li>

                    </ul>
                    </div>
                </div>
                </div>
                </div>  
            </>
        )
    }
}

export default Resume;