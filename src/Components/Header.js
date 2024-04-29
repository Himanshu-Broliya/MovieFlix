import React, { useState } from 'react'
import { CheckBox, FilterMovies } from './CheckBox';
import { movieData } from '../Constant/MovieData';
import { Link } from 'react-router-dom';

export const Header = () => {

  const [searchValue, setSearchValue] = useState('');
  const [showList, setShowList] = useState(false);



  const searchMovie = () => {
    setShowList(true)
  }

  return (
    <div className='flex items-center justify-between fixed w-full pl-4 pr-3 lg:px-28 bg-gray-800 text-white py-3 '>
      <div>
        <h1 className='text-lg md:text-2xl font-bold font-serif'>Movies</h1>
      </div>

      <div className='absolute left-0 top-[3.7rem] w-full md:hidden'>
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative ">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input  value={searchValue} onChange={(e) => setSearchValue(e.target.value)} id="search" class="block w-full py-3 ps-10 text-gray-900 border focus:outline-none rounded-md bg-gray-50 " placeholder="Search" required />
          <button  onClick={searchMovie} class="text-white absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </div>

      <div className='hidden md:flex'>
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative w-[20rem] lg:w-[35rem]">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} id="search" class="block w-full py-3 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          <button type="submit" onClick={searchMovie} class="text-white absolute end-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </div>
      {
        showList && searchValue &&
        <div className='absolute top-[6.5rem]  md:left-[30rem]  md:top-[4rem] mr-2 bg-white w-[24rem] md:w-[34rem] py-3 px-4 overflow-y-auto no-scrollbar rounded-sm '>
          <ul>
            {
              movieData.filter(movie => movie.movietitle.toLowerCase().includes(searchValue.toLowerCase())).map((data, i) => (
                <li className='py-2 md:py-1 text-black cursor-pointer' onClick={() => {
                  setShowList(!showList)
                  setSearchValue('')
                }}>
                  {data?.movietitle}
                </li>
              ))
            }
          </ul>
        </div>
      }

      <div className=''>
        {
          <CheckBox/>
        }
      </div>
    </div>
  )
}
