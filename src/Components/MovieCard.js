import React from 'react'

export const MovieCard = ({ movie }) => {
  return (
    <div className='flex flex-col gap-3 items-center  w-[200px] h-[340px] p-3 z-10 bg-gray-800 text-white rounded-sm shadow-lg cursor-pointer'>
        <div>
            <img src={movie.moviemainphotos} alt='img' className='rounded-sm md:transition-all md:ease-in-out md:hover:scale-105 duration-500' />
        </div>
        <div>
            <h2 className='text-center  font-semibold font-serif'>{movie.movietitle}</h2>
        </div>
    </div>

  )
}
