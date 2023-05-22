import React from 'react';
import Header from './header';


class Contact extends React.Component{
    render(){
        return(
            <div>

<Header/>
<section>
					<div className="sub-header sub-header-1 sub-header-contact fake-position">
						<div className="sub-header-content">
							<h2 className="text-cap white-text">Contact Us</h2>
							<ol className="breadcrumb breadcrumb-arc text-cap">
								<li>
									<a href="index.html">Home</a>
								</li>
								<li className="active">Contact Us</li>
							</ol>
						</div>
					</div>
				</section>
				{/* <!-- End Section Sub Header --> */}
				{/* <!-- Section form contact --> */}
			    <section className="padding">
			    	<div className="container">
			    		<div className="row">
			    			<div className="contact-warp">
			    				<div className="col-md-6 ">
			    					<div className="left-contact">
			    						<h3 className="text-cap"> Send Us a Message</h3>
			          					<form className="form-inline form-contact-arc" name="contact" method="post" action="send_form_email.php">
			            					<div className="row">
			        							  <div className="form-group col-sm-12 ">
			        							    <input type="text" className="form-control" name="yourName" id="yourName" placeholder="Your Name"/>
			        							  </div>
			        							  <div className="form-group col-sm-12">
			        							    <input type="email" className="form-control" name="yourEmail" id="yourEmail" placeholder="Your Email"/>
			        							  </div>
			        							  <div className="form-group col-sm-12">
			        							    <input type="text" className="form-control" name="yourPhone" id="phoneNumber" placeholder="Phone Number" />
			        							  </div>
			      						    </div>
			      						    <div className="input-content">
			        						  	<div className="form-group form-textarea">
			        					  			<textarea id="textarea" className="form-control" name="comments" rows="6" placeholder="Your Messages" ></textarea>
			        						  	</div>
			        						  </div>
			                      			<button  className="ot-btn btn-main-color btn-long text-cap btn-submit" type="submit" >Send Mail</button>
			      					 	</form> 
                                        {/* <!-- End Form --> */}
			    					</div> 
                                    {/* <!-- End col --> */}
			    				</div>
			    				<div className="col-md-6 ">
			    					<div className="right-contact">
				    				<h3 className="text-cap">Contact Info</h3>
				    				<p>
				    					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque metus arcu, malesuada a est eget, maximus efficitur sapien. 
				    				</p>
				    				<ul className="address">
				    					<li><p><i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp; 8th floor, 379 Hudson St, New York, NY 10018</p></li>
				    					<li><p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp; (+1) 96 716 6879</p></li>
				    					<li><p><i className="fa fa-fax" aria-hidden="true"></i> &nbsp;(+1) 96 716 6879</p></li>
				    					<li><p><i className="fa fa-envelope-o" aria-hidden="true"></i>&nbsp;&nbsp; contact@arc.com</p></li>
				    					<li><p><i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;&nbsp; Mon-Fri 09:00 - 17:00</p></li>
				    				</ul>
				    				</div>
			    				</div> 
                                {/* <!-- End col --> */}
			    			</div>
			    		</div>
			    	</div>
			    </section>
			    {/* <!-- End Section --> */}
			   	{/* <!-- Section Google Map --> */}
			   	{/* <div className="no-padding ">
			   		<div id="map-canvas" className=""></div>
			   	</div>
			   	 */}

<section className="padding no-padding-bot">
		   		<div className="container">
		   			
		   				<div className="contact-warp">
		   					<h3 className="text-cap"> Find Us On Google</h3>
		   				</div>

		   			<div className="row">
		   				<div className="col-md-3">
		   					<div className="sidebar-left sidebar-control-map">
		   						<div id="controls"></div>
		   					</div>
				   		</div>
						<div className="col-md-9">
							<div id="gmap-menu" style={{width:"100%",height:"320px"}}></div>
						</div>
		   			</div>
		   		</div>
		   	</section>




			   	{/* <!-- End Section --> */}


				<footer className="footer-v1">
					<div className="footer-left">
						<a href="index.html">
							<img src="assets/images/Contact/cd-icon-location.png " className="img-responsive" alt="Image"/>
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

        );
    }
}

export default Contact;