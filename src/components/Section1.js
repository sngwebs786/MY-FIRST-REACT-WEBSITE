
import section1 from '../img/section1.jpg'
import section12 from '../img/section12.jpg'
import section13 from '../img/section13.jpg'
import '../../src/App.css'


function Section1() {

    return (
        <div className="section1-main-div ">
            <div>
                <h1 className="myWork-heading">
                    My work
                </h1>
            </div>
            <div className="cardBox">
                <div className="card">
                    <img src={section1} alt="Avatar" width="100%" />
                    <div className="container">
                        <h4><b>Nature 1</b></h4>
                        <p> Nature pic one

                        </p>
                    </div>

                </div>

                <div className="card">
                    <img src={section12} alt="Avatar" width="100%" />
                    <div className="container">
                        <h4><b>Nature 2</b></h4>
                        <p> Nature pic two </p>
                    </div>

                </div>
                <div className="card">
                    <img src={section13} alt="Avatar" width="100%" />
                    <div className="container">
                        <h4><b>Nature 3</b></h4>
                        <p> Nature pic three </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Section1