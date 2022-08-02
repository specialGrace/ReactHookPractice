import React from 'react'
import styles from './Gif.module.css'

function Gif({ gif }) {
  console.log('Gif component', gif)
  return (
    <div className={styles.gif}>
      {gif.ancestors.display_name}
      <img
        src={gif.user.banner_image}
        alt={gif.title}
        className={styles.img}
      />

      <div>
        <p>Type:{gif.type}</p>
      </div>
    </div>
  );
}

export default Gif