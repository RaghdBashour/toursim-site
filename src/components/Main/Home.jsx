import Gallary from './Gallary'
import Section from "../templates/Section"
import PlacesInfo from '../Place/places.json'
import EventsInfo from '../events/Events.json'
import guidesInfo from '../guides/guides.json'

function Home() {
  return (
    <>
      <div className="containor">
        <video src='./assets/motion.mp4' loop muted autoPlay >
        </video>
        <div className="landing">
          <div className="text">
            <h2>Al-Wadi</h2>
            <p>your gate to enjoy nature beatuy <br />and fresh air</p>
          </div>
          <div className="photo">
            <img src='/assets/Landing.jpg' alt="" />
          </div>
        </div>
      </div>
      <Section data={PlacesInfo} type='places' title='places to go' des="enjoy the beuty of alwadi" SectionStyle='placesStyle' btn={true} ></Section>
      <Gallary></Gallary>
      <Section data={EventsInfo} type='events' title='Events' des="dicover the culture of alwadi" SectionStyle='EventsStyle'></Section>
      <Section data={guidesInfo} type='guides' title= 'guides' des="hire the best people to help you with your journy" guides={true} SectionStyle='guidesStyle' ></Section>
    </>
  )
}

export default Home
