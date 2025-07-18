import {useEffect, useState } from "react"
import places from '../Place/places.json'
import Card from "../templates/Card"
function Filter() {
    const [price, setPrice] = useState()
    const [type, setType] = useState()
    const [cap, setCap] = useState()
    const [data, setData] = useState(places)
    const types = {
        1: 'religious',
        2: 'nature',
        3: 'restourant',
        4: 'historical',
        5: 'Hotel'
    }
    let active = { backgroundColor: 'hsl(0, 0%, 30%)' }
    const set_price = (e) => {
        setPrice(e.target.value)
    }
    const set_type = (e) => {
        setType(e.target.value)
    }
    const set_cap = (e) => {
        setCap(e.target.value)
    }
    useEffect(() => {
        setData(places.filter(ele => ele.price_tag <= price && ele.type.includes(types[type]) && ele.cap >= cap))
    }, [price, type, cap])

    return (
        <>
                <div className="options" style={data.length==0?{marginBottom:'3rem'}:null}>
                    <label className="filter_label" htmlFor="pricing">set your price limit:</label>
                    <ul className="pricing">
                        <li id="test" value='1' style={price == 1 ? active : null} onClick={set_price}>free</li>
                        <li id="test" value='2' style={price == 2 ? active : null} onClick={set_price}>inexpinsive</li>
                        <li id="test" value='3' style={price == 3 ? active : null} onClick={set_price}>mid-class</li>
                        <li id="test" value='4' style={price == 4 ? active : null} onClick={set_price}>expinsive</li>
                    </ul>

                    <label className="filter_label" htmlFor="pricing">set your preferd place type:</label>
                    <ul className="pricing">
                        <li id="test" value='1' style={type == 1 ? active : null} onClick={set_type}>religious</li>
                        <li id="test" value='2' style={type == 2 ? active : null} onClick={set_type}>nature</li>
                        <li id="test" value='3' style={type == 3 ? active : null} onClick={set_type}>restourant</li>
                        <li id="test" value='4' style={type == 4 ? active : null} onClick={set_type}>historical site</li>
                        <li id="test" value='5' style={type == 5 ? active : null} onClick={set_type}>Hotel</li>
                    </ul>
                    <label className="filter_label" htmlFor="pricing">set your max people capacity:</label>
                    <ul className="pricing">
                        <li id="test" value='25' style={cap == 25 ? active : null} onClick={set_cap}>25</li>
                        <li id="test" value='50' style={cap == 50 ? active : null} onClick={set_cap}>50</li>
                        <li id="test" value='75' style={cap == 75 ? active : null} onClick={set_cap}>75</li>
                        <li id="test" value='100' style={cap == 100 ? active : null} onClick={set_cap}>100+</li>
                    </ul>
                </div>
                <div className="planner">
                    
                </div>
                <div className="places_page">
                    {data.map((ele, i) =>
                        <Card key={i} CardStyle="pCard" btn={true} img={ele.img}
                            name={ele.name} Sdes={ele.Sdes} cardId={ele.id} />)} </div>
        </>
    )
}
export default Filter