
import {FiFacebook} from 'react-icons/fi'
import { AiOutlineYoutube,AiOutlineInstagram } from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import "./footer.css";
 




const Footer = () => {
	return (
		<footer>
			<div className='wrapper footer-wrapper'>
				<div className='logo'>
					<div>
						<img src='assets/img/UL.png' alt='' />
					</div>
					<section className='footer-icons'>
                            <FiFacebook className='footer-icon'/>
						    <AiOutlineYoutube className='footer-icon' />
						    <CiTwitter className='footer-icon'/>
                            <AiOutlineInstagram className='footer-icon'/>
					</section>
				</div>

				<section className='footer-links'>
					<ul className='link-items'>
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
					<ul className='link-items'>
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

				<section className='form'>
					<form action='#'>
						<div className='form-input'>
							<input
								type='text'
								className='form-input-control'
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
