import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Article from '../../components/Article/Article';

class Blog extends Component {
    render() {
        return (
            <>
            <Navbar />
            <div class="container-fluid mt-4 mb-0 pb-0">
                <Article 
                    bg="https://cdn.glitch.com/27911338-ce21-4c5e-8227-daa298f2e3ec%2Fback-img8.jpeg?v=1586351178768"
                    topic="Data Visualization with Chart.js"
                    date="March 31, 2020"
                    title="New York City Population by Borough, 1950 - 2020"
                    author="By Phoebe Yaheng Wu"
                    description="Today, New York is the most populous U.S. city and many people are attracted to live in the city for its prosperity, energy and diversity. But can you believe there was a point in the city's history when a million people fled New York..."
                    link="https://phoebeyahengwu.github.io/Charts-Charts-Charts-about-NYC/"
                />

                <Article 
                    bg="https://cdn.glitch.com/27911338-ce21-4c5e-8227-daa298f2e3ec%2Fback-img6.jpeg?v=1586351531978"
                    topic="Data Visualization with CanvasJS"
                    date="April 7, 2020"
                    title="Best Programming Languages to Learn in 2020"
                    author="By Phoebe Yaheng Wu"
                    description="Since the 1950s, programmers have developed over 700 notable programming languages and with the rapid changes in the industry, more are developed almost every year. As a result, it can be hard for the aspiring programmer to decide..."
                    link="https://phoebeyahengwu.github.io/The-3-Best-Programming-Languages-to-Learn-in-2020/"
                />
            </div>
            </>
        )
    }
}


export default Blog;