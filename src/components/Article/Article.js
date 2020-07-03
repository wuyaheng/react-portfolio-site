import React from 'react';
import './style.css';

function Article(props) {
    return (
        <div className="row justify-content-center">
          <div className="card">
            <div className="card-image">
              <div className="background-image-first"></div>
              <div className="publication-details">
                <a href="/" className="author">
                  <i className="fab fa-js-square"></i>
                  {props.topic}</a>
                <span className="date"><i className="fas fa-calendar-alt"></i> {props.date}</span>
              </div>
            </div>
      
            <div className="card-content">
              <h1 className="title">{props.title}</h1>
              <h2 className="subtitle">{props.author}</h2>
              <p className="description">
                {props.description}
              </p>
              <div className="cta">
                <a href={props.link}>Read more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Article;