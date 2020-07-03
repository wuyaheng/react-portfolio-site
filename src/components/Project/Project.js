import React from 'react';
import styles from './Project.module.css';

function Project(props) {
        return (
            <div className="col-md-4 justify-content-center">
                <div className="card shadow">
                    <div className={styles.inner}>
                        <img src={props.img} className="card-img-top" alt="project"/>
                    </div>
                    
                    <div className="card-body text-center">
                      <h5 className="card-title">{props.name}</h5> 
                      <p className="card-text">{props.description}</p> 
                      <div className="row m-0">
                    <div className="col-6 m-0">
                      <a href={props.github} id={styles.learnMoreBtn} className="btn waves-effect waves-light white-text">GitHub</a>
                    </div>
                    <div className="col-6 m-0">
                      <a href={props.site} id={styles.learnMoreBtn} className="btn waves-effect waves-light white-text">Live Site</a>
                    </div>
                    </div>
                    </div>
                  </div>
            </div>
        )
}

export default Project;



