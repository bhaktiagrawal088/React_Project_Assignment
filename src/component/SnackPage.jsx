import React, { useEffect, useState } from 'react'
import SnackCard from './SnackCard';

function SnackPage() {

    const [items, setItem] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData =  async() => {
        const data =  await fetch("https://dummyjson.com/recipes");
        const json = await data.json();
        console.log(json.recipes);
        setItem(json.recipes)
    }
  return (
    <div className='flex flex-wrap gap-6 p-4 justify-center'>
        {
            items.map((item) => (
                <SnackCard key={item.id} obj ={item}/>
            ))
        }
    </div>
  )
}

export default SnackPage
