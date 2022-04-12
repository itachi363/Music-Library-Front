import React, { useEffect, useState } from "react";
import axios from 'axios'
import SearchBar from "./componants/searchBar/SearchBar";
import MusicTable from "./componants/musicTable/MusicTable";
import AddMusic from "./componants/addMusic/AddMusic";
import './App.css'

function App() {

  const [songs, setSongs] = useState([{
    title: '',
    artist: '',
    album: '',
    release_date: '',
    genre: ''
  }])

  useEffect(() => {
    getAllSongs()
  }, [])

  
  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }

  async function deleteSong(id){
    let response = await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`)
    window.location.reload()
  }

  function searchBar(search, songs){
    let results = songs.filterSongs((result) => {
      if(result.includes(search)) {
        return true
      }
    })
    return results
  }

  return (
    <div>
      <div className="center">
        <SearchBar parentSongs = {songs} filter = {searchBar}/>
      </div>
      <div className="center">
        <AddMusic />
      </div>
      <div className="center">
        <h2>
          Music library
        </h2>
      </div>
      <div className="center">
        <MusicTable parentSongs = {songs} delete = {deleteSong}/>
      </div>
    </div>
  );
}

export default App;
