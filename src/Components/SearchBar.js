import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import roadmaps from '../roadmapdata';
import _ from 'lodash'

export  const SearchBar = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const submitHandeler = (e)=>{
    e.preventDefault();
    const roadMapName = inputRef.current.value;

    const selectedroadmap = roadmaps.filter(roadmap=>{
      return _.camelCase(roadmap.courseName) === _.camelCase(roadMapName)
    })
    console.log(selectedroadmap)

    navigate(`/roadmap/${selectedroadmap[0].courseId}`);
  }
  return (
    <div class='w-5/6 mx-auto mb-8 '>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border-2">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    <form className='w-full' onSubmit={submitHandeler}>
        <input
        ref={inputRef}
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search for a roadmap.." />
        <button type='submit' />
        </form>
    </div>
   </div>
  )
}
