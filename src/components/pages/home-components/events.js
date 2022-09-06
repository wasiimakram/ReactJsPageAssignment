import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Events() {
    
    const owlEvents={
        loop:true,
        margin:30,
        items:2,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:true,
        dots:false,
        responsive:{ 0:{items:1},560:{ items:2},767:{items:3},992:{items:2}
        }
      }; // OwlCaresoul Options
    return (
    <div>
        <section class="popular-course-area section-gap">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="menu-content pb-70 col-lg-6">
                        <div class="title text-center">
                        <a href="#">
                            <h1 class="mb-10  ensRed">Latest News</h1>
                        </a>
                        </div>
                        <OwlCarousel className='owl-theme' {...owlEvents}    >
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid img2ss" src="assets/img/news/6.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        ENS organized the Virtual Graduation Ceremony of 778 students    
                                        </h4>
                                        </p>
                                        <a id="rptCampusNews_lbnNews_0" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid img44ss" src="assets/img/news/MBZ%20bldg%20jpg.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        Our Virtual Tours are Live    
                                        </h4>
                                        </p>
                                        <a id="rptCampusNews_lbnNews_1" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid imgxyz2" src="assets/img/news/9.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        ENS launched the Centers of Excellence for Technical & Vocational Student Training    
                                        </h4>
                                        </p>   
                                        <a id="rptCampusNews_lbnNews_2" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid img33sss" src="assets/img/news/IMG-20211207-WA0033.jpg" alt=""  />
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        ENS Students attended Borealis Social Fund    
                                        </h4>
                                        </p>
                                        <a id="rptCampusNews_lbnNews_3" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div class="menu-content pb-70 col-lg-6">
                        <div class="title text-center">
                        <a href="#">
                            <h1 class="mb-10  ensRed">Events</h1>
                        </a>
                        </div>
                        <OwlCarousel className='owl-theme' {...owlEvents}    >
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid img33sss" src="assets/img/events/5.jpg" alt=""  />
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        Month of Reading    
                                        </h4>
                                        </p>
                                        <a id="rptCampusEvents_lbnNews_0" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid img33sss" src="assets/img/events/4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        National Identity Projects Final Ceremony    
                                        </h4>
                                        </p>
                                        <a id="rptCampusEvents_lbnNews_1" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid img33sss" src="assets/img/events/3.jpg" alt=""  />
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        Arabic Writing Challenge Ceremony    
                                        </h4>
                                        </p>
                                        <a id="rptCampusEvents_lbnNews_2" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid img33sss" src="assets/img/events/2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        Art Exhibition 2020    
                                        </h4>
                                        </p>
                                        <a id="rptCampusEvents_lbnNews_3" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-popular-carusel">
                                <div class="thumb-wrap relative">
                                    <div class="thumb relative ">
                                        <div class="overlay overlay-bg">
                                        </div>
                                        <img class="img-fluid img33sss" src="assets/img/events/1.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="details">
                                    <div class="col-lg-12 col-md-12 single-blog">
                                        <p>
                                        <h4>
                                        Innovation Exhibition 2020    
                                        </h4>
                                        </p>
                                        <a id="rptCampusEvents_lbnNews_4" class="details-btn d-flex justify-content-center align-items-center" href="#"> 
                                        <span class="details">Details</span><span class="lnr lnr-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
