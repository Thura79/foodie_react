import React from 'react'
import {HiEye} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Card = ({meal}) => {
  return (
    <div className=' w-64 flex justify-center items-center flex-col border-2 p-5 gap-5 rounded-xl relative h-[400px] shadow-sm hover:scale-105 transition duration-200 hover:shadow-xl'>
        <img src={meal.strMealThumb} className=" rounded-xl" width="200px" />
        <h3>{meal.strMeal}</h3>

        <button className=' text-white bg-blue-500 px-5 py-2 rounded-xl absolute bottom-3'>  
            <Link to={`/detail/${meal.idMeal}`}>              
                <HiEye className=' text-2xl'/>
            </Link>
        </button>
    </div>
  )
}

export default Card