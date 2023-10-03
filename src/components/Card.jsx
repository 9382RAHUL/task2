import React from 'react'
import city from '../assets/city.jpg'
import { NavLink } from 'react-router-dom'

const Card = ({id, obj}) => {
    // console.log(id)
    return (
        <div className="card card-style p-2 mx-3 my-4" >
            <img className="card-img" src={city} alt="Card image cap" />
            <div className="card-body">
                <p className="card-title">8558 Pecan St.</p>
                <h6 className="card-text">{obj.desc}</h6>
                <div className="d-flex flex-row pt-3 justify-content-between align-items-center">
                    <div className="price">$7255/ month</div>
                    <NavLink className="link" to={`/property/${id}`}  > 
                        <a className="readMore py-2 px-3" >Read More</a>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card