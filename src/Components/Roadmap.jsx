import React, { useRef } from 'react'
import {useParams} from 'react-router-dom'
import { Dropwdown } from './Dropwdown';
import { Notfound } from './Notfound';
import { SearchBar } from './SearchBar';
import RoadMap from './Roadmap/Roadmap';

export const Roadmap = (props) => {
   
    const params = useParams();
    const roadmapId = params.id
  return (
    // <div>{params.id}</div>
    <>
    <nav className='mt-3 ml-6'> 

          <div className="text-2xl font-bold text-gray-800 md:text-3xl">
            <a href="/" className='text-red-400'>WomenWiseUp.com</a>
          </div>

     </nav>
    {/* <div className={(params.id=='Data Science')?'hidden':'h-screen'}><Notfound/></div> */}
    {/* <div className={(params.id=='Data Science')?'':''}> <Dropwdown/></div> */}
      {/* <Dropwdown id={roadmapId} /> */}
      <RoadMap id={roadmapId} />
    </>
  )
}
