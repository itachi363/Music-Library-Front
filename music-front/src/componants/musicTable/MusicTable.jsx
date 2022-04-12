import './MusicTable.css'


const MusicTable = (props) => {
    return ( 
        <table>
        <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
        </tr>
            {props.parentSongs.map((songs) =>{
                return(
                    <tr>
                        <td className='border-box'>
                            {songs.title}
                        </td>
                        <td className='border-box'>
                            {songs.artist}
                        </td>
                        <td className='border-box'>
                            {songs.album}
                        </td>
                        <td className='border-box'>
                            {songs.release_date}
                        </td>
                        <td className='border-box'>
                            {songs.genre}
                        </td>
                        <td>
                            <button onClick={() => props.delete(songs.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </table>
     );
}
 
export default MusicTable;