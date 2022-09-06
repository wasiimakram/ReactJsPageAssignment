import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Campus() {
    const options={
        loop:true,
        margin:30,
        items:4,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        nav:true,
        dots:false,
        responsive:{ 0:{items:1},560:{ items:2},767:{items:3},992:{items:4}
        }
      }; // OwlCaresoul Options
  return (
    <div>
        <section class="popular-course-area section-gap" id="campuses">
            <div class="container">
               <div class="row d-flex justify-content-center">
                  <div class="menu-content pb-70 col-lg-8">
                     <div class="title text-center">
                        <h1 class="mb-10  ensRed">Our Campuses</h1>
                     </div>
                  </div>
               </div>
               <div class="row">
                  {/* <div class="active-popular-carusel"> */}
                  <OwlCarousel className='owl-theme' {...options}>
                     <div class="single-popular-carusel">
                        <div class="thumb-wrap relative">
                           <div class="thumb relative">
                              <div class="overlay overlay-bg"></div>
                              <img class="img-fluid" src="assets/img/mbz_camp.jpg" alt="" />
                           </div>
                        </div>
                        <div class="details">
                           <a id="LinkButtonMBZ" class="ensRed" href="#">
                              <h4 class="ensRed">
                                 MBZ City Campus
                              </h4>
                           </a>
                           <p>
                              MBZ City Campus –are honored to welcome you all to this great educational edifice that aims toPreparing future leaders ...
                           </p>
                        </div>
                     </div>
                     <div class="single-popular-carusel">
                        <div class="thumb-wrap relative">
                           <div class="thumb relative">
                              <div class="overlay overlay-bg"></div>
                              <img class="img-fluid" src="assets/img/adc_camp.jpg" alt="" />
                           </div>
                        </div>
                        <div class="details">
                           <a id="LinkButtonadc" class="ensRed" href="#">
                              <h4 class="ensRed">
                                 Abu Dhabi City Campus
                              </h4>
                           </a>
                           <p>
                              The caring staff and faculty at ADC are proud to offer an unsurpassed blend of an American standards-based ...
                           </p>
                        </div>
                     </div>
                     <div class="single-popular-carusel">
                        <div class="thumb-wrap relative">
                           <div class="thumb relative">
                              <div class="overlay overlay-bg"></div>
                              <img class="img-fluid" src="assets/img/aac_camp.jpg" alt="" />
                           </div>
                        </div>
                        <div class="details">
                           <a id="LinkButtonAAC" class="ensRed" href="#">
                              <h4 class="ensRed">
                                 Al Ain City Campus
                              </h4>
                           </a>
                           <p>
                              Al Ain City Campus continues to grow and improve. Our schools aspire to engage all 1400 students in a safe learning environment ...
                           </p>
                        </div>
                     </div>
                     <div class="single-popular-carusel">
                        <div class="thumb-wrap relative">
                           <div class="thumb relative">
                              <div class="overlay overlay-bg"></div>
                              <img class="img-fluid" src="assets/img/shj_Camp.jpg" alt="" />
                           </div>
                        </div>
                        <div class="details">
                           <a id="LinkButtonshj" class="ensRed" href="#">
                              <h4 class="ensRed">
                                 Sharjah Campus
                              </h4>
                           </a>
                           <p>
                              Emirates National Schools Sharjah aims to holistically develop inquiring, caring, lifelong learners. Our program provides students ...
                           </p>
                        </div>
                     </div>
                     <div class="single-popular-carusel">
                        <div class="thumb-wrap relative">
                           <div class="thumb relative">
                              <div class="overlay overlay-bg"></div>
                              <img class="img-fluid" src="assets/img/rak_camp.jpg" alt="" />
                           </div>
                        </div>
                        <div class="details">
                           <a id="LinkButtonrak" class="ensRed" href="#">
                              <h4 class="ensRed">
                                 Ras Al Khaimah Campus
                              </h4>
                           </a>
                           <p>
                              ENS RAK Campus provides a stimulating, inquiry based learning environment both inside and outside of the classroom that ...
                           </p>
                        </div>
                     </div>
                </OwlCarousel>
                  {/* </div> */}
               </div>
            </div>
         </section>
    </div>
  )
}
