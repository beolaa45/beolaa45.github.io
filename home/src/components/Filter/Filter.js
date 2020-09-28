import React from 'react'

function Filter({title, subTitle}) {
    return (
        <div className="Filter">
            <p className="Filter__title">{title}</p>
            <div className="Filter__group">
                <input type="checkbox"/>
                <label>{subTitle[0]}</label>
            </div>
           
            
        </div>
    )
}


export default Filter

