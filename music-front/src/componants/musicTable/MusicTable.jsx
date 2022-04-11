const MusicTable = (props) => {
    return ( 
        <tbody>
            {props.parentSongs.map((songs) =>{
                return(
                    <body>
                        <div>
                            {songs.title}
                        </div>
                        <div>
                            {songs.artist}
                        </div>
                        <div>
                            {songs.album}
                        </div>
                        <div>
                            {songs.release_date}
                        </div>
                        <div>
                            {songs.genre}
                        </div>
                    </body>
                )
            })}
        </tbody>
     );
}
 
export default MusicTable;