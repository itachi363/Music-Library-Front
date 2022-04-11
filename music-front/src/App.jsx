import React, { useEffect, useState } from "react";
import axios from 'axios'
import NavigationBar from "./componants/navigationBar/NavigationBar";
import SearchBar from "./componants/searchBar/SearchBar";
import MusicTable from "./componants/musicTable/MusicTable";
import AddMusic from "./componants/addMusic/AddMusic";

function App() {

  const [songs, setSongs] = useState([{
    title: "",
    artist: "",
    album: "",
    release_date: "",
    genre: ""
  }])

  useEffect(() => {
    getAllSongs()
  }, [])

  function addNewEntry(entry){
    let tempEntries = [...songs, entry]

    setSongs(tempEntries)
  }

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <AddMusic addNewEntry={addNewEntry} />
      </div>
      <div>
        <MusicTable parentSongs = {songs}/>
      </div>
    </div>
  );
}

export default App;
