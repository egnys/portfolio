import React from 'react'
import avatar from "../img/avatar.jpg"
export const About = () => {
  return (
    <div className='flex flex-col items-center'>
        <img src={avatar} alt='avatar' className='w-64 h-64 rounded-full'/>
        <span className='text-3xl font-semibold mt-6 tracking-wide'>Vladyslav Ilnytskyi</span>
        <span className='text-md font-semibold mt-2 tracking-wide font-normal'>Front-end JS / React developer</span>

        <hr class="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>


    </div>
  )
}
