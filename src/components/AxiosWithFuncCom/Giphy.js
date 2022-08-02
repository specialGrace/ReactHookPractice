import React from 'react'
import Gif from './Gif'
import styles from './Giphy.module.css'


function Giphy({giphy}) {
  return (
      <div className={styles.giphy}>
          {giphy.length > 0 && giphy.map((gif) => <Gif gif={gif} />)}
    </div>
  )
}

export default Giphy