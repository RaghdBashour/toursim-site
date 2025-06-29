import { Link } from "react-router-dom"
function Error(){
    return(
        <>
        <div className="error" style={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column',marginBottom:'1rem'}}>
                <h2 style={{fontSize:'86px',fontWeight:900,marginTop:'100px '}}>Error 404</h2>
                <p style={{ fontSize: '32px', fontWeight: 900,margin:'10px 0 50px 0' }}>the page is not found</p>
                <button style={{marginBottom:'20px',fontSize:'24px',borderRadius:'12px',padding:'10px',border:'none',background:'hsl(0,0%,70%)'}}><Link to="/" style={{textDecoration:'none',color:'black',textTransform:'capitalize'}}>go back home</Link></button>
        </div>

        </>
    )
}
export default Error