import React,{useEffect, useState} from 'react'
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from './moviecard'

const APIURL  = 'http://www.omdbapi.com?apikey=f879f7b'
// const movie1 = {
//   "Title": "Superman, Spiderman or Batman",
//   "Year": "2011",
//   "imdbID": "tt2084949",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }

export default function App() {

  const [movies,setMovie] = useState([]);
  const [searchTrem,setSearchtrem] = useState("")

  const serachMovie = async(title)=>{
    const response = await fetch(`${APIURL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  }

    useEffect(()=>{
      serachMovie("")
    },[]);

  return (
    <div className='app'>
      <h1>MovieFinder</h1>
      <div className='search'>
        <input placeholder='Search for movie...' value={searchTrem} onChange={(e) => setSearchtrem(e.target.value)} />
        <img src={SearchIcon} alt='search' onClick={() => serachMovie(searchTrem)} />
      </div>
        {
          movies?.length > 0 ?
           (
            <div className='container'>
              {
                movies.map((movie)=>{
                  return(
                  <MovieCard movie={movie}/>
                  )
                })
              }
          </div>
          ) : (
            <div className='empty'>
              <h2>no movie found</h2>
            </div>
          )
        }
  

    </div>
  )
}
