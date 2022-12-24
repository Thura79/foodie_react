import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'

const Detail = () => {
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  const getSingleMeal = async() => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals[0])
    setMeal(data?.meals[0]);
    setIsLoading(false)
  }

  useEffect(() => {
    getSingleMeal()
  }, [])

  return (
    <>
      {
        isLoading ? <h1 className='font-bold text-5xl flex items-center justify-center min-h-screen'>Loading ...</h1> : 
        <div className=' flex flex-col gap-5'>
      <img src={meal.strMealThumb} className=" rounded-xl" width={'500px'} />
      <div className='text-white bg-pink-500 w-20 text-center rounded-lg text-sm'>{meal.strCategory}</div>
      <h1 className=' text-2xl'>{meal.strMeal}</h1>
      <div>
        <h2 className=' text-2xl mb-3'>Instruction</h2>
        <p className=' tracking-wider leading-6 text-gray-600'>{meal.strInstructions}</p>
      </div>
      <div className="flex items-center gap-5">
        
        <a href={meal.strYoutube} target={'_blank'}>
          <AiFillYoutube className=' text-red-600 text-5xl cursor-pointer'/>
        </a>
        <p className=' text-gray-700'>Watch on YouTube</p>
      </div>
        </div>
      }
    </>
  )
}

export default Detail