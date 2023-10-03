import React from 'react'
import { useParams } from 'react-router-dom'
import city from '../assets/city.jpg'
import data from '../Data'

const Details = () => {
    const { id } = useParams()
    // console.log(id)
    return (
        <div className="d-flex flex-row justify-content-center align-items-center p-5 rock">
            <img src={city} alt="" />
            <div>
                <div>{data[id - 1].id}</div>
                <div>{data[id - 1].desc}</div>
            </div>
        </div>
    )
}

export default Details