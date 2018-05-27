import React from 'react'

class Gallery extends React.Component {
    componentDidMount() {
        this.fetchImage('http://localhost/images')
    }

    fetchImage = (url) => {}

    render(){
        return (
            <div>
                <h3>Gallery</h3>
            </div>
        )
    }
}


export default Gallery