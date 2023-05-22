import React from 'react';
import Header from './header';


class Bloglist extends React.Component{
    render(){
        return(
            <div>
               
               <Header/>

			   <section>
					<div className="sub-header sub-header-1 sub-header-blog-grid fake-position">
						<div className="sub-header-content">
							<h2 className="text-cap white-text">Blog</h2>
							<ol className="breadcrumb breadcrumb-arc text-cap">
								<li>
									<a href="/">Home</a>
								</li>
								<li className="active">Blog</li>
							</ol>
						</div>
					</div>
				</section>
				{/* <!-- End Section Sub Header --> */}
				
				<section id="content" className="padding">
					<div className="container">
						<div className="row">
							<div className="col-md-9">
								<div className="blog-list">
									<article>
										<figure className="latest-blog-post-img effect-zoe">
											<a href="/blogdetail">
												<img src="assets/images/Blog/1.jpg" className="img-responsive" alt="Image"/>
											</a>
											<div className="latest-blog-post-date text-cap">
												<span className="day">18</span>
				                                <span className="month">May</span>
				                            </div>
				                            
				                        </figure>
				                        <div className="latest-blog-post-description">
				                            <a href="/blogdetail"><h3>2016 Interior Design Trends</h3></a>
				                            <p>Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar eu rhoncus ligula. Ut leo mauris, molestie imperdiet consequat in, varius ac sapien.</p>
				                            
				                            <a href="/blogdetail" className="ot-btn btn-main-color text-cap">
				                            	Continue Reading...
				                            </a>
				                        </div>
									</article>
									<article>
										<figure className="latest-blog-post-img effect-zoe">
											<a href="/blogdetail">
												<img src="assets/images/Blog/2.jpg" className="img-responsive" alt="Image"/>
											</a>
											<div className="latest-blog-post-date text-cap">
												<span className="day">18</span>
				                                <span className="month">May</span>
				                            </div>
				                            
				                        </figure>
				                        <div className="latest-blog-post-description">
				                            <a href="/blogdetail"><h3>15 Notable Products at ARC Interior Design Contest</h3></a>
				                            <p>Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar eu rhoncus ligula. Ut leo mauris, molestie imperdiet consequat in, varius ac sapien.</p>
				                            
				                            <a href="/blogdetail" className="ot-btn btn-main-color text-cap">
				                            	Continue Reading...
				                            </a>
				                        </div>
									</article>
									<article>
										<figure className="latest-blog-post-img effect-zoe">
											<a href="/blogdetail">
												<img src="assets/images/Blog/3.jpg" className="img-responsive" alt="Image"/>
											</a>
											<div className="latest-blog-post-date text-cap">
												<span className="day">18</span>
				                                <span className="month">May</span>
				                            </div>
				                            
				                        </figure>
				                        <div className="latest-blog-post-description">
				                            <a href="/blogdetail"><h3>5 Small Apartments Showcase The Flexibility Of Compact Design</h3></a>
				                            <p>Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar eu rhoncus ligula. Ut leo mauris, molestie imperdiet consequat in, varius ac sapien.</p>
				                            
				                            <a href="/blogdetail" className="ot-btn btn-main-color text-cap">
				                            	Continue Reading...
				                            </a>
				                        </div>
									</article>

									<article>
										<figure className="latest-blog-post-img effect-zoe">
											<a href="/blogdetail">
												<img src="assets/images/Blog/4.jpg" className="img-responsive" alt="Image"/>
											</a>
											<div className="latest-blog-post-date text-cap">
												<span className="day">18</span>
				                                <span className="month">May</span>
				                            </div>
				                            
				                        </figure>
				                        <div className="latest-blog-post-description">
				                            <a href="/blogdetail"><h3>Small Home Designs Under 50 Square Meters</h3></a>
				                            <p>Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar eu rhoncus ligula. Ut leo mauris, molestie imperdiet consequat in, varius ac sapien.</p>
				                            
				                            <a href="/blogdetail" className="ot-btn btn-main-color text-cap">
				                            	Continue Reading...
				                            </a>
				                        </div>
									</article>
									<article>
										<figure className="latest-blog-post-img effect-zoe">
											<a href="/blogdetail">
												<img src="assets/images/Blog/5.jpg" className="img-responsive" alt="Image"/>
											</a>
											<div className="latest-blog-post-date text-cap">
												<span className="day">18</span>
				                                <span className="month">May</span>
				                            </div>
				                            
				                        </figure>
				                        <div className="latest-blog-post-description">
				                            <a href="/blogdetail"><h3>5 Small Studio Apartments With Beautiful Design</h3></a>
				                            <p>Morbi vehicula a nibh in commodo. Aliquam quis dolor eget lectus pulvinar eu rhoncus ligula. Ut leo mauris, molestie imperdiet consequat in, varius ac sapien.</p>
				                            
				                            <a href="/blogdetail" className="ot-btn btn-main-color text-cap">
				                            	Continue Reading...
				                            </a>
				                        </div>
									</article>
								</div>
								<div className="pagination-ourter text-left">
		                            <ul className="pagination">
		                                <li><a href="#" className="page-numbers current">1</a></li>
		                                <li><a className="page-numbers" href="#">2</a></li>
		                                <li><a className="page-numbers" href="#">3</a></li>
		                                <li><a className="page-numbers" href="#">4</a></li>
		                                <li><a className="page-numbers" href="#">5</a></li>
		                                <li><a className="page-numbers" href="#">...</a></li>
		                                <li><a className="page-numbers" href="#">25</a></li>
		                                <li><a className="next page-numbers" href="#"><i className="fa fa-angle-right"></i></a></li>
		                            </ul>
		                        </div>
							</div> 
							{/* <!-- End Col --> */}
							<div className="col-md-3">
								<div className="main-sidebar">
		                            <aside className="widget widget_text">
		                                <h3 className="widget-title text-cap">About</h3>
		                                <div className="tiny-border"></div>                                         
		                                <div className="textwidget">
		                                    <p>Nulla eleifend, sapien eget porttitor maximus, nisl ante convallis dolor, nec consequat felis ex a ex. Etiam vestibulum enim euismod dui vestibulum, vitae fringilla nibh consectetur.
		                                    </p>                              
		                                </div>
		                            </aside>
		                            <aside className="widget widget_search">
		                                <form   className="search-form" method="get" role="search">
		                                    <input name="s" value="" placeholder="Search …" className="search-field" type="search"/>   
		                                    <button className="search-submit" type="submit"><i className="fa fa-search"></i></button>
		                                </form>
		                            </aside>
		                            <aside className="widget widget_categories">
		                                <h3 className="widget-title text-cap">Categories</h3> 
		                                <div className="tiny-border"></div>   
		                                <ul>
		                                    <li className="cat-item"><a href="#">Business Market</a> (5)</li>
		                                    <li className="cat-item"><a href="#">Socials Network</a> (12)</li>
		                                    <li className="cat-item"><a href="#">Team Work</a> (10)</li>
		                                    <li className="cat-item"><a href="#">Product Services</a> (9)</li>
		                                    <li className="cat-item"><a href="#">Socials Ecommerce</a> (6)</li>
		                                </ul>
		                            </aside>

		                            <aside className="promotion clearfix">
						                <img src="http://placehold.it/540x440/ccc.jpg" className="img-responsive" alt="Image"/>
						                <div className="promotionText">
						                    <p>Amazing Theme! You can customize it very easy to fit your needs.</p>
						                    <a href="" className="ot-btn btn-border btn-border-dark text-cap"> Buy Now</a>
						                </div>
					              	</aside>
		                          
		                            <aside className="widget widget_tag_cloud">
		                                <h3 className="widget-title text-cap">Tags</h3>
		                                <div className="tiny-border"></div>
		                                <div className="tagcloud">
		                                    <a href="#">audio</a>
		                                    <a href="#">gallery</a>
		                                    <a href="#">image</a>
		                                    <a href="#">music</a>
		                                    <a href="#">photo</a>
		                                    <a href="#">quote</a>
		                                    <a href="#">text</a>
		                                    <a href="#">video</a>
		                                    <a href="#">vimeo</a>
		                                    <a href="#">youtube</a>
		                                </div>
		                            </aside>
		                            <aside className="widget widget_archive">
		                                <h3 className="widget-title text-cap">Archives</h3>
		                                <div className="tiny-border"></div>    
		                                <ul>
							                  <li><a href="#">March 2016</a>
							                      <span className="count">(4)</span>
							                  </li>
							                  <li><a href="#">Febuary 2016</a>
							                      <span className="count">(9)</span>

							                  </li>
							                  <li><a href="#">January 2016</a>
							                      <span className="count">(34)</span>

							                  </li>
							                  <li><a href="#">December 2015</a>
							                      <span className="count">(22)</span>

							                  </li>
							                  <li><a href="#">November 2015</a>
							                      <span className="count">(35)</span>

							                  </li>
							                   <li><a href="#">Octorber 2015</a>
							                      <span className="count">(4)</span>

							                  </li>
							                   <li><a href="#">September 2015</a>
							                      <span className="count">(26)</span>

							                  </li>
							                   <li><a href="#">August</a>
							                      <span className="count">(11)</span>

							                  </li>
							                </ul>
		                            </aside> 
		                            <aside className="widget widget_meta">
		                                <h3 className="widget-title text-cap">Meta</h3> 
		                                <div className="tiny-border"></div>         
		                                <ul>
		                                    <li><a href="#">Site Admin</a></li>          
		                                    <li><a href="#">Log out</a></li>
		                                    <li><a href="#">Entries <abbr>RSS</abbr></a></li>
		                                    <li><a href="#">Comments <abbr>RSS</abbr></a></li>
		                                    <li><a href="#">WordPress.org</a></li>           
		                                </ul>
		                            </aside>                           
		                        </div>
							</div>
							{/* <!-- End Col --> */}
						</div>
					</div>
				</section>
				{/* <!-- End Content --> */}







</div>
        );
    }
}

export default Bloglist;