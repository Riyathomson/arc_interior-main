import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from './header';
import Footer from './footer';



const anu = [
	{ url: "assets/images/Slider/1.jpg" },
	{ url: "assets/images/Slider/2.jpg" },
	{ url: "assets/images/Slider/3.jpg" },
  
  ];


  const responsive = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 3000 },
	  items: 5
	},
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 5
	},
	tablet: {
	  breakpoint: { max: 1024, min: 464 },
	  items: 2
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1
	}
  };

 
  const client = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 3000 },
	  items: 2
	},
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 2
	},
	tablet: {
	  breakpoint: { max: 1024, min: 464 },
	  items: 2
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1
	}
  };

  function Home(){
//   {
  
// 	function mobileNavToogle() {
// 	  document.querySelector('#navbar').classNameList.toggle('navbar-mobile')
// 	  document.querySelector('.mobile-nav-toggle').classNameList.toggle('bi-list')
// 	  document.querySelector('.mobile-nav-toggle').classNameList.toggle('bi-x')
	  
// 	}
        return(

         <div>

	 	
		<Header/>
        {/* <!-- End Mobile Menu --> */}

		



				
				<section>
				
				

					<div className="rev_slider_wrapper">			
					{/* <!-- START REVOLUTION SLIDER 5.0 auto mode --> */}

				
					<div id="slider-h1" className="rev_slider slider-home-1" data-version="5.0">
							
							{/* <!-- SLIDE  --> */}
							{/* <li data-transition="parallaxtoright" data-masterspeed="1000" > */}
						<SimpleImageSlider 
    
	width={"100%"}
	height={900}
	loop={true}
	autoPlay={true}
	images={anu}
	showBullets={true}
	showNavs={true}
  /> 
								{/* <!-- MAIN IMAGE --> */}
								{/* <img src="http://placehold.it/1920x880/ccc.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10"/>							 */}

								{/* <!-- LAYER NR. 1 --> */}
								<div className="tp-caption heading-2 white-text" 							
									 data-x="center" 
									 data-y="center"  data-voffset="-80" 									 
							  		 data-transform_in="y:-80px;opacity:0;s:800;e:easeInOutCubic;" 
			 						 data-transform_out="y:-80px;opacity:0;s:300;" 
								
									 data-start="1000" 				 							
									>bedroom interior
								</div>
								{/* <!-- LAYER NR. 2 --> */}
								<div className="tp-caption heading-1 white-text text-cap " 						
									 data-x="center" 
									 data-y="center" 					
									 data-transform_in="y:80px;opacity:0;s:800;e:easeInOutCubic;" 
				 					 data-transform_out="y:80px;opacity:0;s:300;" 
									 data-start="1400" 
									>Design Awards
								</div>
								
								{/* <!-- LAYER NR. 3 --> */}
								<div className="tp-caption btn-1" 							
									 data-x="center"  data-hoffset="-85"
									 data-y="center"  data-voffset="100" 
								  	 data-transform_in="y:100px;opacity:0;s:800;e:easeInOutCubic;" 
				 					data-transform_out="y:200px;opacity:0;s:300;" 
									 data-start="1600" 
									>	
									<a href="portfolioGrid_1.html" className="ot-btn btn-main-color text-cap ">Our Projects</a>  
	              					
								</div>
								{/* <!-- LAYER NR. 4 --> */}
								<div className="tp-caption btn-2" 							
									 data-x="center"  data-hoffset="85"
									 data-y="center"  data-voffset="100" 
									 data-transform_in="y:100px;opacity:0;s:800;e:easeInOutCubic;" 
				 					 data-transform_out="y:200px;opacity:0;s:300;" 

									 data-start="1600" 
									>	
	              					<a href="contact.html" className="ot-btn btn-sub-color text-cap  ">Get a Quote</a> 
								</div>
								
							
							{/* <li data-transition="parallaxtoright" data-masterspeed="1000" > */}
								
								{/* <!-- MAIN IMAGE --> */}
								{/* <img src="http://placehold.it/1920x880/ccc.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10"/>							 */}

								{/* <!-- LAYER NR. 1 --> */}
								<div className="tp-caption heading-2 white-text" 							
									 data-x="center" 
									 data-y="center"  data-voffset="-80" 									 
							  		 data-transform_in="y:-80px;opacity:0;s:800;e:easeInOutCubic;" 
			 						 data-transform_out="y:-80px;opacity:0;s:300;" 
								
									 data-start="1000" 				 							
									>bedroom interior
								</div>
								{/* <!-- LAYER NR. 2 --> */}
								<div className="tp-caption heading-1 white-text text-cap " 						
									 data-x="center" 
									 data-y="center" 					
									 data-transform_in="y:80px;opacity:0;s:800;e:easeInOutCubic;" 
				 					 data-transform_out="y:80px;opacity:0;s:300;" 
									 data-start="1400" 
									>Design Awards
								</div>
								
								{/* <!-- LAYER NR. 3 --> */}
								<div className="tp-caption btn-1" 							
									 data-x="center"  data-hoffset="-85"
									 data-y="center"  data-voffset="100" 
								  	 data-transform_in="y:100px;opacity:0;s:800;e:easeInOutCubic;" 
				 					data-transform_out="y:200px;opacity:0;s:300;" 
									 data-start="1600" 
									>	
									<a href="portfolioGrid_1.html" className="ot-btn btn-main-color text-cap ">Our Projects</a>  
	              					
								</div>
								{/* <!-- LAYER NR. 4 --> */}
								<div className="tp-caption btn-2" 							
									 data-x="center"  data-hoffset="85"
									 data-y="center"  data-voffset="100" 
									 data-transform_in="y:100px;opacity:0;s:800;e:easeInOutCubic;" 
				 					 data-transform_out="y:200px;opacity:0;s:300;" 

									 data-start="1600" 
									>	
	              					<a href="contact.html" className="ot-btn btn-sub-color text-cap  ">Get a Quote</a> 
								</div>
								
							
							{/* <!-- SLIDE  --> */}
							{/* <li data-transition="parallaxtoright" data-masterspeed="1000" > */}
								
								{/* <!-- MAIN IMAGE --> */}
								{/* <img src="http://placehold.it/1920x880/ccc.jpg"  alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10"/>							 */}

								{/* <!-- LAYER NR. 1 --> */}
								<div className="tp-caption heading-2 white-text" 							
									 data-x="center" 
									 data-y="center"  data-voffset="-80" 									 
							  		 data-transform_in="y:-80px;opacity:0;s:800;e:easeInOutCubic;" 
			 						 data-transform_out="y:-80px;opacity:0;s:300;" 
								
									 data-start="1000" 				 							
									>bedroom interior
								</div>
								{/* <!-- LAYER NR. 2 --> */}
								<div className="tp-caption heading-1 white-text text-cap " 						
									 data-x="center" 
									 data-y="center" 					
									 data-transform_in="y:80px;opacity:0;s:800;e:easeInOutCubic;" 
				 					 data-transform_out="y:80px;opacity:0;s:300;" 
									 data-start="1400" 
									>Design Awards
								</div>
								
								{/* <!-- LAYER NR. 3 --> */}
								<div className="tp-caption btn-1" 							
									 data-x="center"  data-hoffset="-85"
									 data-y="center"  data-voffset="100" 
								  	 data-transform_in="y:100px;opacity:0;s:800;e:easeInOutCubic;" 
				 					data-transform_out="y:200px;opacity:0;s:300;" 
									 data-start="1600" 
									>	
									<a href="portfolioGrid_1.html" className="ot-btn btn-main-color text-cap ">Our Projects</a>  
	              					
								</div>
								{/* <!-- LAYER NR. 4 --> */}
								<div className="tp-caption btn-2" 							
									 data-x="center"  data-hoffset="85"
									 data-y="center"  data-voffset="100" 
									 data-transform_in="y:100px;opacity:0;s:800;e:easeInOutCubic;" 
				 					 data-transform_out="y:200px;opacity:0;s:300;" 

									 data-start="1600" 
									>	
	              					<a href="contact.html" className="ot-btn btn-sub-color text-cap  ">Get a Quote</a>  
								</div>
								
						
				</div>
						
						
					</div>
                    {/* <!-- END REVOLUTION SLIDER --> */}
					
                    {/* <!-- END REVOLUTION SLIDER WRAPPER -->	 */}
				</section>
				{/* <!-- End Section Slider --> */}
		
				<section className="padding">
					<div className="container">
					<div className="row">
						<div className="title-block">
							<h2 className="title text-cap" >What we do</h2>
							<div className="divider divider-1">
								<svg className="svg-triangle-icon-container">
								  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
								</svg>
							</div>
						</div>
						{/* <!-- End Title --> */}
						<div className="row">
							<div className="col-md-6">
								<div className="block-img-right">
									
									<div className="img-block"><img src="assets/images/Services/1.jpg" className="img-responsive" alt="Image"/></div>
									<div className="text-box">
										<h4 className="text-cap"><mark>Residential</mark> design</h4>
										<p>
											Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="block-img-left">
									<div className="img-block"><img src="assets/images/Services/2.jpg" className="img-responsive" alt="Image"/></div>
									<div className="text-box">
										<h4 className="text-cap"><mark>Ecommercial</mark> design</h4>
										<p>
											Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
										</p>
									</div>
									
								</div>
							</div>
							<div className="col-md-6">
								<div className="block-img-right mgb0">
									<div className="img-block"><img src="assets/images/Services/3.jpg" className="img-responsive" alt="Image"/></div>
									<div className="text-box">
										<h4 className="text-cap"><mark>Office</mark> design</h4>
										<p>
											Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
										</p>
									</div>
									
								</div>
							</div>
							<div className="col-md-6">
								<div className="block-img-left mgb0">
									<div className="img-block"><img src="assets/images/Services/4.jpg" className="img-responsive" alt="Image"/></div>
									<div className="text-box">
										<h4 className="text-cap"><mark>Hospital</mark> design</h4>
										<p>
											Quisque pulvinar libero dolor, quis bibendum eros euismod sit amet. Proin dapibus id diam at
										</p>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					</div>
				</section>
				{/* <!-- End Section What we do --> */}

				<section>
					<div className="promotion-box">
						<figure className="effect-layla">
							<img src="assets/images/Promotion/1.jpg" alt="img06"/>
							<figcaption>
								<h3 className="text-cap white-text">Green Design</h3>
								<p>Inspired by nature and created comfortable space for your life</p>
								<a href="servicesList.html" className="ot-btn btn-main-color text-cap">View Service</a>
							</figcaption>			
						</figure>
						<figure className="effect-layla">
							<img src="assets/images/Promotion/2.jpg" alt="img06"/>
							<figcaption>
								<h3 className="text-cap white-text">we love space</h3>
								<p>Inspired by nature and created comfortable space for your life</p>
								<a href="portfolioGrid_1.html" className="ot-btn btn-main-color text-cap">Our Project</a>
							</figcaption>			
						</figure>
						<figure className="effect-layla">
							<img src="assets/images/Promotion/3.jpg" alt="img06"/>
							<figcaption>
								<h3 className="text-cap white-text">Expert interior</h3>
								<p>Inspired by nature and created comfortable space for your life</p>
								<a href="shop_cart.html" className="ot-btn btn-main-color text-cap">View Shop</a>
							</figcaption>			
						</figure>
					</div>
				</section>
				{/* <!-- End Section Promotion --> */}

				<section className="padding clearfix fixbug-inline-block">
					<div className="container">
					<div className="row">
						<div className="title-block">
							<div className="title-block">
								<h2 className="title text-cap">Why Choose Us ?</h2>
								<div className="divider divider-1">
									<svg className="svg-triangle-icon-container">
									  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
									</svg>
								</div>
							</div>
						</div>
						{/* <!-- End Title --> */}
						<div className="chooseus-container text-center">
								<div className="chooseus-item">
									<h4 className="text-cap">Creative</h4>
					              	<div className="chooseus-canvas-item">
						                   <svg className="svg-hexagon">
											  	<polygon className="hexagon" points="285 100,285 250,155 325,25 250,25 100,155 25"></polygon>
											</svg>
						                    {/* <!-- End Hexagon --> */}
						                    <svg className="svg-triangle-dotted"  >
											  <polygon className="triangle-div" points="2 220,254 220,128 0"></polygon>
											</svg>
											{/* <!-- End Triangle Dotted --> */}
											<div className="triangle-img-warp tri">
												<img src="assets/images/Whychooseus/1.jpg" className="img-responsive" alt="Image"/>
											</div>
					            	</div>
					            </div>	

					            {/* <!-- End -->				 */}

					            <div className="chooseus-item">
									<a href="#"><h4 className="text-cap">Know - How</h4></a>
					              	<div className="chooseus-canvas-item">
						                   <svg className="svg-hexagon">
											  	<polygon className="hexagon" points="285 100,285 250,155 325,25 250,25 100,155 25"></polygon>
											</svg>
						                    {/* <!-- End Hexagon --> */}
						                    <svg className="svg-triangle-dotted svg-tri-2"  >
											  <polygon className="triangle-div" points="2 220,254 220,128 0"></polygon>
											</svg>
											{/* <!-- End Triangle Dotted --> */}
											<div className="triangle-img-warp tri2">
												<img src="assets/images/Whychooseus/2.jpg" className="img-responsive" alt="Image"/>
											</div>
					            	</div>
					            </div>

					            {/* <!-- End --> */}

				             	<div className="chooseus-item">
									<a href="#"><h4 className="text-cap">Devoted</h4></a>
					              	<div className="chooseus-canvas-item">
						                   <svg className="svg-hexagon">
											  	<polygon className="hexagon" points="285 100,285 250,155 325,25 250,25 100,155 25"></polygon>
											</svg>
						                    {/* <!-- End Hexagon --> */}
						                    <svg className="svg-triangle-dotted svg-tri-3"  >
											  <polygon className="triangle-div" points="2 220,254 220,128 0"></polygon>
											</svg>
											{/* <!-- End Triangle Dotted --> */}
											<div className="triangle-img-warp tri3">
												<img src="assets/images/Whychooseus/3.jpg" className="img-responsive" alt="Image"/>
											</div>
					            	</div>
					            </div>

					             {/* <!-- End --> */}

				             	<div className="chooseus-item">
									<a href="#"><h4 className="text-cap">Caring</h4></a>
					              	<div className="chooseus-canvas-item">
						                   <svg className="svg-hexagon">
											  	<polygon className="hexagon" points="285 100,285 250,155 325,25 250,25 100,155 25"></polygon>
											</svg>
						                    {/* <!-- End Hexagon --> */}
						                    <svg className="svg-triangle-dotted svg-tri-4"  >
											  <polygon className="triangle-div" points="2 220,254 220,128 0"></polygon>
											</svg>
											{/* <!-- End Triangle Dotted --> */}
											<div className="triangle-img-warp tri4">
												<img src="assets/images/Whychooseus/4.jpg" className="img-responsive" alt="Image"/>
											</div>
					            	</div>
					            </div>
						</div>						
					</div>
					</div>
				</section>
				{/* <!-- End Section Why Choose Us --> */}

				<section className="padding bg-grey padding-bottom-0">
					<div className="title-block">
						<h2 className="title text-cap">Lastest Projects</h2>
						<div className="divider divider-1">
							<svg className="svg-triangle-icon-container">
							  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
							</svg>
						</div>
					</div>
						{/* <!-- End Title --> */}
	                      <div className="lastest-project-warp clearfix">
	                          	<div className="projectFilter project-terms line-effect-2">
		                                <a href="#" data-filter="*" className="current text-cap"><h4>All Projects</h4></a>
		                                <a href="#" data-filter=".Residential" className="text-cap"><h4>Residential</h4></a>
		                                <a href="#" data-filter=".Ecommercial" className="text-cap"><h4>Ecommercial</h4></a>
		                                <a href="#" data-filter=".Office" className="text-cap"><h4>Office</h4></a>
		                                <a href="#" data-filter=".Hospital" className="text-cap"><h4>Hospital</h4></a>
	                          	</div>
                                 {/* <!-- End Project Fillter --> */}

	                            <div className="clearfix projectContainer">
	             
	                              <div className="element-item  Residential">
		                                
		                                  <img src="assets/images/Project/1.jpg" className="img-responsive" alt="Image"/>
		                                <div className="project-info">
		                                  	<a href="portfolioDetail.html"><h4 className="title-project text-cap text-cap">Dream House</h4></a>
		                                    <a href="portfolioDetail.html" className="cateProject">Residential</a>
		                                </div>
	                              </div>
	                           
	                              <div className="element-item Residential ">
		                                
	                                   	<img src="assets/images/Project/2.jpg" className="img-responsive" alt="Image"/>
		                
		                             	<div className="project-info">
		                                   <a href="portfolioDetail.html"><h4 className="title-project text-cap">Wood Wall City</h4></a>
		                                    <a href="portfolioDetail.html" className="cateProject">Ecommercial</a>
		                              </div>
	                              </div>    
	                           
	                              <div className="element-item Ecommercial">
		                                <a className="img-contain-isotope" href="portfolioDetail.html">
		                                   <img src="assets/images/Project/3.jpg" className="img-responsive" alt="Image"/>
		                                   </a>
		                                   <div className="project-info">
		                                   <a href="portfolioDetail.html"><h4 className="title-project text-cap">Bathroom furniture</h4></a>
		                                  <a href="portfolioDetail.html" className="cateProject">Residential</a>
		                              	</div>
	                        	  </div>
	                               
	                              <div className="element-item Ecommercial ">
		                                <a className="img-contain-isotope" href="portfolioDetail.html">
		                                  <img src="assets/images/Project/4.jpg" className="img-responsive" alt="Image"/>
		                                  </a>
		                                  <div className="project-info">
		                                  <a href="portfolioDetail.html"><h4 className="title-project text-cap">Living room decor</h4></a>
		                                      <a href="portfolioDetail.html" className="cateProject">Residential</a>
		                                </div>
	                              </div>
	                           
	                              <div className="element-item Office">
		                                <a className="img-contain-isotope" href="portfolioDetail.html">
		                                 <img src="assets/images/Project/5.jpg" className="img-responsive" alt="Image"/>
		                                 </a>
		                                 <div className="project-info">
		                                 <a href="portfolioDetail.html"><h4 className="title-project text-cap">open Space House</h4></a>
		                                      <a href="portfolioDetail.html" className="cateProject">Residential</a>
		                                </div>
	                              </div>
	                           
	                              <div className="element-item Office">
		                                <a className="img-contain-isotope" href="portfolioDetail.html">
		                                  <img src="assets/images/Project/6.jpg" className="img-responsive" alt="Image"/>
		                                  </a>
		                                  <div className="project-info">
		                                  <a href="portfolioDetail.html"><h4 className="title-project text-cap">Sky Hotel</h4></a>
		                                      <a href="portfolioDetail.html" className="cateProject">Ecommercial</a>
		                                </div>
	                              </div>
	                           
	                              <div className="element-item Hospital ">
		                                <a className="img-contain-isotope" href="portfolioDetail.html">
		                                   <img src="assets/images/Project/7.jpg" className="img-responsive" alt="Image"/>
		                                   </a>
		                                   <div className="project-info">
		                                   <a href="portfolioDetail.html"><h4 className="title-project text-cap">Ogrange Corporate</h4></a>
		                                      <a href="portfolioDetail.html" className="cateProject">Office</a>
		                                </div>
	                              </div>    
	                               
	                              <div className="element-item Hospital">
		                                
		                                  <img src="assets/images/Project/8.jpg" className="img-responsive" alt="Image"/>
		                                <div className="project-info">
		                                 <a href="portfolioDetail.html"><h4 className="title-project text-cap">Ocean view Building</h4></a>
		                                      <a href="portfolioDetail.html" className="cateProject">Residential</a>
		                                </div>
	                              </div>
	                            </div>  
                                {/* <!-- End project Container --> */}
	                      </div>
                           {/* <!-- End  --> */}
	                    	<div className="overlay-arc">
	                    		<div className="layer-1">
	                    			<a href="portfolioGrid_1.html" className="ot-btn btn-dark-color text-cap">View all project</a>
	                    		</div>
	                    	</div>
				</section>
				{/* <!-- End Section Isotop Lastest Project --> */}

				<section className="padding ">
					<div className="container">
					<div className="row">
						<div className="title-block">
							<h2 className="title text-cap">Lastest From News</h2>
							<div className="divider divider-1">
								<svg className="svg-triangle-icon-container">
								  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
								</svg>
							</div>
						</div>
						{/* <!-- End Title --> */}
						<div className="lastest-blog-container">
							<div className="col-md-6">
								<article className="lastest-blog-item">
									<figure className="latest-blog-post-img effect-zoe">
										<a href="/blogdetail">
											<img src="assets/images/Blog/bs-1.jpg" className="img-responsive" alt="Image"/>
										</a>
										<div className="latest-blog-post-date text-cap">
											<span className="day">21</span>
			                                <span className="month">May</span>
			                            </div>
			                        </figure>
			                        <div className="latest-blog-post-description">
			                            <a href="/blogdetail"><h3>2016 Interior Design Trends</h3></a>
			                            <p>Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar eu rhoncus ligula. Ut leo mauris, molestie imperdiet consequat in, varius ac sapien.</p>
			                            
			                            <a href="/blogdetail" className="ot-btn btn-main-color text-cap mgb0">
			                            	Continue Reading...
			                            </a>
			                        </div>
								</article>
							</div>
							<div className="col-md-6  ">
								<article className="lastest-blog-item">
									<figure className="latest-blog-post-img effect-zoe">
										<a href="/blogdetail">
											<img src="assets/images/Blog/bs-2.jpg" className="img-responsive" alt="Image"/>
										</a>
										<div className="latest-blog-post-date text-cap">
											<span className="day">18</span>
			                                <span className="month">May</span>
			                            </div>
			                            
			                        </figure>
			                        <div className="latest-blog-post-description">
			                            <a href="/blogdetail"><h3>15 Notable Products at ARC Interior Design Contest</h3></a>
			                            <p>Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar eu rhoncus ligula. Ut leo mauris, molestie imperdiet consequat in, varius ac sapien.</p>
			                            
			                            <a href="/blogdetail" className="ot-btn btn-main-color text-cap mgb0">
			                            	Continue Reading...
			                            </a>
			                        </div>
								</article>
							</div>
						</div>
					</div>
					</div>
				</section>
				{/* <!-- End Section Lastest Blog --> */}

				<section className="padding bg-grey">
					<div className="container">
					<div className="row">
						<div className="title-block">
							<h2 className="title text-cap">Our Partners</h2>
							<div className="divider divider-1">
								<svg className="svg-triangle-icon-container">
								  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
								</svg>
							</div>
						</div>
						{/* <!-- End Title --> */}
								{/* <div className="owl-partner-warp" > */}

								
				
	                    	{/* <div className="customNavigation">
				                <a className="btn prev-partners"><i className="fa fa-angle-left"></i></a>
				                <a className="btn next-partners"><i className="fa fa-angle-right"></i></a>
	                    	</div> */}
                            {/* <!-- End owl button --> */}
				
		                  	{/* <div id="owl-partners" className="owl-carousel owl-theme owl-partners clearfix"> */}

					              

							<Carousel responsive={responsive}  autoPlay={true} loop={true}  interval={3000} >
  <div>  <img src="assets/images/Partner/1.png" /></div>
  <div>  <img src="assets/images/Partner/2.png" /></div>
  <div>  <img src="assets/images/Partner/3.png" /></div>
  <div>  <img src="assets/images/Partner/4.png" /></div>
  <div>  <img src="assets/images/Partner/5.png" /></div>
</Carousel>;
									{/* <SimpleImageSlider 
    
	width={"50%"}
	height={400}
	loop={false}
	autoPlay={true}
	images={partners}
	showBullets={true}
	showNavs={true}
  />  */}
					                    {/* <a href="#">
					                      <img src="assets/images/Partner/1.png" className="img-responsive" alt="Image"/>
					                    </a> */}
					          
					                {/* <div className="item">
					                    <a href="#">
					                      <img src="assets/images/Partner/2.png" className="img-responsive" alt="Image"/>
					                    </a>
					                </div> */}
					                 {/* <div className="item">
					                    <a href="#">
					                      <img src="assets/images/Partner/3.png" className="img-responsive" alt="Image"/>
					                    </a>
					                </div> */}
					                 {/* <div className="item">
					                    <a href="#">
					                      <img src="assets/images/Partner/4.png" className="img-responsive" alt="Image"/>
					                    </a>
					                </div>
					                 <div className="item">
					                    <a href="#">
					                      <img src="assets/images/Partner/5.png" className="img-responsive" alt="Image"/>
					                    </a>
					                </div>
					                <div className="item">
					                    <a href="#">
					                      <img src="http://placehold.it/96x95/ccc.jpg" className="img-responsive" alt="Image"/>
					                    </a>
					                </div>
					                <div className="item">
					                    <a href="#">
					                      <img src="http://placehold.it/163x94/ccc.jpg" className="img-responsive" alt="Image"/>
					                    </a>
					                </div> */}
					                 {/* <div className="item">
					                    <a href="#">
					                      <img src="http://placehold.it/125x104/ccc.jpg" className="img-responsive" alt="Image"/>
					                    </a>
					                </div>
					                 <div className="item">
					                    <a href="#">
					                      <img src="http://placehold.it/154x109/ccc.jpg" className="img-responsive" alt="Image"/>
					                    </a>
					                </div>
					                 <div className="item">
					                    <a href="#">
					                      <img src="http://placehold.it/144x94/ccc.jpg" className="img-responsive" alt="Image"/>
					                    </a>
					                </div>  */}
		              	 	{/* </div> */}
	  	              {/* </div> */}
                      {/* <!-- End row partners --> */}
					</div>
					</div>
				</section>
				{/* <!-- End Section Owl Partners --> */}

				<section className="padding bg-parallax section-dark-testimonials">
					<div className="container">
					<div className="row">
						<div className="title-block">
							<h2 className="title text-cap">What Our Client Says</h2>
							<div className="divider divider-2">
								<svg className="svg-triangle-icon-container">
								  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
								</svg>
							</div>
						</div>
						{/* <!-- End Title --> */}

						<div>
						<div className="testimonial-warp testimonial-2-col">
				              <div className="customNavigation">
				                <a className="btn prev-testimonials-2-columns"><i className="fa fa-angle-left"></i></a>
				                <a className="btn next-testimonials-2-columns"><i className="fa fa-angle-right"></i></a>
				              </div>  
							  <Carousel responsive={client}  autoPlay={false} loop={true}  interval={3000} >
  
  <div>  <img src="assets/images/Testimonials/2.jpg" /></div>
  <div>  <img src="assets/images/Testimonials/3.jpg" /></div>
  <div>  <img src="assets/images/Testimonials/4.jpg" /></div>
  <div>  <img src="assets/images/Testimonials/5.jpg" /></div>
  <div>  <img src="assets/images/Testimonials/6.jpg" /></div>
							  
				              <div id="owl-testimonials-2-columns" className="owl-carousel owl-theme clearfix">
							 

				              <div className="item item-testimonials text-left">
				                  <p className="quote-icon">“</p>
								  <Carousel responsive={client}  autoPlay={false} loop={true}  interval={3000} >
  <div>  <img src="assets/images/Testimonials/1.jpg" /></div></Carousel>
				                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
				                  {/* <div className="avatar-testimonials">
				                    <img src="http://placehold.it/262x262/ccc.jpg" className="img-responsive" alt="Image"/>
				                  </div> */}
				                  <h4 className="name-testimonials text-cap">Linda Campbell</h4>
				                  <span className="job-testimonials">CEO Finanace Theme Group</span>
				              </div>
                              {/* <!-- end item --> */}
				              <div className="item item-testimonials text-left">
				                  <p className="quote-icon">“</p>
				                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
				                  {/* <div className="avatar-testimonials">
				                    <img src="http://placehold.it/256x256/ccc.jpg" className="img-responsive" alt="Image"/>
				                  </div> */}
				                  <h4 className="name-testimonials text-cap">John Walker</h4>
				                  <span className="job-testimonials">Photographer</span>
				              </div>
                              {/* <!-- end item --> */}
				              <div className="item item-testimonials text-left">
				                  <p className="quote-icon">“</p>
				                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
				                  {/* <div className="avatar-testimonials">
				                    <img src="http://placehold.it/225x225/ccc.jpg" className="img-responsive" alt="Image"/>
				                  </div> */}
				                  <h4 className="name-testimonials text-cap">Cheryl Cruz</h4>
				                  <span className="job-testimonials">Marketing Manager</span>
				              </div>
                              {/* <!-- end item --> */}
				              <div className="item item-testimonials text-left">
				                  <p className="quote-icon">“</p>
				                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
				                  {/* <div className="avatar-testimonials">
				                    <img src="http://placehold.it/240x240/ccc.jpg" className="img-responsive" alt="Image"/>
				                  </div> */}
				                  <h4 className="name-testimonials text-cap">James Smith</h4>
				                  <span className="job-testimonials">Senior Finance Manager</span>
				              </div>
                              {/* <!-- end item --> */}
				              <div className="item item-testimonials text-left">
				                  <p className="quote-icon">“</p>
				                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
				                  {/* <div className="avatar-testimonials">
				                    <img src="http://placehold.it/50x50/ccc.jpg" className="img-responsive" alt="Image"/>
				                  </div> */}
				                  <h4 className="name-testimonials text-cap">Maria Garcia</h4>
				                  <span className="job-testimonials">Finance Director Theme Group</span>
				              </div>
                              {/* <!-- end item --> */}
				              <div className="item item-testimonials text-left">
				                  <p className="quote-icon">“</p>
				                  <p><i>Morbi auctor vel mauris facilisis lacinia. Aenean suscipit lorem leo, et hendrerit odio fermentum et. Donec ac dolor eros. Mauris arcu nunc, iaculis sit amet lacus iaculis, faucibus faucibus nunc. Vestibulum sit amet lacinia massa</i></p>
				                  {/* <div className="avatar-testimonials">
				                    <img src="http://placehold.it/225x225/ccc.jpg" className="img-responsive" alt="Image"/>
				                  </div> */}
				                  <h4 className="name-testimonials text-cap">Robert Johnson</h4>
				                  <span className="job-testimonials">Finance Assistant - PR Agency</span>
				              </div>
                              {/* <!-- end item --> */}
							  </div>
							  </Carousel>;
				              </div>
			          	</div>
					</div>  
					</div>
				</section>
				{/* <!-- End Section Owl Testimonials --> */}

				<section className="padding ">
					<div className="container">
					<div className="row">
						<div className="title-block">
							<h2 className="title text-cap">Don't forget to sign up!</h2>
							<div className="divider divider-1">
								<svg className="svg-triangle-icon-container">
								  <polygon className="svg-triangle-icon" points="6 11,12 0,0 0"></polygon>
								</svg>
							</div>
						</div>
						{/* <!-- End Title --> */}
						<div className="form-subcribe">

							<p className="text-center">Find out early about all upcoming promotions and new products releases with<br/> our newsletter.</p>
							<form  method="post">                        
		                        <input className="newsletter-email input-text" placeholder="email@example.com" type="email"/>
		                        <button className="ot-btn btn-main-color text-cap" type="submit">Subscribe</button>
		                    </form>
						</div>
					</div>
					</div>
				</section>
				{/* <!-- End Section subcribe --> */}

			
	   
		<a id="to-the-top"><i className="fa fa-angle-up"></i></a> 
		{/* <!-- Back To Top --> */}

<Footer/>
		</div>
      

 
        );
		}


export default Home;