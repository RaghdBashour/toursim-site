import { Link } from 'react-router-dom'
function Card(props) {
    return (
        <>
            <div className={props.CardStyle}>
                <img src={props.img} alt="" />
        {props.extraDiv &&<div className="holders">
            <img src={props.img} alt="" />
            <div className="photoBox">
            <img src={props.img1} alt="" />
            <img src={props.img2} alt="" />
            <img src={props.img3} alt="" />
            <img src={props.img4} alt="" />
            </div>
        </div>}
                <div className="text">
                    <span>{props.date}</span>
                    <h2>{props.name}</h2>
                    {props.guides&&<ul>
                        <li>languages:{props.languages[0]} {props.languages[1]}</li>
                        <li>age:{props.age}</li>
                        <li>experience:{props.experience} Years</li>
                        <li><a href={`mailto:${props.email}`}>E-mail</a> <a href={`tel:${props.phone}`}>phone</a></li>

                    </ul>
                    }
                    <p>{props.Sdes}</p>
                </div>
                <Link to={`/profile/${props.cardId}`}>
                    {props.btn && <button>learn more</button>}
                </Link>
            </div>
        </>
    )
}

export default Card