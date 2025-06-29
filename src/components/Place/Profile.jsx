import placesInfo from './places.json'
import { useParams } from 'react-router-dom'
import Rating from './RatingSys'
function Profile(){
    let {cardId} = useParams()

    let data = placesInfo.filter(ele => ele.id == cardId? ele:null)
    let place = data[0]

    return(
        <>
        <div className="profile">
            <div className="intro">
            <h2>{place.name}</h2>
            <p>{place.type}</p>
            <img src={place.img} alt="" />
            </div>
            <div className="about_box">
            <p className='Pabout'>About</p> 
            <p className='Pabout_subtext'>{place.des}</p>

            </div>
            <div className="content">
                <div className="info">
                    <div className="photos">
                        <p>Photos</p>
                        <div className="images">
                        <img src={place.img1} alt="" />
                        <img src={place.img2} alt="" />
                        <img src={place.img3} alt="" />
                        </div>
                    </div>
                    <div className="vistors">
                        <p>Visitor info</p>
                        <ul>
                            <li>{place.visit_info}</li>
                        </ul>
                    </div>
                </div>
                <div className="location">
                    <p>Location</p>
                    <a href="" target='_blank'>{place.Addres}</a>
                </div>
            </div>
            <Rating></Rating>
        </div>

        </>
    )
}
export default Profile