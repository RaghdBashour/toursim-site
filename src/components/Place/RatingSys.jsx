import {useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Rating(){
    let date  = new Date()
    const [comments,setComment] = useState([])
    const [name,setName] = useState('')
    const [typo,setTypo] = useState('')
    const [rating,setRating] = useState()
    const addReview = (e)=>{
        e.preventDefault()
        if(name.trim()!='' && rating){
            setComment(c=>[{username:name,review:typo,rating:rating},...comments])
            setName('')
            setTypo('')
            setRating('')
        }
    }

    const editText =(e)=>{
            setTypo(t => e.target.value)
    }
    const AddName=(e)=>{
        setName(t => e.target.value)
    }
    const setRatings=(e)=>{
        setRating(e.target.value)
    }

    return(
        <div className="ratings">
            <p>add your review</p>
            <form action="">
            <input onChange={AddName} type="text" value={name} placeholder="username..." />
            <textarea  onChange={editText} type='' value={typo} placeholder="review..." />
            <select defaultValue='' value={rating} onChange={setRatings} name="" id="">
                    <option value="">add your rating</option>
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
            </select>

        <button onClick={addReview}>add review</button>
        </form>
        <hr />
        <ul className="comment_section">
                {comments.map((ele, i) => <li value={typo} key={i}><div className="usernameC"><h2>{ele.username}</h2> <span>{ele.rating}⭐</span></div> <p>{ele.review}</p></li>)}
        </ul>
        </div>
    )
}

export default Rating