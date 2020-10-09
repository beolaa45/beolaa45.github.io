import React from 'react'
import { toLowerCase } from '../utiliti/utility'
import "./Filter.scss"
function Filter({title, subTitle}) {
    let render = subTitle.map(value => {
        return(
            <div className="Filter__group">
            <input id={toLowerCase(value)} name={toLowerCase(value)} value={toLowerCase(value)} className="Filter__group__checkbox" type="checkbox" />
            <label htmlFor={toLowerCase(value)} className="Filter__group__label">{value}</label>
        </div>
        )
    })
    return (
        <div className="Filter">
            <p className="Filter__title">{title}</p>
            {render && render}
        </div>


    )
}


export default Filter

