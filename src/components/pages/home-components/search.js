import React from 'react'

export default function Search() {
  return (
    <div>
         <section class="search-course-area relative" >
            <div class="overlay overlay-bg"></div>
            <div class="container">
               <div class="row justify-content-between align-items-center text-center">
                  <div class="col-lg-12 col-md-12 search-course-left">
                     <h1 class="text-white pt-30">
                        <br />
                        ENS Online Services
                     </h1>
                     <div class="row details-content text-center  align-items-center">
                        <div class="col-lg-3  col-sm-5 single-detials align-items-center">
                           <span class="lnr lnr-graduation-hat text-white  fz-30"></span>
                           <a href="#" >
                              <h4>Enroll Now</h4>
                           </a>
                        </div>
                        <div class="col-lg-3 col-sm-5 single-detials align-items-center">
                           <img src="assets/img/icon/credit-card-with-tick.png" class="imgabc" />                                
                           <a href="#" >
                              <h4>Online Payment</h4>
                           </a>
                        </div>
                        <div class="col-lg-3 col-sm-5 single-detials align-items-center">
                           <span class="lnr lnr-laptop text-white  fz-30"></span>
                           <a href="#" >
                              <h4>Re-registration</h4>
                           </a>
                        </div>
                        <div class="col-lg-3 col-sm-5 single-detials align-items-center">
                           <span class="lnr text-white fz-30">&#63;</span>
                           <a href="#" >
                              <h4>Help</h4>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}
