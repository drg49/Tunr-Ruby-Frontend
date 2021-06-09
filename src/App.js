import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header';
import Playlist from './components/Playlist';
import Form from './components/Form'

function App() {

  const url = "https://rails-tunr.herokuapp.com"

  const [songs, setSongs] = useState(null)

  const getSongs = () => {
    fetch(url + "/songs/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setSongs(data)
    })
  }

  useEffect(() => {getSongs()}, [])

  const handleCreate = (newSong) => {
    fetch(url + "/songs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSong)
    })
    .then(() => getSongs())
  }

  const handleDelete = (songID) => {
    fetch(url + "/songs/" + songID, {
      method: "DELETE"
    })
    .then(() => getSongs())
  }

  return (
    <div className="App">
        <Header />
        <Playlist songs={songs} handleDelete={handleDelete}/>
        <Form handleCreate={handleCreate}/>
    </div>
  );
}

export default App;
