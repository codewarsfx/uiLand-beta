
import {FiFacebook} from 'react-icons/fi'
import { AiOutlineYoutube,AiOutlineInstagram } from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import "./footer.css";
 




const Footer = () => {
	return (
		<footer>
			<div class='wrapper footer-wrapper'>
				<div class='logo'>
					<div>
						<img src='assets/img/UL.png' alt='' />
					</div>
					<section class='footer-icons'>
                            <FiFacebook class='footer-icon'/>
						    <AiOutlineYoutube class='footer-icon' />
						    <CiTwitter class='footer-icon'/>
                            <AiOutlineInstagram class='footer-icon'/>
					</section>
				</div>

				<section class='footer-links'>
					<ul class='link-items'>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Pricing</a>
						</li>
						<li>
							<a href='#'>Products</a>
						</li>
						<li>
							<a href='#'>About Us</a>
						</li>
					</ul>
					<ul class='link-items'>
						<li>
							<a href='#'>Careers</a>
						</li>
						<li>
							<a href='#'>Community</a>
						</li>
						<li>
							<a href='#'>Privacy Policies</a>
						</li>
					</ul>
				</section>

				<section class='form'>
					<form action='#'>
						<div class='form-input'>
							<input
								type='text'
								class='form-input-control'
								placeholder='Updates in your inbox...'
							/>
							<button type='submit'>Go</button>
						</div>
					</form>
				</section>
			</div>
		</footer>
	);
};

export default Footer
