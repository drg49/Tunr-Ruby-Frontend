import {useState} from 'react'

const Form = ({handleCreate}) => {
    const [formData, setFormData] = useState({})
    
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreate(formData)
        setFormData({"title": '', "artist": '', "time": ''})
        document.querySelector('form').reset()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formData.name}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="text"
                name="artist"
                value={formData.img}
                onChange={handleChange}
                placeholder="Artist"
            />
            <input
                type="text"
                name="time"
                value={formData.description}
                onChange={handleChange}
                placeholder="Time"
            />

            <input type="submit" value="ADD NEW SONG" />
        </form>
    )
}

export default Form