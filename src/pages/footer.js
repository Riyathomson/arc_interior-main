import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
               
               
               <footer className="footer-v1">
					<div className="footer-left">
						<a href="index.html">
							<img src="assets/images/Header/logo-invest.png " className="img-responsive" alt="Image"/>
						</a>
					</div>
					{/* <!-- End Left Footer --> */}
					<nav>
						<ul>
							<li>
								<a className="text-cap" href="#">Gallery</a>
							</li>
							<li>
								<a className="text-cap" href="#">Products</a>
							</li>
							<li>
								<a className="text-cap" href="#">News</a>
							</li>
							<li>
								<a className="text-cap" href="#">About</a>
							</li>
							<li>
								<a className="text-cap" href="#">Privacy Policy</a>
							</li>
						</ul>
					</nav>
					{/* <!-- End Nav Footer --> */}
					<div className="footer-right">
						<ul className="social social-footer">
		                    <li className="facebook active"><a href="#"><i className="fa fa-facebook"></i></a></li>
		                    <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
		                    <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
		                    <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
		                    <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
		                  </ul>
					</div>
					{/* <!-- End Right Footer --> */}
				</footer>
				{/* <!-- End Footer --> */}

				<section className="copyright">
					<p>Copyright © 2016 Designed by <a href="#">AuThemes</a>. All rights reserved.</p>
				</section>
		
		
		{/* <!-- End page --> */}

</div>
        );
    }
}

export default Footer;