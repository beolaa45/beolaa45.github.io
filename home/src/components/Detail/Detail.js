import React from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
  
    const {slug} = useParams();
    console.log(slug)
    return (
        <div>
            Quiz detail {slug}
        </div>
    )
}


export default Detail

