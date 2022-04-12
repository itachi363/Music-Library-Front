import { useState } from "react";
import axios from 'axios'
import './AddMusic.css'

const AddMusic = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/music/', {
                title: title,
                artist: artist,
                album: album,
                release_date: release_date,
                genre: genre
            })
            window.location.reload(true)
        }
        catch (error) {
            console.log(error.response)
        }
    }



    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <h2 className="text-center">
                    Add a song
                </h2>
            </div>
            <div className="border-bar">
                <label className="spacing">Title:</label>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <label className="spacing">Artist:</label>
                <input type="text" value={artist} onChange={(event) => setArtist(event.target.value)} />
                <label className="spacing">Album:</label>
                <input type="text" value={album} onChange={(event) => setAlbum(event.target.value)} />
                <label className="spacing">Release Date:</label>
                <input type="date" value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
                <label className="spacing">Genre:</label>
                <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
                <button type="submit"  className="spacing">Add</button>
            </div>
        </form>
     );
}
 
export default AddMusic;