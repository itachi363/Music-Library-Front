import React from "react";
import axios from 'axios'
import NavigationBar from "./componants/navigationBar/NavigationBar";
import SearchBar from "./componants/searchBar/SearchBar";
import MusicTable from "./componants/musicTable/MusicTable";

function App() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <MusicTable />
      </div>
    </div>
  );
}

export default App;
