import React, { useState } from 'react'
import Card from './Card'
import data, {data2} from '../Data'

const Home = () => {
    const [city, setCity] = useState(4)

    const [propArr, setPropArr] = useState(data2)

    const handleArr1 = () => {
        setPropArr(data)
    }
    const handleArr2 = () => {
        setPropArr(data2)
    }
    return (
        <div className="d-flex p-5 flex-column " >
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <div className="h1 font-weight-bold">Featured Listed Property</div>
                <div className="text-header" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi debitis autem voluptatum voluptate aperiam  ipsum dolor.
                </div>
            </div>

            <div className="p-5 d-flex flex-row  justify-content-between align-items-center mx-5">
                <div className="d-flex flex-row ">
                    <div className={`px-4 py-3 me-4 ${city == 1 ? "btnToggle" : "defualt"}`} onClick={() => setCity(1)} >New York</div>
                    <div className={`px-4 py-3 me-4 ${city == 2 ? "btnToggle" : "defualt"}`} onClick={() => setCity(2)} >Mumbai</div>
                    <div className={`px-4 py-3 me-4 ${city == 3 ? "btnToggle" : "defualt"}`} onClick={() => setCity(3)} >Paris</div>
                    <div className={`px-4 py-3 me-4 ${city == 4 ? "btnToggle" : "defualt"}`} onClick={() => setCity(4)} >London</div>
                </div>
                <div className="view px-4 py-3" >View All </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {
                    propArr.map((obj, index) => {
                        return (
                            <Card key={index} id={obj.id} obj={obj}/>
                        )
                    })
                }

            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {
                    propArr.length > 6 ? <div className="showMore py-2 px-3" onClick={() => handleArr2()}>Show Less</div>
                        : <div className="showMore py-2 px-3" onClick={() => handleArr1()}>Show More</div>
                }
            </div>
        </div>
    )
}

export default Home