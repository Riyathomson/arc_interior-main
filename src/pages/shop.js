import React from 'react';


class Shop extends React.Component{
    render(){
        return(
            <div>
               
			   <div id="page">
	    	<div className="topbar topbar-transparent">
	    		<div className="container">
	    			<div className="row">
	    				<div className="col-md-12">
	    					<div className="topbar-left">
			    				<div className="language">
			    					 <select className="custom-select">
				                      <option>English</option>
				                      <option>Italian</option>
				                      <option>French</option>
				                      <option>German</option>
				                    </select>
			    				</div>
			    				<div className="social-share">
					                    <a href="#"><i className="fa fa-facebook"></i></a>
					                    <a href="#"><i className="fa fa-twitter"></i></a>
					                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
								</div>
							</div>
							<p className="ads-text text-cap">Free shipping for standard order over $100 </p>
							<div className="topbar-right">
								<div className="account">
									<a className="text-cap" href="#">Sign in</a>
									<a className="text-cap" href="#">Register</a>
								</div>
							</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    	{/* <!-- End top Bar --> */}
	    	<div className="content-box effect8  clearfix">
				<header className="header-v6 ">
					<div className="container container-fill-width">
						<div className="row">
							<div className="left-header">
							
								<form className="form-inline form-search-home-6">
								  <div className="form-group">
								    <div className="input-group">
							    	  <button type="submit" className="btn-search-home-6 text-cap"><span aria-hidden="true" className="icon_search"></span></button>
								      <input className="form-control" id="exampleInputAmount" placeholder="SEARCH HERE" type="text"/>
								    </div>
								  </div>
								  
								</form>
							</div>
							{/* <!-- End Left Header --> */}
								<a href="" className="logo"><img src="assets/images/Header/logo.png" className="img-responsive" alt="Image"/></a>
							<div className="right-header">
								<ul className="navi-level-1">
									<li><a href="#">
										<span aria-hidden="true" className="icon_heart_alt"></span>
									</a>
									</li>
									<li>
										<div className="dropdown">
											<a href="#" className="dropdown-toggle cart-contents mini-cart" data-toggle="dropdown">
												<span aria-hidden="true" className="icon_bag_alt">
												</span>
												<span className="mini-cart-counter">3</span>
												<span className="price-mini-cart">$ 26,891.00</span>
											</a>
											<div className="dropdown-menu top_cart_list_product">
	                                        <ul className="cart_list product_list_widget clearfix">
	                                            <li className="mini_cart_item">
	                                                <div className="img-thumb">
	                                                    <img alt="" className="attachment-shop_thumbnail" src="http://placehold.it/340x390/ccc.jpg"/>
	                                                </div>
	                                                <div className="product-detail">
	                                                    <a className="remove" href=""><span aria-hidden="true" className="icon_close"></span></a>
	                                                    <a href="#">Bed Dream</a>                                                                
	                                                    <span className="quantity">1 × 
	                                                        <span className="amount">$600</span>
	                                                    </span>
	                                                </div>                                            
	                                            </li>
	                                            <li className="mini_cart_item">
	                                                <div className="img-thumb">
	                                                    <img alt="" className="attachment-shop_thumbnail" src="http://placehold.it/340x390/ccc.jpg"/>
	                                                </div>
	                                                <div className="product-detail">
	                                                    <a className="remove" href=""><span aria-hidden="true" className="icon_close"></span></a>
	                                                    <a href="#">Bongo Pendant Lamp</a>                                                                
	                                                    <span className="quantity">1 × 
	                                                        <span className="amount">$450</span>
	                                                    </span>
	                                                </div>                                            
	                                            </li>
	                                            <li className="mini_cart_item">
	                                                <div className="img-thumb">
	                                                    <img alt="" className="attachment-shop_thumbnail" src="http://placehold.it/340x390/ccc.jpg"/>
	                                                </div>
	                                                <div className="product-detail">
	                                                    <a className="remove" href=""><span aria-hidden="true" className="icon_close"></span></a>
	                                                    <a href="#">Haiku Table Lamp</a>                                                                
	                                                    <span className="quantity">1 × 
	                                                        <span className="amount">$450</span>
	                                                    </span>
	                                                </div>                                            
	                                            </li>
	                                        </ul>
	                                        <p className="total"><strong>Subtotal:</strong> <span className="amount">$26,150.00</span></p>
	                                        <p className="buttons">
	                                            <a className="ot-btn btn-border btn-border-white" href="">View Cart</a>
	                                            <a className="ot-btn btn-main-color " href="">Checkout</a>
	                                        </p>
	                                    	</div>
                                    	</div>
									</li>
									<li><a href="#/" data-toggle="modal" data-target="#myModal" id="btn-search" className="reset-btn btn-in-navi"><span aria-hidden="true" className="icon_search"></span></a>
									</li>
									<li><a href="#/" className="mm-toggle">
				                		<span aria-hidden="true" className="icon_menu"></span>
				                		</a> 
				                	</li>
			                	</ul>
							</div>
							<nav>
								<ul className="navi-level-1 hover-style-2 main-navi">
		                        <li className="has-sub"><a href="index.html"><span>Home</span></a>
		                            
		                        </li>
		                        <li><a href="shop_catalog.html"><span>Funiture</span></a>
		                        </li>
		                        <li><a href="shop_catalog.html"><span>Lighting</span></a>
		                        </li>
		                       	<li><a href="shop_catalog.html"><span>Accessorie </span></a>
		                       	</li>
		                        
		                       <li className="has-sub"><a href="blogList.html"><span>Blog</span></a>
		                             <ul className="navi-level-2">
		                             	<li><a href="blogGrid_2_col.html">Grid 2 Columns</a></li>
		                             	<li><a href="blogGrid_3_col.html">Grid 3 Columns</a></li>
		                             	<li><a href="blogGrid_4_col.html">Grid 4 Columns</a></li>
		                                <li><a href="blogList.html">Blog List</a></li>
		                                <li><a href="blogDetail.html">Blog Detail</a></li>
		                            </ul>
		                        </li>
		                        <li className="has-sub"><a href="contact.html"><span>Contact Us</span></a>
		                          <ul className="navi-level-2">
		                              <li><a href="contact.html">Contact Style 1</a></li>
		                              <li><a href="contact_2.html">Contact Style 2</a></li>
		                              <li><a href="contact_3.html">Contact Style 3</a></li>                                    
		                          </ul>
		                        </li>

		               		 	</ul>
							</nav>
							{/* <!-- End Nav --> */}
						</div>
					</div>
				</header> 
				{/* <!-- End  Header --> */}

				<section className="no-padding-tb">
					<div className="container">
						<div className="row">
							<div className="header-shop-banner hsb-1">
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End Header Shop Banner --> */}
				
		 		<section className="">
				  	<div className="container">
				        <div className="row">
				            <div className="main-shop content-area">
				                    <main id="main" className="site-main padding-top-50" >
				                        <div className="arc-sorting">
				                                <form method="get" className="woocommerce-ordering">
				                                    <select className="orderby custom-select" name="orderby">
				                                        <option >Default sorting</option>
				                                        <option >Sort by popularity</option>
				                                        <option >Sort by average rating</option>
				                                        <option >Sort by newness</option>
				                                        <option >Sort by price: low to high</option>
				                                        <option >Sort by price: high to low</option>
				                                    </select>
				                                </form>
				                                <p className="woocommerce-result-count">Showing 1 &ndash; 10 of 23 results</p>                                
				                        </div>
										 {/* <!-- End Finance Sorting --> */}
				                        <div className="row">
				                        	<div className="products">
				                                <div className="col-md-4">
				                                 	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/1.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    
									                    <div className="product-info">
									                    	<a href="#">
									                    		<h3 className="text-cap">
										                    		Now Clock - Black/Copper
										                    	</h3>
									                    	</a>
									                    	<p className="price">
									                    		$99.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/2.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	<span className="sale-product">SALE</span>
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		The Green Chair - Black
									                    	</h3></a>
									                    	<p className="price">
									                    		<span className="old-price">$399.00</span>  $299.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/3.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Haiku Table Lamp - Birch/Black

									                    	</h3></a>
									                    	<p className="price">
									                    		$290.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/4.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Bongo Pendant Lamp


									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/5.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Large Aztec Penta + Plant
									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/6.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Large Aztec Penta + Plant
									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/7.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Marco Bar Stool - Black
									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/8.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Time & Day Clock
									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/9.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Wood Handle Frying Pan - Ø 25
									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/10.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Oak & Iron Stool
									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/11.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Black Diamond Knife Block Set
									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                                <div className="col-md-4">
				                                	<div className="product-item">
									                    <a href="#" className="products-warp">
									                      <img src="assets/images/Shop/12.jpg" className="img-responsive" alt="Image"/>
								                       		<span className="new-product">NEW</span>
									                      	
									                    </a>
									                    <div className="product-info">
									                    	<a href="#"><h3 className="text-cap">
									                    		Mango Wood Container - Ø 12

									                    	</h3></a>
									                    	<p className="price">
									                    		$110.00
									                    	</p>
									                    	<a href="#" className="ot-btn btn-block btn-main-color">Add to Cart</a>
									                    </div>
									                </div>
				                                </div>
				                        	</div>
											{/* <!-- End Products --> */}
				                       	</div>
										{/* <!-- End Row --> */}
				                       
				                        <nav className="woocommerce-pagination padding-top-30">
				                          <ul className="page-numbers pagination">
				                              <li><a className="current" href="#">1</a></li>
				                              <li><a href="#">2</a></li>
				                              <li><a href="#">3</a></li>
				                              <li><a href="#">4</a></li>
				                              <li><a href="#">5</a></li>
				                               <li className="threedots">...</li>
				                                <li><a href="#">25</a></li>
				                              <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
				                          </ul>
				                        </nav>
				                    </main> 
									{/* <!-- End Main --> */}
				        	</div>
				   		</div>
						{/* <!-- End Row --> */}
				 	</div>
					{/* <!-- End container --> */}
				</section>
				 {/* <!--End List Product --> */}


				<section className="bg-promotion-product">
					<div className="container">
						<div className="row">
							<div className="promotion-product-warp">
								<div className="promotion-product-item">
									<div className="promotion-product-item-inner">
										<h4 className="text-cap">
											Money back
										</h4>
										<p className="text-cap">
											If you are not satisfied with your purchase
										</p>
									</div>
								</div>

								<div className="promotion-product-item">
									<div className="promotion-product-item-inner">
										<h4 className="text-cap">
											Free Shipping
										</h4>
										<p className="text-cap">
											Free shipping for standard order over $100
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- End Section Promotion Product --> */}

				<footer className="footer-v4 bg-dark">
					<div className="container">
							<div className="footer-col-1">
								<h4 className="text-cap">
									Contact
								</h4>
								<ul className="list-link-footer">
									<li><i className="fa fa-home" aria-hidden="true"></i> 379 5th Ave  New York, NYC 10018</li>
									<li><i className="fa fa-phone" aria-hidden="true"></i> (+1) 96 716 6879</li>
									<li><i className="fa fa-fax" aria-hidden="true"></i> (+1) 96 716 6879</li>
									<li><i className="fa fa-envelope-o" aria-hidden="true"></i> contact@site.com</li>
									<li><i className="fa fa-clock-o" aria-hidden="true"></i> Mon-Fri 09:00 - 17:00</li>
								</ul>
							</div>
							<div className="footer-col-2">
								<h4 className="text-cap">
									Company
								</h4>
								<ul className="list-link-footer">
									<li><a className="text-cap" href="#">Home</a></li>
									<li><a className="text-cap" href="#">Projects</a></li>
									<li><a className="text-cap" href="#">Services</a></li>
									<li><a className="text-cap" href="#">About Us</a></li>
									<li><a className="text-cap" href="#">Contact</a></li>
									<li><a className="text-cap" href="#">Blogs</a></li>
									<li><a className="text-cap" href="#">404 Pages</a></li>
									<li><a className="text-cap" href="#">Shop</a></li>
									<li><a className="text-cap" href="#">Elements</a></li>
									<li><a className="text-cap" href="#">Typography</a></li>
								</ul>
							</div>
							
							<div className="footer-col-3">
								<h4 className="text-cap">Gallery</h4>
								<div className="gallery-warp">
									<a href="#"><img src="assets/images/Gallery/1.jpg" className="img-responsive" alt="Image"/></a>
									<a href="#"><img src="assets/images/Gallery/2.jpg" className="img-responsive" alt="Image"/></a>
									<a href="#"><img src="assets/images/Gallery/3.jpg" className="img-responsive" alt="Image"/></a>
									<a href="#"><img src="assets/images/Gallery/4.jpg" className="img-responsive" alt="Image"/></a>
									<a href="#"><img src="assets/images/Gallery/5.jpg" className="img-responsive" alt="Image"/></a>
									<a href="#"><img src="assets/images/Gallery/6.jpg" className="img-responsive" alt="Image"/></a>
									<a href="#"><img src="assets/images/Gallery/5.jpg" className="img-responsive" alt="Image"/></a>
									<a href="#"><img src="assets/images/Gallery/4.jpg" className="img-responsive" alt="Image"/></a>
								</div>
							</div>
					</div>
				</footer>
				{/* <!-- End Footer -->				 */}
			</div>
			<section className="copyright">
				<p>Copyright © 2016 Designed by <a href="#">AuThemes</a>. All rights reserved.</p>
			</section>
		</div>
	</div>
        );
        }
}

export default Shop;