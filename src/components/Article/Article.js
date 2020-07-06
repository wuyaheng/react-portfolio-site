import React from 'react';
import styles from './Article.module.css';

function Article(props) {
    return (
        <div className="row justify-content-center">
          <div className={styles.card}>
            <div className={styles.cardimage}>
              <div className={styles.backgroundimage} style={{background: `url(${props.bg}) center no-repeat`, backgroundSize:"cover"}}></div>
              <div className={styles.details}>
                <a href="/" className={styles.author}>
                  <i className="fab fa-js-square"></i>
                  {props.topic}</a>
                <span className={styles.date}><i className="fas fa-calendar-alt"></i> {props.date}</span>
              </div>
            </div>
      
            <div className={styles.cardcontent}>
              <h1 className={styles.title}>{props.title}</h1>
              <h2 className={styles.subtitle}>{props.author}</h2>
              <p className={styles.description}>
                {props.description}
              </p>
              <div className={styles.cta}>
                <a target='_blank' rel="noopener noreferrer" href={props.link}>Read more &rarr;</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Article;