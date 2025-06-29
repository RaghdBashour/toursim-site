import { Link } from 'react-router-dom'
function Footer(){
    const date = new Date()
    return(
    <div className="footer">

                <img  src='/assets/logo4.png' alt="" />
        <div className='list'>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/places'>places to go</Link></li>
                    <li><Link to='/events'>events</Link></li>
                    <li><Link to='/guides'>guides</Link></li>
                    <li><Link to='/about'>about</Link></li>
                </ul>

                <ul>
                    <li><a href="facbook.com">facebook</a></li>
                    <li><a href="intagram.com">instgram</a></li>
                    <li><a href="twitter.com">twitter</a></li>
                </ul>
                <ul>
                    <li><b>contact-us</b></li>
                    <li><a href="mailto:visitAlwdi@gmail.com">E-mail</a></li>
                    <li><a href="tel:+963962190794">phone</a></li>
                </ul>
        </div>
        <p>&copy;{date.getFullYear()} All Rights Reserved </p>
    </div>
    )
}
export default Footer