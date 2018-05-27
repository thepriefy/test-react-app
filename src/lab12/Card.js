import  React from 'react'

class Card extends React.Component {
    state = {
        title: 'This is title.',
        item_list: []
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3 className="card_header">{this.props.header_text}</h3>
                <p className="card_content">{this.props.content_text}</p>
                <button className="card_btn" onClick={this.props.onClick}>click!</button>
            </div>
        )
    }
}

export default Card