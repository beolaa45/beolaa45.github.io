import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
function Spinner({style}) {
    return (
        <div>
            <FontAwesomeIcon icon={faSpinner} style={style} spin />
        </div>
    )
}

export default Spinner

