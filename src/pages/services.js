import React from 'react';
import Footer from './footer';
import Header from './header';

class Services extends React.Component{
    render(){
        return(
            <div>
               
               <Header/>
<br></br>
<br></br>

<section>
				<div className="sub-header sub-header-1 sub-header-our-services fake-position">
					<div className="sub-header-content">
						<h2 className="text-cap white-text">Portfolio Grid</h2>
						<ol className="breadcrumb breadcrumb-arc text-cap">
							<li>
								<a href="#">Home</a>
							</li>
							<li className="active">Our Services</li>
						</ol>
					</div>
				</div>
			</section>
<section className="padding padding-bot-30">
				<div className="container">
					<div className="row">
							<div className="col-md-6">
								<div className="block-img-full service-item">
									<a className="img-block" href="#"><img src="assets/images/Services/1.jpg" className="img-responsive" alt="Image"/></a>
									<div className="text-box">
										<h4 className="text-cap"><mark>Residential</mark> design</h4>
										<p>
											Aliquam malesuada sapien sit amet augue interdum bibendum. Nulla tempor felis ipsum, at bibendum est pellentesque in. Nam ante neque, ornare vel sem nec, faucibus iaculis lacus. 
										</p>
										<a className="text-cap view-more" href="services_detail_1.html">View service</a>
									</div>
									
								</div>
							</div>
							<div className="col-md-6">
								<div className="block-img-full service-item">
									<a className="img-block" href="#"><img src="assets/images/Services/2.jpg" className="img-responsive" alt="Image"/></a>
									<div className="text-box">
										<h4 className="text-cap"><mark>Ecommercial</mark> design</h4>
										<p>
											Vestibulum sagittis vehicula mauris in luctus. Aliquam in dictum nibh. Ut accumsan, massa sit amet venenatis imperdiet, nisi leo semper ipsum, quis tempus massa lectus sit amet dolor. Duis lacinia mi metus
										</p>
										<a className="text-cap view-more" href="services_detail_1.html">View service</a>
									</div>
								</div>
							</div>
							<div className="col-md-6">
									<div className="block-img-full service-item">
										<a className="img-block" href="#"><img src="assets/images/Services/3.jpg" className="img-responsive" alt="Image"/></a>
										<div className="text-box">
											<h4 className="text-cap"><mark>Office</mark> design</h4>
											<p>
												Aliquam malesuada sapien sit amet augue interdum bibendum. Nulla tempor felis ipsum, at bibendum est pellentesque in. Nam ante neque, ornare vel sem nec, faucibus iaculis lacus. 
											</p>
											<a className="text-cap view-more" href="services_detail_1.html">View service</a>
										</div>
										
									</div>
							</div>
							<div className="col-md-6">
									<div className="block-img-full service-item">
										<a className="img-block" href="#"><img src="assets/images/Services/4.jpg" className="img-responsive" alt="Image"/></a>
										<div className="text-box">
											<h4 className="text-cap"><mark>Hospital</mark> design</h4>
											<p>
												Vestibulum sagittis vehicula mauris in luctus. Aliquam in dictum nibh. Ut accumsan, massa sit amet venenatis imperdiet, nisi leo semper ipsum, quis tempus massa lectus sit amet dolor. Duis lacinia mi metus
											</p>
											<a className="text-cap view-more" href="services_detail_1.html">View service</a>
										</div>
										
									</div>
							</div>
					</div>
				</div>
			</section>
			{/* <!-- End Portfolio Detail 1 --> */}
			<section>
				<div className="overlay-arc overlay-3">
                	<div className="layer-1 text-center">
                		<div className="box-content-overlay-3">
                			<h2 className=" wow fadeInDown" data-wow-delay=".15s">We are creative interior design, architecture and<br/> decor your space</h2>
                			<a href="#" className="ot-btn btn-dark-color btn-long text-cap wow fadeInUp2" data-wow-delay=".25s">Work with us</a>
                		</div>
                	</div>
            	</div>
			</section>
			{/* <!-- End Section Overlay --> */}
			<section className="padding padding-bot-30">
				<div className="container">
					<div className="row">
						<h2 className="title text-cap">How This Would Help You</h2>
						<div className="divider divider-1">
							<svg className="svg-triangle-icon-container">
							  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
							</svg>
						</div>
						{/* <!-- End Title --> */}
						<div className="left-icon-container">
							<div className="col-md-6">
								<article className="media-style left-icon-item">
					                  <div className="media">
					                    <div className="media-left">
					                      <i className="fa fa-diamond" aria-hidden="true"></i>
					                    </div>
					                    <div className="media-body">
					                      <h4 className="">Modern Plans</h4>
					                      <p>
					                       Nulla et ligula dictum, commodo felis eu, euismod dui. Ut mollis lorem ante, eu tincidunt elit sagittis ut. 
					                      </p>
					                    </div>
					                  </div>
			              		</article>
							</div>
							<div className="col-md-6">
								<article className="media-style left-icon-item">
					                  <div className="media">
					                    <div className="media-left">
					                      <i className="fa fa-clock-o" aria-hidden="true"></i>
					                    </div>
					                    <div className="media-body">
					                      <h4 className="">Save Time</h4>
					                      <p>
					                        Nulla et ligula dictum, commodo felis eu, euismod dui. Ut mollis lorem ante, eu tincidunt elit sagittis ut. 
					                      </p>
					                    </div>
					                  </div>
			              		</article>
							</div>
							<div className="col-md-6">
								<article className="media-style left-icon-item">
					                  <div className="media">
					                    <div className="media-left">
					                      <i className="fa fa-usd" aria-hidden="true"></i>
					                    </div>
					                    <div className="media-body">
					                      <h4 className="">Save Money</h4>
					                      <p>
					                       Ut mollis lorem ante, eu tincidunt elit sagittis ut. Nunc pulvinar mi at hendrerit aliquam
					                      </p>
					                    </div>
					                  </div>
			              		</article>
							</div>
							<div className="col-md-6">
								<article className="media-style left-icon-item">
					                  <div className="media">
					                    <div className="media-left">
					                     	<i className="fa fa-coffee" aria-hidden="true"></i>
					                    </div>
					                    <div className="media-body">
					                      <h4 className="">Great Starting</h4>
					                      <p>
					                        Ut mollis lorem ante, eu tincidunt elit sagittis ut. Nunc pulvinar mi at hendrerit aliquam
					                      </p>
					                    </div>
					                  </div>
			              		</article>
							</div>
						</div>
					</div>
				</div>
				
			</section>
		

<br></br>
<br></br>

<Footer/>


</div>
        );
    }
}

export default Services;