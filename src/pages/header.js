import React from 'react';

function Header()
  {
  function mobileMenuClose(){
	document.querySelector("#mobile-menu").style.display="none";
  }
	function mobileNavToogle() {
		
	
				document.body.classList.add('mmPushBody');
				document.querySelector("#mobile-menu").style.display="block";
				document.querySelector("#mobile-menu").classList.add('mobile-menu-style');
        

	}
        return(
            <div>
               
               <div className="mobile-menu-first">
	        	<div id="mobile-menu" className="mobile-menu">
	        		<div className="header-mobile-menu">
	                  <a href="">TOLL FREE: 800 345 6889</a>
	                  	<div className="mm-toggle " onClick={mobileMenuClose}>
	                		<span aria-hidden="true" className="icon_close"></span>
	                	</div> 
	              	</div>
                     {/* <!-- Mobile Menu --> */}
	          		<div className="mCustomScrollbar light" data-mcs-theme="minimal-dark">
	              
	              <ul>
	                  		<li>
	                          <a href="/"><i className="icon-home"></i> Home</a>
	                          
	                  		</li>                
	                 
	                  		<li><a href="/projects"><span>Projects</span></a>
                              
                        	</li>
	                  		
	                  		<li><a href="/services"><span>Services</span></a>
	                            
	                        </li>
	                       	<li><a href="/about"><span>About </span></a></li>
	                        
	                        <li><a href="/blog"><span>Blog</span></a>
	                             
	                        </li>
	                     	<li><a href="/pages"><span>Pages</span></a>
	                         
	                        </li>
	                        <li><a href="/shop"><span>Shop</span></a>
	                             
	                        </li>
	                        <li><a href="/contact"><span>Contact Us</span></a>
	                          
	                        </li>
	              		</ul>
	              <div className="footer-mobile-menu">
	                  <ul className="social">
	                      <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
	                      <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
	                      <li className="google-plus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
	                      <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
	                      <li className="linkedin"><a href="#"><i className="fa fa-linkedin"></i></a></li>
	                  </ul>

	                  <ul className="address-footer-mobile">
	                    <li><p> 8th floor, 379 Hudson St, New York, NY 10018</p></li>
	                    <li><p>1-800-123-6879 </p></li>
	                    <li><p> contact@arc.com</p></li>
	                    
	                  </ul>
	              </div>
	          		</div> 
					</div>
					</div>
                    {/* <!-- /#rmm   --> */}
					<div className="modal fade modal-search" id="myModal" tabIndex="-1" role="dialog"   aria-hidden="true">
		  	<button type="button" className="close" data-dismiss="modal">×</button>
		  	<div className="modal-dialog myModal-search">
            {/* <!-- Modal content--> */}
            <div className="modal-content">                                        
                <div className="modal-body">
                    <form role="search" method="get" className="search-form">
                        <input className="search-field" placeholder="Search here..."  title="" type="search"/>
                        <button type="submit" className="search-submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
          </div>
		</div>
		{/* <!-- End Modal Search--> */}
	    <div id="page">
	    	<div id="skrollr-body">
				<header id="mainmenu" className="header-v1 header-border header-fix header-bg-white" data-0="padding:10px;padding-left:40px;padding-right:40px;" data-251="padding:10px; padding-left:40px;padding-right:40px;top:0;">
					<div id="info" className="topbar topbar-position topbar-dark hide-topbar" data-0="height:30px" data-251="height:0;">
			    		
						<div className="col-md-12">
							<p className="text-cap hidden-xs">TOLL FREE: 800 345 6889</p>
		    				<p className="text-cap">E-mail: contact@arc.com</p>
		    				<div className="language">
		    					<a href="#" className="active">EN</a>
		    					<a href="#">FR</a>
		    					<a href="#">PT</a>
		    				</div>
						</div>
			    			
			    	</div>
					<div className="left-header">
						<ul className="navi-level-1">
							<li><a href="index.html" className="logo"><img src="assets/images/Header/logo.png" className="img-responsive" alt="Image"/></a></li>
						</ul>
					</div>
                    {/* <!-- End Left Header --> */}
					<nav>
						<ul className="navi-level-1 hover-style-2 main-navi">
	                        <li className="has-sub"><a href="/"><span>Home</span></a>
	                             
	                        </li>
	                        <li className="has-sub"><a href="/projects"><span>Projects</span></a>
	                               
	                        </li>
	                        <li className="has-sub"><a href="/services"><span>Services</span></a>
	                            
	                        </li>
	                       	<li><a href="/about"><span>About </span></a></li>

	                        
	                        <li  className="has-sub" ><a href="/blog"><span>Blog</span></a>
	                            
	                        </li>
	                     	<li className="has-sub"><a href="/pages"><span>Pages</span></a>
	                         
	                        </li>
	                        <li className="has-sub"><a href="/shop"><span>Shop</span></a>
	                             
	                        </li>
	                        <li className="has-sub"><a href="/contact"><span>Contact Us</span></a>
	                         
	                        </li>

	                    </ul>
					</nav>
                    {/* <!-- End Nav --> */}
					<div className="right-header">
						<ul className="navi-level-1 sub-navi seperator-horizonal-line hover-style-4">	
							<li className="header-tel"><a className="tel-header" href="">TOLL FREE: 800 345 6889</a></li>
							

		                    {/* <!-- Testing Search Box --> */}
		                    <li><a href="#"><span aria-hidden="true" className="icon_bag_alt"></span>
								</a>
							</li>	
							 <li >
								<a  href="#" data-toggle="modal" data-target="#myModal" id="btn-search" className="reset-btn btn-in-navi"><span aria-hidden="true" className="icon_search"></span></a>
		                    </li>
		                    <li>
		                    	<a href="#/"  className="mm-toggle" onClick={mobileNavToogle}>
				            		<span aria-hidden="true" className="icon_menu"  ></span>
				            	</a> 
		                    </li>
						</ul>

					</div>
                    {/* <!-- End Right Header -->	 */}
				</header> 
				{/* <!-- End  Header --> */}

	        	</div>
	    </div>


</div>
        );
    }


export default Header;