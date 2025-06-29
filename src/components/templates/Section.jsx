import Card from "./Card"
function Section(props) {
    let data = props.data.slice(0,4)
    let section = props.type
    let btnFlag = props.btn
    let guidesFalg = props.guides
    return (
        <div className={props.type}>
            <div className="section_Header">
                <h2 className="section_h1">{props.title}</h2>
                <p className="section_p">{props.des}</p>
            </div>

            <div className={props.SectionStyle}>
                {data.map((ele, i) => <Card key={i} CardStyle={section == 'places'?'pCard':section=='events'?'eCard':'gCard'} img={ele.img}
                    name={ele.name} 
                    guides={guidesFalg} 
                    Sdes={ele.Sdes} cardId={ele.id} 
                    btn={btnFlag} date={ele.date} 
                    languages={ele.languages} 
                    age={ele.age} 
                    experience={ele.experience} 
                    phone={ele.phone}  
                    email={ele.email} 
                    ></Card>)
                }
            </div>
        </div>
    )
}

export default Section