import React from 'react'
import axios from 'axios'

class Gallery extends React.Component {
    state = {
        image: []
    }

    fetchImage = (url) => {
        return axios.get(url)
            .then(response => this.setState({image: response.data}))
            .catch(response => console.log(response))
    }

    render() {
        return (
            <div>
                <h3>Gallery</h3>
            </div>
        )
    }
}

export default Gallery