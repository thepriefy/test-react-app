import React from 'react'

const Card = (props) => {
    return (
        <div>
            <h3 className="card_header">{props.header_text}</h3>
            <p className="card_content">{props.content_text}</p>
            <small className="card_footer">{props.footer_text}</small>
        </div>
    )
}

export default Card