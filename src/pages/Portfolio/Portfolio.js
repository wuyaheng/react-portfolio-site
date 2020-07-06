import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Project from '../../components/Project/Project';

class Portfolio extends Component {
    render() {
        return (
            <>
            <Navbar />
        
            <div class="container-fluid mt-4 mb-0 pb-3">
                <div class="row pb-0 mb-0">
                <Project 
                img="https://cdn.glitch.com/2e860639-24bb-4041-8055-aed7de1c1244%2Fimg-project1.jpeg?v=1584760380680"
                name="Quiz App"
                description="A Quiz Contains 8 Multiple Choice Questions"
                github="https://github.com/PhoebeYahengWu/JS-Quiz-App"
                site="https://phoebeyahengwu.github.io/JS-Quiz-App/" 
                />

                <Project 
                img="https://cdn.glitch.com/2e860639-24bb-4041-8055-aed7de1c1244%2Fimg-project2.jpeg?v=1581869386824"
                name="Weather App"
                description="Provide Current and Next 5 Day's Weather"
                github="https://github.com/PhoebeYahengWu/Weather-Forecast-Web-App-With-jQuery"
                site="https://phoebeyahengwu.github.io/Weather-Forecast-Web-App-With-jQuery/" 
                />

                <Project 
                img="https://cdn.glitch.com/2e860639-24bb-4041-8055-aed7de1c1244%2Fproject-4.jpg?v=1585088113836"
                name="React GitHub Finder"
                description="Enter Username to Bring Back GitHub Profile"
                github="https://github.com/PhoebeYahengWu/react-github-finder"
                site="https://react-github-profile-finder.herokuapp.com/" 
                />
                </div>

                <div class="row pb-0 mb-0">
                <Project 
                img="https://cdn.glitch.com/0767e857-f6a4-4140-abf7-e98c33465c4c%2Fback-img9.jpeg?v=1586475851196"
                name="Stock Comparison"
                description="Visualize Stock Price Based on Input Tickers"
                github="https://github.com/PhoebeYahengWu/FinancialDashboard"
                site="https://phoebeyahengwu.github.io/FinancialDashboard/" 
                />

                <Project 
                img="https://cdn.glitch.com/2e860639-24bb-4041-8055-aed7de1c1244%2FNewYorkTimes2.jpg?v=1583955630273"
                name="The New York Times"
                description="Retrieve Top 10 articles Based on Keywords"
                github="https://github.com/PhoebeYahengWu/New-York-Times-Article-Search-AJAX"
                site="https://phoebeyahengwu.github.io/New-York-Times-Article-Search-AJAX/" 
                />

                <Project 
                img="https://cdn.glitch.com/f28949c6-6f44-4abb-a9a1-6a9e90371a91%2Fimage-3.jpeg?v=1588474053478"
                name="Database UI"
                description="Create User Interface for MySQL Database"
                github="https://github.com/PhoebeYahengWu/Company-Database-UI"
                site="https://database-user-interface.herokuapp.com/" 
                />
                </div>

                <div class="row pb-0 mb-0">
                <Project 
                img="https://cdn.glitch.com/0818f487-5b8b-4080-900d-ad787673d146%2FportfolioImg.jpg?v=1591420769410"
                name="Real-Time Poll"
                description="Display poll result with Pusher and CanvasJS"
                github="https://github.com/PhoebeYahengWu/real-time-poll-app"
                site="https://real-time-poll-app.herokuapp.com/" 
                />

                <Project 
                img="https://cdn.glitch.com/0818f487-5b8b-4080-900d-ad787673d146%2FportfolioImg2.jpg?v=1591592009590"
                name="Real-Time Chat Room"
                description="Enter any room with friends and start chat"
                github="https://github.com/PhoebeYahengWu/real-time-chat-room"
                site="https://real-time-truth-chat-room.herokuapp.com/" 
                />

                <Project 
                img="https://cdn.glitch.com/0818f487-5b8b-4080-900d-ad787673d146%2Fmovie.jpeg?v=1592283143988"
                name="Movie Information Search"
                description="Enter movie name to attain ratings and plot"
                github="https://github.com/PhoebeYahengWu/movie-search-tool"
                site="https://omdb-movie-search-tool.herokuapp.com/" 
                />
                </div>
                </div>
            </>
        )
    }
}

export default Portfolio;