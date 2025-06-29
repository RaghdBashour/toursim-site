import Card from "../templates/Card"
function GuidesPage(props){
    let data = props.data
return(
        <>
            <div className="places_page" style={{margin:0,gap:0}}>
                {data.map((ele, i) =>
                    <Card key={i} CardStyle="gCard"  
                        img={ele.img}
                        name={ele.name} guides={true} 
                        cardId={ele.id} languages={ele.languages}
                        age={ele.age}
                        experience={ele.experience}
                        phone={ele.phone}
                        email={ele.email}></Card>
                )}
            </div>

        </>
    )
}
export default GuidesPage