import { useState } from "react";

const AddMusic = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        }
        props.addNewEntry(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title </label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Artist </label>
                <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
            </div>
            <div>
                <label>Album </label>
                <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)} />
            </div>
            <div>
                <label>Release Date </label>
                <input type="date" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
            </div>
            <div>
                <label>Genre </label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <div>
                <button type="submit" className="submit-button">Add</button>
            </div>
        </form>
     );
}
 
export default AddMusic;