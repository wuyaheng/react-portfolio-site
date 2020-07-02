import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Goo from '../../components/Goo/Goo';

class Home extends Component {
    
    render() {
        return (
            <div>
            <Navbar />
            <Goo />
            </div>
        )
    }
}

export default Home;
