import React from 'react'

export default function Banner() {
  return (
    <div>
        <div>
            <section class="banner-area relative" id="home" >
               <div class="overlay overlay-bg"></div>
               <div class="container">
                  <div class="row fitscreen d-flex align-items-center justify-content-between pt-120">
                     <div class="banner-content col-lg-9 col-md-12 pt-0">
                        <br />
                        <h3 id="ContentPlaceHolder1_campusName" class="ensGreen"></h3>
                        <br />
                        <br />
                        <h2 class="text-uppercase topRegNum1" id="bannerTitle1">Registration for Academic Year 2022-2023
                        </h2>
                        <h1 class="text-uppercase ensRed"  id="bannerTitle2">is now open
                        </h1>
                     </div>
                  </div>
                  <div class="row pt-0 pb-10">
                     <div class="banner-content col-lg-3 ">
                        <div id="bannerActions" class="quickActions">
                           <h3 class='ensGreen topRegNum2' >Registration</h3>
                           <br />
                           <a href='#'id='btnCmp' class='btnSelectRed topRegNum3'>Enroll Now</a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* <!-- End banner Area --> */}
            <br />
         </div>
         <br />
         <br />
    </div>
  )
}
