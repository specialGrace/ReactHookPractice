
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cartoons from './Cartoons';
import styles from './CartoonAxios.module.css'

function CartoonAxios() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const API_URL = "https://rickandmortyapi.com/api/character";
        try {
            const response = await axios.get(API_URL)
            const copy = response.data.results
            setItems(copy)
            console.log('CartoonAxios', copy)
        }
        catch(err){
            console.log(err)
        }
       
    }
  return (
      <div className={styles.container}>
          <h1 className={styles.h1}>Fetching Rick and Morty Using Axios</h1>
          <p>Rick and Morty has {items.length} items</p>
          <Cartoons cartoons={items} />
    </div>
  )
}

export default CartoonAxios