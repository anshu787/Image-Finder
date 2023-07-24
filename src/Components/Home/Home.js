import React from 'react'
import './Home.css'
import  { useState } from 'react';
import PixabayResults from '../Result/Result';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [numResults, setNumResults] = useState(10);

  return (
    <div className='main'>
      <div className='opacityes'>
        <div className='title'> 
        <h1 className='titl'>PixaBay Finder</h1>
        </div>
        <div className='description'>
          <h2 className='desc'>Stunning free images & royalty free stock</h2>
        </div>
        <div className='details'>
          <p>Over 1 million+ high quality stock images and videos shared by our talented community.</p>
        </div>
        <div className='inputes'>
          <input type='text' placeholder='Search...' value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}></input>
          <select value={numResults} onChange={(e) => setNumResults(Number(e.target.value))} >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
            <option value='25'>25</option>
          </select>
          
        </div>
        <PixabayResults searchQuery={searchQuery} numResults={numResults}/>
      </div>
    </div>
  )
}

export default Home