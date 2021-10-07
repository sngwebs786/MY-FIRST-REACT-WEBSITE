
import hamburger from '../img/hamburger.png'
import camera from '../img/camera.png'
import '../../src/App.css'


function Header() {

    return (
        <div className="header-main-div">
            <a href="#">
                <img src={hamburger} className="hamburger-icon" />
            </a>

            <h1 className="header-heading">
                Umar's photography
            </h1>
            <center>
                <a href="#">
                    <img src={camera} className="camera-icon" />
                </a>
            </center>

        </div>
    )
}

export default Header