import React from 'react'

export default function Header() {
  return (
    <div>
        <div class="icon-bar1"  >
            <ul>
               <li><a class="f" href="#"><i class="fa fa-facebook"></i></a></li>
               <li><a class="t" href="#"><i class="fa fa-twitter"></i></a></li>
               <li><a class="i" href="#"><i class="fa fa-instagram"></i></a></li>
               <li><a class="l" href="#"><i class="fa fa-linkedin"></i></a></li>
               <li><a class="y" href="#"><i class="fa fa-youtube"></i></a></li>
               <li><a class="tf" href="tel:123456"><i class="fa fa-phone"></i></a></li>
            </ul>
         </div>
         <header id="header">
            <div class="header-top">
               <div class="container">
                  <div class="row">
                     <div id="socialDiv" class="col-lg-12  col-sm-12 col-md-12 col-xl-12 header-top-right no-padding">
                        <div class="topHeaderPut">
                           <ul>
                              <li><a href="#">Academic Staff Login</a></li>
                           </ul>
                        </div>
                        <div class="topHeaderPut2">
                           <a id="lnkBtnLang" class="text mr-5" href="#">العربية</a>
                           <label class="text-white mr-5">|</label>
                           <div id="dvCampus" class="showCampusMenu topButt2"  >
                              <label id="lblCampusInfo" class="text-white mr-5">Campus</label>
                              <i class="fa fa-caret-down text-white"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="container main-menu" id="mobileNav">
               <div class="row align-items-center justify-content-between d-flex">
                  <div id="logo">
                     <a href="#">
                     <img src="assets/img/ens_logo.png" alt="" title="" /></a><br />
                  </div>
                  <nav id="nav-menu-container" class="text-center">
                     <ul class="nav-menu">
                        <li><a href="#">Home</a></li>
                        <li class="menu-has-children">
                           <a href="#">About</a>
                           <ul class="text-left">
                              <li><a href="#">Welcome Message</a></li>
                           </ul>
                        </li>
                        <li class="menu-has-children">
                           <a href="#">Academics</a>
                           <ul class="text-left">
                              <li>
                                 <a href="#">Curriculum</a>
                                 <ul class="text-left">
                                    <li><a href="#">Primary Years Program (PYP)</a></li>
                                    <li><a href="#">Middle Years Program (MYP)</a></li>
                                    <li id="dpMenu"><a href="#">Diploma Program (DP)</a></li>
                                 </ul>
                              </li>
                              <li id="grMenu"><a href="#">Graduation Requirements</a></li>
                              <li><a href="#">Accreditations</a></li>
                              <li><a href="#">Assessment and Reporting</a></li>
                           </ul>
                        </li>
                        <li class="menu-has-children">
                           <a href="#">Admissions</a>
                           <ul class="text-left">
                              <li><a href="#">Admission Process</a></li>
                           </ul>
                        </li>
                        <li class="menu-has-children">
                           <a href="#">Parent Guide</a>
                           <ul class="text-left">
                              <li><a href="#">Downloads</a></li>
                           </ul>
                        </li>
                        <li class="menu-has-children">
                           <a href="#">Campus Life</a>
                           <ul class="text-left">
                              <li><a href="#">Gallery</a></li>
                           </ul>
                        </li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                     </ul>
                  </nav>
                  {/* <!-- #nav-menu-container --> */}
               </div>
            </div>
         </header>
    </div>
  )
}
