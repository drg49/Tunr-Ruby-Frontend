const Playlist = ({songs, handleDelete}) => {
    return (
        <>
        <h2>Playlist 1</h2>
        {songs ? songs.map((song, index) => {
            return (
                <div id="title-flex">
                <div>
                    <p id="title">{song.title}</p>
                    <p id="time">{song.time}</p>
                </div>
                <div>
                <p>{song.artist}</p>
                <button onClick={() => {handleDelete(song.id)}}>Delete</button>
                </div>
                </div>
            )
        }) : null}
        </>
    )
    
}

export default Playlist