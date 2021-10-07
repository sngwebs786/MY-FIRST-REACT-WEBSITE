import youtube from '../img/youtube.png'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'


function Footer(){
    return(
        <section class="footer">
            <div class="footer-div">
                <div class="list1 lists col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-6">
                    <p>POPULAR CATEGORIES</p>
                    <a href="#">Cars</a><br/>
                    <a href="#">Flats for rent</a><br/>
                    <a href="#">Jobs</a><br/>
                    <a href="#">Mobile phones</a><br/>

                </div>
                <div class="list2 lists  col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-6">
                    <p>TRENDING SEARCHES</p>
                    <a href="#">Bikes</a><br/>
                    <a href="#">Watches</a><br/>
                    <a href="#">Books</a><br/>
                    <a href="#">Dogs</a><br/>
                </div>
                <div class="list3 lists col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-6">
                    <p>ABOUT US</p>
                    <a href="#">About Nature Group</a><br/>
                    <a href="#">Nature BLOG</a><br/>
                    <a href="#">Contact Us</a><br/>
                    <a href="#">Nature for Businesses</a>
                </div>
                <div class="list4 lists col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-6">
                    <p>Nature</p>
                    <a href="#">Help</a><br/>
                    <a href="#">Sitemap</a><br/>
                    <a href="#">Legal & Privacy information</a><br/>

                </div>
                <div class="list5 lists col-xl-4 col-lg-4 col-md-4 col-sm-3 col-xs-6">
                    <p>FOLLOW US</p>
                    <a href="#"><img src={youtube} height="20px" width="20px"/></a>
                    <a href="#"><img src={facebook} height="20px" width="20px"/></a>
                    <a href="#"><img src={twitter} height="20px" width="20px"/></a>
                    <a href="#"><img src={instagram} height="20px" width="20px"/></a><br/> <br/>
                </div>
            </div>
    </section>
    )
}


export default Footer