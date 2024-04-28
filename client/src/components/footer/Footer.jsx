import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavButton from '../navBar/NavButton';
import Button from '../Button';

export default function Footer() {
    return (
        <div className='footer-sub-footer'>
            <div className="sub-footer">
                <div className="newsletter-heading">
                    <h4>Subscribe To Our Newsletter and Be Updated With Our Latest Poshwear</h4>
                </div>
                <div className="newsletter-input">
                    <input className="form-control" placeholder="Write Your Email Here!"></input>
                    <Button className="subscribe-button" buttonName="Subscribe"/>
                </div>
                
            </div>
            <div className="footer">
                <div className="customer-policies">
                    <NavButton buttonName="Contact Us" />
                    <NavButton buttonName="T&C" />
                    <NavButton buttonName="Privacy Policy" />
                    <NavButton buttonName="FAQs" />
                </div>
                <div className="social-handles">
                    <NavButton buttonName={<FacebookRoundedIcon />}/>
                    <NavButton buttonName={<InstagramIcon />}/>
                    <NavButton buttonName={<TwitterIcon />}/>
                    <NavButton buttonName={<YouTubeIcon />}/>
                </div>
                <div className="copyright-tag">
                    © 2024 www.leaseposh.com , All Rights Reserved.
                </div>
            </div>
        </div>
    );
}
