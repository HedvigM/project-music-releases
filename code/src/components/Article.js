import React from 'react';

const Article = (props) => {
  return (
    <article className='article'>
      <div className='img-container'>
        <div className='overlay'></div>
        <img src={props.img} alt='album image' />
      </div>
      {/* Försökte lägga <a> för albums utanför img-container. Se också komponenten "Albums". */}
      <a href='{props.titleClick}' target='_blank'>
        <h2>{props.title}</h2>
      </a>
      <a href='{props.artistClick}' target='_blank'>
        <p>{props.artist}</p>
      </a>
    </article>
  );
};

export default Article;
