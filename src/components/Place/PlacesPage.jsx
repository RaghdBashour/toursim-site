import Card from "../templates/Card";
function Places(props) {
    let data = props.data
    return (
        <>
            <div className="places_page">
                {data.map((ele, i) =>
                    <Card key={i} CardStyle="pCard" btn={true} img={ele.img}
                        name={ele.name} Sdes={ele.Sdes} cardId={ele.id}></Card>
                )}
            </div>

        </>
    )
}
export default Places