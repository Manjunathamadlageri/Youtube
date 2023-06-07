import youtube from '../images/youtube.png'
import video from '../images/video.png'
import notification from '../images/notification.png'
import '../style/navbar.css'

function Navbar()
{
    return (
        <div className="navbar">
            <div className="logo">
            <img width={130} src={youtube} alt="" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder='search' />
            </div>
            <div className="userOptions">
                <img width={30} src={video} alt="" />
                <img width={30} src={notification} alt="" />
                 <div className="profile">
                    <h4>M</h4>
                 </div>
            </div>
        </div>
    );

}
export default Navbar;