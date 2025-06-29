import Card from "../templates/Card"
import eventsInfo from './Events.json'
function Events() {
    return (
        <>
            <div className="events_page">
                {eventsInfo.map((ele, i) =>
                    <Card key={i} CardStyle="fullCard" extraDiv={true} date={ele.date} img={ele.img}
                        name={ele.name} img1={ele.img1} img2={ele.img2} img3={ele.img3} img4={ele.img4} Sdes={ele.des} cardId={ele.id}></Card>
                )}
            </div>
        </>
    )
}
export default Events