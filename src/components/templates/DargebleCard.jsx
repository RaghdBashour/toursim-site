import { useDraggable } from '@dnd-kit/core'
import { Link, Links } from 'react-router-dom'
function DargebleCard(props){
(
    <>
    <div className={props.CardStyle}>
        <img src={props.img} alt="" />
        <div className="text">
            <span>{props.date}</span>
            <h2>{props.name}</h2>
            <p>{props.Sdes}</p>
        </div>
        <Link to={`/profile/${props.cardId}`}>
            {props.btn && <button>learn more</button>}
        </Link>
    </div>
    </>
)}
export default DargebleCard