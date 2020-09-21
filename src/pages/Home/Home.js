import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Landing from '../../components/Landing/Landing';
import 'animate.css';
import './style.css';

class Home extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Landing /> 

            <div className="container">
                
                <div className="row">
                    <div className="col-md-12"> 
                      
                  
                        <div className="banner-text">
                          <div id="table">
                         <h3 className="animate__animated animate__fadeInTopLeft animate__delay-2s text">Hi, I'm Phoebe</h3> 
                         <h5 className="animate__animated animate__lightSpeedInRight animate__delay-3s text job">Aspiring CPA | Web Developer</h5><br/>
                          </div>
                          <button type="button" id="resume" className="white-text btn waves-effect waves-light"><a target='_blank' rel="noopener noreferrer" href="https://cdn.glitch.com/e7ec1ecc-8235-4381-8966-9202576ad0f6%2FResume_Phoebe%20Yaheng%20Wu.pdf?v=1600722738223" download className="white-text">View My Resume</a></button> 
                      
                    </div> 
                </div>
            </div>

            <div className="icon-bar">
           
            
                 <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/yahengwu/" id="linkedin" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>

              
                  <a target='_blank' rel="noopener noreferrer" href="https://github.com/PhoebeYahengWu" id="github" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-github"></i>
                  </a>
              


                  <a target='_blank' rel="noopener noreferrer" href="https://twitter.com/YahengWu" id="twitter" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-twitter"> </i>
                  </a>
              
             
                  {/* <a target='_blank' rel="noopener noreferrer" href="https://www.youtube.com/channel/UCUiy0e6bdTxw9US54w4EHYA?view_as=subscriber" id="youtube" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-youtube"> </i>
                  </a>
             */}
              


               
                  <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/PhoebeYahengWu" id="facebook" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-facebook"></i>
                  </a>
              

             
                  <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/wuyaheng/?hl=en" id="instagram" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-instagram"></i>
                  </a> 
 
           
          
        </div>  
      </div>

   
 
      <div className="footer">
        <p>© 2020 Phoebe Yaheng Wu</p>
      </div>

            </div>
        )
    }
}

export default Home;
