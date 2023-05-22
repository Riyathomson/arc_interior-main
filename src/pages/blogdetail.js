import React from 'react';
import Footer from './footer';
import Header from './header';

class Blogdetail extends React.Component{
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
								<li>
									<a href="/blog">Blog</a>
								</li>
								<li className="active">Blog Details</li>
							</ol>
						</div>
					</div>
				</section>
				{/* <!-- End Section Sub Header --> */}
				
				<section id="content" className="padding">
					<div className="container">
						<div className="row">
							<div className="col-md-9">
								<main id="main" className="site-main" >
									<div className="blog-detail">
						                   	<h1>2016 Interior Design Trends</h1>
						                   	<div className="latest-blog-post-data text-cap">
						                        <span className="tags"><a href="#">Interior Design</a>, <a href="#"> Decoration</a></span>
						                    </div>
						                    <div className="latest-blog-post-date-2  text-cap">
				                            	<span className="month">May</span>
												<span className="day">21,</span>
				                                <span className="year">2016</span>
				                            </div>
						                    <div className="lastest-news-detail">
						                        <img src="http://placehold.it/1140x640/ccc.jpg" className="img-responsive" alt="Image"/>
						                        <h4>Context of Business</h4>
						                        <p>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat id. Vivamus interdum urna at sapien varius elementum. Suspendisse ut mi felis et interdum libero lacinia vel. Aenean elementum odio ut lorem cursus, eu auctor magna pellentesque.  Cras facilisis quam sed rhoncus dapibus. Quisque lorem enim, dictum at magna eu, hendrerit hendrerit arcu. Etiam vulputate ac tortor ac gravida. Proin accumsan placerat rutrum. Praesent ut eros ac nisi ultrices rhoncus et nec nunc</p>
						                        <br>
						                        <p>Nulla fermentum eros vitae est finibus dapibus. Aliquam porta nulla a elit varius efficitur. In in magna sed turpis venenatis tristique eu eget neque. Duis condimentum libero ornare quam tincidunt interdum. Phasellus porttitor nisi ut lectus pellentesque, ut fringilla leo convallis. </p>
						                        </br>
						                        <blockquote>
						                          <p>Wullam placerat vehicula pulvinar. Nam convallis euismod maximus. Suspendisse dignissim, ante at posuere cursus, diam nisl viverra felis, vel malesuada ex ante ac urna.</p>
						                          <strong className="text-cap">CHERYL CRUZ</strong>
						                        </blockquote>
						                        <br/>
						                        <p>Duis gravida tempus imperdiet. Vivamus elit vel consequat elementum. Cras consequat lorem non orci sagittis, eget volutpat neque imperdiet. Nam auctor nisi vitae enim accumsan, ac dignissim tortor consequat.</p>
						                        <ul className="style-list-circle">
						                          <li><a href="#">Nullam consequat lacus non luctus finibus.</a></li>
						                          <li><a href="#">Interdum et malesuada fames ac ante</a></li>
						                          <li><a href="#">Nam justo ipsum, sagittis sed hendrerit ac</a></li>
						                          <li><a href="#">Interdum et malesuada fames ac ante</a></li>
						                          <li><a href="#">Nam justo ipsum, sagittis sed hendrerit ac</a></li>
						                        </ul>
						                    </div>
						                    <div className="footer-data text-cap">
						                        <div className="tags ">
						                            <p>TAGES&nbsp;: &nbsp;<a href=""> Construction</a>,&nbsp; <a href="">Architect</a>,&nbsp; <a href="">House</a> ,&nbsp; <a href="">Building</a></p>
						                        </div>
						                        <div className="share">
						                            <p>SHARE&nbsp;: &nbsp;<a href=""> Facebook</a>,&nbsp; <a href="">Twitter</a>,&nbsp; <a href="">Google+</a></p>
						                        </div>
						                    </div>
						                    <div className="divider-line"></div>
						                    <div className="entry_post_navigation">
						                        <div className="preview_entry_post">
						                          <a href="#">
						                            <span><i className="fa fa-angle-left" aria-hidden="true"></i>  PREV</span>
						                            <h4>Plans for growing businesses</h4>
						                          </a>

						                        </div>
						                        <div className="next_entry_post">
						                          <a href="#">
						                            <span>NEXT <i className="fa fa-angle-right" aria-hidden="true"></i>  </span>
						                            <h4>Help you planning for your retirement</h4>
						                          </a>

						                        </div>
						                    </div>
                                            {/* <!-- End entry Post Navigation --> */}

					                        <div id="respond" className="comment-respond">
						                          <h3 id="reply-title" className="text-cap">Leave a Reply </h3>        
						                          <form action="GET" method="post" id="commentform" className="comment-form form-inline" novalidate="">
						                              <p className="logged-in-as"><a href="#" aria-label="You must be logged in to post a comment.">You must be logged in to post a comment.</a>. </p>
						                              <div className="row">
						                                <div className="form-group col-sm-12 col-md-6 padding-right-10">
						                                  <label className="sr-only" for="inputName">Password</label>
						                                  <input type="text" className="form-control" id="inputName" placeholder="Your Name"/>
						                                </div>
						                                <div className="form-group col-sm-12 col-md-6 padding-left-10">
						                                  <label className="sr-only" for="inputEmail">Email address</label>
						                                  <input type="email" className="form-control" id="inputEmail" placeholder="Your Email"/>
						                                </div>
						                                <div className="form-group col-xs-12">
						                                        <textarea id="textarea" className="form-control" rows="5" required="required" placeholder="Your Comments"></textarea>
						                                </div>
						                              </div>
                                                      {/* <!-- End row --> */}
						                              <p className="form-submit">
						                                  <button name="submit" id="submit" className="ot-btn btn-submit text-cap" type="submit">Comment </button>
						                                </p>
						                            </form>
						                    </div>

						                    <div id="comments" className="comments-area">
						                        <h3 className="text-cap">3 Comments</h3>
					                        	<ol className="comment-list">
						                            <li className="comment" >
						                                  <div className="comment-body">
						                                      <div className="comment-meta">
						                                          <div className="comment-author vcard">
						                                                <a href="#"><img alt="" src="http://placehold.it/262x262/ccc.jpg" className="avatar photo avatar-default"/></a>
						                                          </div>
						                                         
						                                      </div>
						                                      <div className="comment-content">
						                                            
						                                            <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.</p>
						                                             <cite className="fn"><a href="" rel="external nofollow" className="url">Angela Allen</a></cite>  -      
						                                              <a href="" className="comment-date">
						                                                  <span>March 30, 2016</span>     
						                                              </a>
						                                            <div className="reply">
						                                                <a rel="nofollow" className="comment-reply-link" href="" onclick="" aria-label=""><i className="fa fa-share" aria-hidden="true"></i>   Reply</a>     
						                                            </div>
						                                      </div>
						                                  </div>
                                                          {/* <!-- End comment body --> */}

						                                  <ol className="children last-comment">
						                                      <li className="comment" >
						                                            <div className="comment-body">
						                                                <div className="comment-meta commentmetadata">
						                                                    <div className="comment-author vcard">
						                                                          <img alt="" src="http://placehold.it/256x256/ccc.jpg" className="avatar photo avatar-default"/>      
						                                                    </div>
						                                                   
						                                                </div>
						                                                <div className="comment-content">
						                                                      
						                                                      <p>Nullam ipsum urna, dapibus sed justo sed, imperdiet malesuada commodo, eros eleifend laoreet fringilla,</p>
						                                                       <cite className="fn"><a href="" rel="external nofollow" className="url">Angela Allen</a></cite>  -      
						                                                        <a href="" className="comment-date">
						                                                            <span>March 30, 2016</span>     
						                                                        </a>
						                                                </div>
						                                            </div>
                                                                    {/* <!-- End comment body --> */}
						                                        </li>
                                                                {/* <!-- #comment-## --> */}
						                                  </ol>
                                                          {/* <!-- .children --> */}
						                            </li>
						                             <li className="comment last-comment" >
						                                  <div className="comment-body">
						                                      <div className="comment-meta commentmetadata">
						                                          <div className="comment-author vcard">
						                                                <img alt="" src="http://placehold.it/262x262/ccc.jpg" className="avatar photo avatar-default"/>      
						                                          </div>
						                                         
						                                      </div>
						                                      <div className="comment-content">
						                                            
						                                            <p>Nunc risus ex, tempus quis purus ac, tempor consequat ex. Vivamus sem magna, maximus at est id, maximus aliquet nunc. Suspendisse lacinia velit a eros porttitor, in interdum ante faucibus.</p>
						                                             <cite className="fn"><a href="" rel="external nofollow" className="url">Angela Allen</a></cite>  -      
						                                              <a href="" className="comment-date">
						                                                  <span>March 30, 2016</span>     
						                                              </a>
						                                            <div className="reply">
						                                                <a rel="nofollow" className="comment-reply-link" href="" onclick="" aria-label=""><i className="fa fa-share" aria-hidden="true"></i>   Reply</a>     
						                                            </div>
						                                      </div>
						                                  </div>
                                                          {/* <!-- End comment body --> */}
						                            </li>
					                        	</ol>
						                    </div>
                                            {/* <!-- Comments Area --> */}

						                   
				                    </div>
				              </main> 
									
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






<Footer/>


</div>
        );
    }
}

export default Blogdetail;