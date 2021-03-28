import React from 'react'
import './index.scss'

const CardHeader = ({title}) => {
    return(
        <div className="cardHeader">
            <p className="cardHeader_title">{title}</p>
        </div>
    )
}
export default CardHeader;