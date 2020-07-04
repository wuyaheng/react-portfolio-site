import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
// import Goo from '../../components/Goo/Goo';
import Landing from '../../components/Landing/Landing';
import Banner from '../../components/Banner/Banner';
import './style.css';

class Home extends Component {
    render() {
        return (
            <div>
            <Navbar />
            {/* <Goo /> */}
            <Landing /> 

            <div className="container">
                
                <div className="row">
                    <div className="col-md-12"> 
                      
                  
                        <div className="banner-text">
                          <div id="table">
                         <Banner />
                          </div>


                          <button type="button" id="resume" className="white-text btn waves-effect waves-light"><a href="https://cdn.glitch.com/bd6cde95-6d6d-44ba-a589-0cbd42159bd4%2FPhoebe%20(Yaheng)%20Wu%20Resume.pdf?v=1591280845655" download className="white-text">View My Resume</a></button> 
                      
                    </div>
                </div>
            </div>

            <div className="icon-bar">
           
            
           
                  <a href="https://twitter.com/YahengWu" id="twitter" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-twitter"> </i>
                  </a>
              
              
                  <a href="https://www.linkedin.com/in/yahengwu/" id="linkedin" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-linkedin-in"> </i>
                  </a>
              
             
                  <a href="https://www.youtube.com/channel/UCUiy0e6bdTxw9US54w4EHYA?view_as=subscriber" id="youtube" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-youtube"> </i>
                  </a>
            
              
                  <a href="https://github.com/PhoebeYahengWu" id="github" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-github"></i>
                  </a>
               

               
                  <a href="https://www.facebook.com/PhoebeYahengWu" id="facebook" className="waves-effect waves-light" type="button" role="button">
                    <i className="fab fa-facebook"></i>
                  </a>
              

             
                  <a href="https://www.instagram.com/wuyaheng/?hl=en" id="instagram" className="waves-effect waves-light" type="button" role="button">
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
