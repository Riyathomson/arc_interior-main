import React from 'react';
import Footer from './footer';
import Header from './header';

class Projects extends React.Component{
    render(){
        return(
            <div>
               
               <Header/>
<br></br>
<br></br>

<section>
				<div className="sub-header sub-header-1 sub-header-portfolio-grid-1 fake-position">
					<div className="sub-header-content">
						<h2 className="text-cap white-text">Portfolio Grid</h2>
						<ol className="breadcrumb breadcrumb-arc text-cap">
							<li>
								<a href="#">Home</a>
							</li>
							<li className="active">Portfolio Grid</li>
						</ol>
					</div>
				</div>
			</section>
<section className="padding bg-grey padding-bottom-0">
                <div className="lastest-project-warp portfolio-grid-v2-4-col-warp clearfix">
                  	<div className="projectFilter project-terms line-effect-2">
	                                <a href="#" data-filter="*" className="current text-cap"><h4>All Projects</h4></a>
	                                <a href="#" data-filter=".Residential" className="text-cap"><h4>Residential</h4></a>
	                                <a href="#" data-filter=".Ecommercial" className="text-cap"><h4>Ecommercial</h4></a>
	                                <a href="#" data-filter=".Office" className="text-cap"><h4>Office</h4></a>
	                                <a href="#" data-filter=".Hospital" className="text-cap"><h4>Hospital</h4></a>
                  	</div> 
                    {/* <!-- End Project Fillter --> */}
                    <div className="clearfix projectContainer portfolio-grid-v2-4-col-container">
             
                               <div className="element-item  Residential">
	                                
	                                  <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/1.jpg" className="img-responsive" alt="Image"/></a>
	                               <div className="project-info">
	                                  	<a href="portfolioDetail.html"><h4 className="title-project text-cap text-cap">Dream House</h4></a>
	                                    <a href="portfolioDetail.html" className="cateProject">Residential</a>
	                                </div>
                              </div>
                           
                              <div className="element-item Residential ">
	                                
	                                   <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/2.jpg" className="img-responsive" alt="Image"/></a>
	                
	                             	<div className="project-info">
	                                   <a href="portfolioDetail.html"><h4 className="title-project text-cap">Wood Wall City</h4></a>
	                                    <a href="portfolioDetail.html" className="cateProject">Ecommercial</a>
	                              </div>
                              </div>    
                           
                              <div className="element-item Ecommercial">
	                                
	                                   <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/3.jpg" className="img-responsive" alt="Image"/></a>
	                                
	                                  <div className="project-info">
	                                   <a href="portfolioDetail.html"><h4 className="title-project text-cap">Bathroom furniture</h4></a>
	                                  <a href="portfolioDetail.html" className="cateProject">Residential</a>
	                              	</div>
                        	  </div>
                               
                              <div className="element-item Ecommercial ">
	                                
	                                  <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/4.jpg" className="img-responsive" alt="Image"/></a>
	                                
	                                  
	                                 <div className="project-info">
	                                  <a href="portfolioDetail.html"><h4 className="title-project text-cap">Living Room Decor</h4></a>
	                                      <a href="portfolioDetail.html" className="cateProject">Resident</a>
	                                </div>
                              </div>
                           
                              <div className="element-item Office">
	                                
	                                 <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/5.jpg" className="img-responsive" alt="Image"/></a>
	                                
	                                 <div className="project-info">
	                                 <a href="portfolioDetail.html"><h4 className="title-project text-cap">open Space House</h4></a>
	                                      <a href="portfolioDetail.html" className="cateProject">Residential</a>
	                                </div>
                              </div>
                           
                              <div className="element-item Office">
	                                
	                                  <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/6.jpg" className="img-responsive" alt="Image"/></a>
	                                
	                                  <div className="project-info">
	                                  <a href="portfolioDetail.html"><h4 className="title-project text-cap">Sky Hotel</h4></a>
	                                      <a href="portfolioDetail.html" className="cateProject">Ecommercial</a>
	                                </div>
	                                  
                              </div>
                           
                              <div className="element-item Hospital ">
	                                
	                                   <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/7.jpg" className="img-responsive" alt="Image"/></a>
	                                
	                                   <div className="project-info">
	                                   <a href="portfolioDetail.html"><h4 className="title-project text-cap">Ogrange Corporate</h4></a>
	                                      <a href="portfolioDetail.html" className="cateProject">Office</a>
	                                </div>
	                                    
                              </div>    
                               
                              <div className="element-item Hospital">
	                                
	                                  <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/8.jpg" className="img-responsive" alt="Image"/></a>
	                                <div className="project-info">
	                                 <a href="portfolioDetail.html"><h4 className="title-project text-cap">Ocean view Building</h4></a>
	                                      <a href="portfolioDetail.html" className="cateProject">Residential</a>
	                                </div>
                              </div>

                              <div className="element-item  Residential">
	                                
	                                  <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/9.jpg" className="img-responsive" alt="Image"/></a>
	                                <div className="project-info">
	                                  	<a href="portfolioDetail.html"><h4 className="title-project text-cap text-cap">Modern Design</h4></a>
	                                    <a href="portfolioDetail.html" className="cateProject">Resident</a>
	                                </div>
                              </div>
                           
                              <div className="element-item Residential ">
	                                
	                                   <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/10.jpg" className="img-responsive" alt="Image"/></a>
	                
	                             	<div className="project-info">
	                                   <a href="portfolioDetail.html"><h4 className="title-project text-cap">Dream house</h4></a>
	                                    <a href="portfolioDetail.html" className="cateProject">Residential</a>
	                              </div>
                              </div>    
                           
                              <div className="element-item Ecommercial">
	                                
	                                   <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/11.jpg" className="img-responsive" alt="Image"/></a>
	                                
	                                   <div className="project-info">
	                                   <a href="portfolioDetail.html"><h4 className="title-project text-cap">Living Room Art</h4></a>
	                                  <a href="portfolioDetail.html" className="cateProject">Residential</a>
	                              	</div>
                        	  </div>
                               
                              <div className="element-item Ecommercial ">
	                                
	                                  <a className="portfolio-img-demo" href="portfolioDetail_1.html"><img src="assets/images/Project/12.jpg" className="img-responsive" alt="Image"/></a>
	                                
	                                  <div className="project-info">
	                                  <a href="portfolioDetail.html"><h4 className="title-project text-cap">Bedroom Design Awward</h4></a>
	                                      <a href="portfolioDetail.html" className="cateProject">Residential</a>
	                                </div>
                              </div>
                    </div> 
                     {/* <!-- End project Container --> */}
    			</div>
                 {/* <!-- End  --> */}
    			<div className="clearfix mgt60"></div>
            	<div className="overlay-arc">
                    		<div className="layer-1">
                    			<a href="#" className="ot-btn btn-border btn-border-dark btn-long text-cap">Get a Quote</a>
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

export default Projects;