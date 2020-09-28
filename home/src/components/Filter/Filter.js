import React from 'react'
import "./Filter.scss"
function Filter({title, subTitle}) {
    return (
        <div className="Filter">
            <p className="Filter__title">{title}</p>
            <div className="Filter__group">
                <input id="camera" name="camera" value="camera" className="Filter__group__checkbox" type="checkbox" />
                <label htmlFor="camera" className="Filter__group__label">{subTitle[0]}</label>
            </div>
            <div className="Filter__group">
                <input id="camera" name="camera" value="camera" className="Filter__group__checkbox" type="checkbox" />
                <label htmlFor="camera" className="Filter__group__label">{subTitle[0]}</label>
            </div>
            <div className="Filter__group">
                <input id="camera" name="camera" value="camera" className="Filter__group__checkbox" type="checkbox" />
                <label htmlFor="camera" className="Filter__group__label">{subTitle[0]}</label>
            </div>
            <div className="Filter__group">
                <input id="camera" name="camera" value="camera" className="Filter__group__checkbox" type="checkbox" />
                <label htmlFor="camera" className="Filter__group__label">{subTitle[0]}</label>
            </div>
        </div>


    )
}


export default Filter

