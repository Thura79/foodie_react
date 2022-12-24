import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getMeals = async() => {
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        setMeals(data.meals);
        setIsLoading(false)
    }

    useEffect(() => {
        getMeals();
    },[])
  return (
    <>
      {
        isLoading ? <h1 className='font-bold text-5xl flex items-center justify-center min-h-screen'>Loading ...</h1> : 
        <div className=' flex flex-wrap justify-center gap-5 py-10'>
        {meals?.map(meal => <Card key={meal.idMeal} meal={meal}/>)}
        </div>
      }
    </>
  )
}

export default Meals