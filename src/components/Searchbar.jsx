import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => (
  <form autoComplete="off" className='p2 text-gray-400
   focus-within:text-gray-600'>
    <label htmlFor="search-field" className="sr-only">
      search all songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4" />
      <input className="flex-1 bg-transparent berder-none outline-none 
      placeholder-gray-500 text-base text-white"
        type="search"
        name='search-field'
        autoComplete="off"
        id='search-field'
        placeholder='Search'
        value=''
        onChange={() => { }} />
    </div>
  </form>
);

export default SearchBar;
