import './Home.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
        // useEffect(() => {
        //   // Add a class to the body element
        //   document.body.classList.add('HomePage');
          
        //   // Clean up the class when the component unmounts
        //   return () => {
        //     document.body.classList.remove('HomePage');
        //   };
        // }, []);
    return(
        <div className="HomePage">
    <h1 className='header'>
        <img src="https://i.imgur.com/7kKq6Gy.png" alt="" />
        
    </h1>
        <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="cutout-text" to="/about"><img
        src="https://i.imgur.com/cMuE2gu.png"
        alt="ransom-note-fonts"
        border="0"
        style={{ width: '200px', height: '100px' }}
      /></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="cutout-text" to="/mywork"><img src="https://i.imgur.com/tKFzVAe.png" alt="ransom-note-fonts" border="0"  style={{ width: '200px', height: '100px' }}></img></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-l" to="/contact"><img
        src="https://i.imgur.com/ZTZGQbE.png"
        alt="ransom-note-fonts"
        border="0"
        style={{ width: '200px', height: '100px' }}
      /></Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a href="https://www.instagram.com/yourhairsuks/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="8x" className="instagram-icon" />
                        </a>
                    </li>
             </ul>
             <img src="https://i.imgur.com/RktezNS.jpg"/>
        </div>
    )
}
