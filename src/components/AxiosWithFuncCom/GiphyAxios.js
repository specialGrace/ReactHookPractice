
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Giphy from './Giphy'

function GiphyAxios() {
    const [items, setItems]=useState([])

  useEffect(() => {
    fetchData()
  },[])
  
  const fetchData = async () => {
    const API_URL = "https://api.giphy.com/v1/stickers/packs/3138/children?api_key=mKCtbPxOLojtNZhqRJMTMplf2iEx76Zz"

    try {
       const response = await axios.get(API_URL)
      const copy = response.data.data
      setItems(copy)
      console.log('parent', copy)
    }
    catch (err) {
      console.log(err)
    }
   
  }


  return (
    <div>
      <h1>Fetching gif Data Using Axios</h1>
      <p>There are {items.length} giphy in the API </p>

      <Giphy giphy={items} />
    </div>
  );
}

export default GiphyAxios