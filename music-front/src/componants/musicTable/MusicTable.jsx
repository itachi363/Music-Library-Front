


const MusicTable = (props) => {
    return ( 
        <tbody>
            {props.parentSongs.map((songs) =>{
                return(
                    <div>
                        <h3>
                        {songs.title}
                        </h3>
                        {songs.artist}
                        {songs.album}
                        {songs.release_date}
                        {songs.genre}
                    </div>
                )
            })}
        </tbody>
     );
}
 
export default MusicTable;