import React from 'react';
import Header from './header';

class About extends React.Component{
    render(){
        return(
            <div>
               
             <Header/>

                <section>
					<div className="sub-header sub-header-1 sub-header-about fake-position">
						<div className="sub-header-content">
							<h2 className="text-cap white-text">Ecommercial Design</h2>
							<ol className="breadcrumb breadcrumb-arc text-cap">
								<li>
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="servicesList.html">Our Services</a>
								</li>
								<li className="active">Ecommercial design</li>
							</ol>
						</div>
					</div>
				</section>
				{/* <!-- End Section Sub Header --> */}
				
				<section className="padding padding-bottom-0">
					<div className="container">
						<div className="row">
							<div className="about-intro">
								<div className="about-intro-img">
									<img src="assets/images/About/1.jpg" className="img-responsive" alt="Image"/>
								</div>
								<div className="about-intro-text">
									<h2 className="text-cap">We are Design Studio</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempus quam. Aliquam eu tellus urna. Pellentesque consectetur et nisl vel pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia</p>
									<p><strong>Small change, big difference.</strong> Pellentesque cursus neque nisi, vitae rutrum est pellentesque ac. Proin eleifend sodales justo a facilisis.</p>
									<p><strong>Ideas & Creative.</strong> Nam nec posuere odio. Phasellus quam mi, aliquam sit amet accumsan non, tempor non massa. Mauris tristique facilisis molestie. Donec et imperdiet arcu. Aliquam erat volutpat. Morbi enim tellus, volutpat vel imperdiet sed, efficitur non diam. Etiam dignissim elit nec orci rutrum facilisis. Ut id elit consectetur, interdum est sit amet, dictum magna.</p>
									<div className="clearfix mgb20"></div>
									<h2 className="text-cap">Design Awards</h2>
									<p>Mauris tortor velit, commodo quis dignissim a, vehicula non ligula. Cras malesuada tortor sit amet tellus vehicula sodales. Suspendisse non sollicitudin quam. ClassNameclassName aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc aliquam felis quis ipsum feugiat commodo. </p>
								</div>
							</div>
						</div>
					</div>
				</section>	
				{/* <!-- End Section About Intro --> */}
				<section className="padding padding-bottom-0">
					<div className="container">
						<div className="row">
							<h2 className="title text-cap">Meet Our Team</h2>
							<div className="divider divider-1">
								<svg className="svg-triangle-icon-container">
								  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
								</svg>
							</div>
							{/* <!-- End Title --> */}
							<div className="ourteam-warp ourteam-3-col">
					              <div className="customNavigation">
					                <a className="btn prev-team"><i className="fa fa-angle-left"></i></a>
					                <a className="btn next-team"><i className="fa fa-angle-right"></i></a>
					              </div>  
			              		  <div id="owl-team-3-columns" className="owl-carousel owl-theme clearfix">
						              <div className="item">
						              	<div className="item-team">
						              		<div className="portrait-member">
							                  	<img src="assets/images/Ourteam/1.jpg" className="img-responsive" alt="Image"/>
						                  	</div>
						                  	<div className="member-info text-center hvr-float-shadow">
							                  	<h5 className="text-cap">Ronald Long</h5>
							                  	<p className="member-job">Creative Director</p>
							                  	<div className="social-member">
							                  		<a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
							                  	</div>
						                  	</div>
						              	</div>
						                  
						              </div>
                                      {/* <!-- end item --> */}
						              <div className="item">
						              	<div className="item-team">
							                  <div className="portrait-member">
							                  	<img src="assets/images/Ourteam/2.jpg" className="img-responsive" alt="Image"/>
							                  </div>
							                  <div className="member-info text-center hvr-float-shadow">
							                  	<h5 className="text-cap">Jennifer Aguilar</h5>
							                  	<p className="member-job">Lead Designer</p>
							                  	<div className="social-member">
							                  		<a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
							                  	</div>
							                  </div>
							            </div>
						              </div>
                                      {/* <!-- end item --> */}
						              <div className="item">
						              	<div className="item-team">
							                  <div className="portrait-member">
							                  	<img src="assets/images/Ourteam/3.jpg" className="img-responsive" alt="Image"/>
							                  </div>
							                  <div className="member-info text-center hvr-float-shadow">
							                  	<h5 className="text-cap">Henry Hernandez</h5>
							                  	<p className="member-job">Photograper</p>
							                  	<div className="social-member">
							                  		<a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
							                  	</div>
							                  </div>
							            </div>
						              </div>
                                      {/* <!-- end item --> */}
						              <div className="item">
						              	<div className="item-team">
							                  <div className="portrait-member">
							                  	<img src="assets/images/Ourteam/4.jpg" className="img-responsive" alt="Image"/>
							                  </div>
							                  <div className="member-info text-center hvr-float-shadow">
							                  	<h5 className="text-cap">Melanie Martinez</h5>
							                  	<p className="member-job">Designer</p>
							                  	<div className="social-member">
							                  		<a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
							                  	</div>
							                  </div>
							            </div>
						              </div>
                                      {/* <!-- end item --> */}
						              <div className="item">
						              	<div className="item-team">
							                  <div className="portrait-member">
							                  	<img src="assets/images/Ourteam/5.jpg" className="img-responsive" alt="Image"/>
							                  </div>
							                  <div className="member-info text-center hvr-float-shadow">
							                  	<h5 className="text-cap">Jackson Martinez</h5>
							                  	<p className="member-job">Creative Designer</p>
							                  	<div className="social-member">
							                  		<a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
							                  	</div>
							                  </div>
							            </div>
						              </div>
                                      {/* <!-- end item --> */}
						              <div className="item">
						              	<div className="item-team">
							                  <div className="portrait-member">
							                  	<img src="assets/images/Ourteam/6.jpg" className="img-responsive" alt="Image"/>
							                  </div>
							                  <div className="member-info text-center hvr-float-shadow">
							                  	<h5 className="text-cap">Olivia Lang</h5>
							                  	<p className="member-job">Photographer</p>
							                  	<div className="social-member">
							                  		<a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
							                  	</div>
							                  </div>
							            </div>
						              </div>
                                      {/* <!-- end item --> */}
						              <div className="item">
						              	<div className="item-team">
							                  <div className="portrait-member">
							                  	<img src="http://placehold.it/740x740/ccc.jpg" className="img-responsive" alt="Image"/>
							                  </div>
							                  <div className="member-info text-center hvr-float-shadow">
							                  	<h5 className="text-cap">Janis Joblin</h5>
							                  	<p className="member-job">Creative Director</p>
							                  	<div className="social-member">
							                  		<a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							                  		<a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
							                  	</div>
							                  </div>
							            </div>
						              </div>
                                      {/* <!-- end item --> */}
				          		   </div>
						    </div>
						</div>
					</div>
				</section>
				{/* <!-- End Section Owl Our Team --> */}

				<section>
					<div className="overlay-arc overlay-3">
	                	<div className="layer-1 text-center">
	                		<div className="box-content-overlay-3">
	                			<h2>We are creative interior design, architecture and<br/> decor your space</h2>
	                			<a href="#" className="ot-btn btn-sub-color btn-long text-cap">Work with us</a>
	                		</div>
	                	</div>
	            	</div>
				</section>
				{/* <!-- End Section Overlay --> */}
				<section className="padding padding-bottom-0">
					<div className="container">
						<div className="row">
						<h2 className="title text-cap">What Our Client Says</h2>
						<div className="divider divider-1">
							<svg className="svg-triangle-icon-container">
							  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
							</svg>
						</div>
						{/* <!-- End Title --> */}
						<div className="testimonial-warp testimonial-2-col testimonial-2-col-about">
				              <div className="customNavigation">
				                <a className="btn prev-testimonials-2-columns"><i className="fa fa-angle-left"></i></a>
				                <a className="btn next-testimonials-2-columns"><i className="fa fa-angle-right"></i></a>
				              </div>  
				              <div id="owl-testimonials-2-columns" className="owl-carousel owl-theme clearfix">
					              	<div className="item ">
						              	<div className="item-testimonials  item-testimonials-about text-left">
						                  <p className="quote-icon">“</p>
						                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
						                  <div className="avatar-testimonials">
						                    <img src="http://placehold.it/262x262/ccc.jpg" className="img-responsive" alt="Image"/>
						                  </div>
						                  <h4 className="name-testimonials text-cap">Linda Campbell</h4>
						                  <span className="job-testimonials">CEO Finanace Theme Group</span>
						                </div>
						              	<div className="item-testimonials  item-testimonials-about text-left">
						                  <p className="quote-icon">“</p>
						                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
						                  <div className="avatar-testimonials">
						                    <img src="http://placehold.it/256x256/ccc.jpg" className="img-responsive" alt="Image"/>
						                  </div>
						                  <h4 className="name-testimonials text-cap">John Walker</h4>
						                  <span className="job-testimonials">Photographer</span>
						                </div>
				              		</div>
                                    {/* <!-- end item --> */}
					              	<div className="item ">
						              	<div className="item-testimonials item-testimonials-about text-left">
						                  <p className="quote-icon">“</p>
						                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
						                  <div className="avatar-testimonials">
						                    <img src="http://placehold.it/225x225/ccc.jpg" className="img-responsive" alt="Image"/>
						                  </div>
						                  <h4 className="name-testimonials text-cap">Cheryl Cruz</h4>
						                  <span className="job-testimonials">Marketing Manager</span>
						                </div>
						              	<div className="item-testimonials item-testimonials-about text-left">
						                  <p className="quote-icon">“</p>
						                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
						                  <div className="avatar-testimonials">
						                    <img src="http://placehold.it/240x240/ccc.jpg" className="img-responsive" alt="Image"/>
						                  </div>
						                  <h4 className="name-testimonials text-cap">James Smith</h4>
						                  <span className="job-testimonials">Senior Finance Manager</span>
						                </div>
					              	</div>
                                    {/* <!-- end item --> */}
					              	<div className="item ">
						              	<div className="item-testimonials  item-testimonials-about text-left">
						                  <p className="quote-icon">“</p>
						                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
						                  <div className="avatar-testimonials">
						                    <img src="http://placehold.it/50x50/ccc.jpg" className="img-responsive" alt="Image"/>
						                  </div>
						                  <h4 className="name-testimonials text-cap">Maria Garcia</h4>
						                  <span className="job-testimonials">Finance Director Theme Group</span>
						                </div>
						              	<div className="item-testimonials  item-testimonials-about text-left">
						                  <p className="quote-icon">“</p>
						                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
						                  <div className="avatar-testimonials">
						                    <img src="http://placehold.it/225x225/ccc.jpg" className="img-responsive" alt="Image"/>
						                  </div>
						                  <h4 className="name-testimonials text-cap">Robert Johnson</h4>
						                  <span className="job-testimonials">Finance Assistant - PR Agency</span>
						                </div>
					              	</div>
                                    {/* <!-- end item --> */}
					              	
				              </div>
			          		</div>
						</div>
					</div>
				</section>
				{/* <!-- End Section Owl Testimonials --> */}
				<footer className="footer-v1">
					<div className="footer-left">
						<a href="index.html">
							<img src="http://placehold.it/119x29/ccc.jpg " className="img-responsive" alt="Image"/>
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
			</div>
	

	     
		// <a id="to-the-top"><i className="fa fa-angle-up"></i></a> 
		// {/* <!-- Back To Top --> */}






        );
        }
}

export default About;