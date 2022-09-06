import React from 'react'
import $ from "jquery";
import Script from '../pages/home-components/script';

export default function Footer() {
    // <Script />
    $(document).ready(function () {
        //------- Mobile Nav  js --------//  
        if ($('#nav-menu-container').length) {
            var $mobile_NavContent = $('#mobileNavEN').clone().prop({
                id: 'mobileNavContent'
            });
            $mobile_NavContent.removeClass("mfp-hide");
            //var $mobile_nav = $('#nav-menu-container').clone().prop({
            //    id: 'mobile-nav'
            //});
            var $mobile_nav = $mobile_NavContent.find('#nav-menu-containerEN').clone().prop({
                id: 'mobile-nav'
            });
    
            $mobile_nav.find('> ul').attr({
                'class': '',
                'id': ''
            });
    
            $mobile_nav.find('a ').css("color", "#000000");
    
            $mobile_nav.find('li').addClass("justify-content-center main-menu-mobile");
            $mobile_nav.find('li> a').css("width:100%");
           // $mobile_nav.find('li> a').addClass("fw500 fz-18");
            //$mobile_nav.find('li').css("border-bottom: 1px solid #39353e");
            $('body').append($mobile_nav);
    
            //$("li.menu-has-children").find("ul > li ").css("background-color", "RGBA(77, 77, 77,0.80)")
            //$("li.menu-has-children").find("ul > li > a").css("background-color", "RGBA(255, 255, 255,0.50)");
            $mobile_nav.find("li.menu-has-children").find("ul > li > a").css("font-weight", "300");
            $mobile_nav.find("li.menu-has-children").children().find("li.menu-has-children >a").css("font-weight", "500");
            $mobile_NavContent.find('#nav-menu-containerEN').remove();
            $('#mobile-nav').prepend($mobile_NavContent);
            $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
            $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down mr-20"></i>');
            $(document).on('click', '.menu-has-children i', function (e) {
                $(this).next().toggleClass('menu-item-active');
                $(this).nextAll('ul').eq(0).slideToggle();
                $(this).toggleClass("lnr-chevron-up lnr-chevron-down");            
                $('.menu-has-children li>a').addClass("pl-0");
                $('.menu-has-children').addClass("pl-0");
                $('.menu-has-childre li> a').css("width:100%");
    
                if ($('.menu-has-children li:last-child').hasClass('justify-content-center main-menu-mobile')) {
                    $('.menu-has-children li:last-child').removeClass("justify-content-center main-menu-mobile").addClass("justify-content-center")
    
    
                }
    
    
            });
    
            $(document).on('click', '#mobile-nav-toggle', function (e) {
                $('body').toggleClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                $('#mobile-body-overly').toggle();
            });
    
            $(document).on('click', function (e) {
                var container = $("#mobile-nav, #mobile-nav-toggle");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                        $('#mobile-body-overly').fadeOut();
                    }
                }
            });
        } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
            $("#mobile-nav, #mobile-nav-toggle").hide();
        }
    
        //------- Smooth Scroll  js --------//  
    
        $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
            if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
                var target = $(this.hash);
                if (target.length) {
                    var top_space = 0;
    
                    if ($('#header').length) {
                        top_space = $('#header').outerHeight();
    
                        if (!$('#header').hasClass('header-fixed')) {
                            top_space = top_space;
                        }
                    }
    
                    $('html, body').animate({
                        scrollTop: target.offset().top - top_space
                    }, 1500, 'easeInOutExpo');
    
                    if ($(this).parents('.nav-menu').length) {
                        $('.nav-menu .menu-active').removeClass('menu-active');
                        $(this).closest('li').addClass('menu-active');
                    }
    
                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
                        $('#mobile-body-overly').fadeOut();
                    }
                    return false;
                }
            }
        });
    });
    return (
    <div>
       
         <footer class="footer-area section-gap">
            <div class="container" style={{width: "100% !important"}}>
               <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6">
                     <div class="single-footer-widget">
                        <h4 class="ensGreen">About us</h4>
                        <ul class="fw500">
                           <li><a href="#">Welcome Message</a></li>
                           <li><a href="#"> Mission and Vision</a></li>
                           <li><a href="#"> School Board Members</a></li>
                           <li><a href="#"> Management Team</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                     <div class="single-footer-widget">
                        <h4 class="ensGreen">Academics</h4>
                        <ul class="fw500">
                           <li><a href="#"> Curriculum</a></li>
                           <li><a href="#"> Accreditations</a></li>
                           <li><a href="#"> Assessment and Reporting</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                     <div class="single-footer-widget">
                        <h4 class="ensGreen">Admissions</h4>
                        <ul class="fw500">
                           <li><a href="#"> Admission Process</a></li>
                           <li><a href="#"> Admission Policy</a></li>
                           <li><a href="#"> Tuition Policies & Procedures</a></li>
                           <li><a href="#"> School Fees </a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                     <div class="single-footer-widget">
                        <h4 class="ensGreen">Campuses</h4>
                        <ul  class="fw500">
                           <li>
                              <a id="LinkButton1" class="text mr-5" href="#">  Abu Dhabi City Campus</a>
                           </li>
                           <li>
                              <a id="LinkButton5" class="text mr-5" href="#"> Al Ain City Campus</a>
                           </li>
                           <li>
                              <a id="LinkButton4" class="text mr-5" href="#"> MBZ City Campus</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="footer-bottom row align-items-center justify-content-between">
                  <div class="col-lg-12 col-sm-12 text-center">
                     <a>
                        Copyright ©
                        <script>document.write(new Date().getFullYear());</script>
                        by Emirates National Schools All Rights Reserved
                     </a>
                  </div>
               </div>
            </div>
         </footer>
         {/* <!-- End footer Area --> */}
         <div class="container main-menu mfp-hide" id="mobileNavEN">
            <div class="row align-items-center justify-content-between d-flex">
               <div id="enlogo">             
                  <a href="#">
                  <img src="assets/img/ens_logo.png" alt="" title="" /></a>
               </div>
               <nav id="nav-menu-containerEN" class="text-center">
                  <ul class="nav-menu">
                     <li><a href="#">Home</a></li>
                     <li class="menu-has-children">
                        <a href="#">About</a> 
                        <ul>
                           <li><a href="#">Welcome Message</a></li>
                           <li><a href="#">Mission and Vision</a></li>
                        </ul>
                     </li>
                     <li class="menu-has-children">
                        <a href="#">Academics</a>
                        <ul>
                           <li class="menu-has-children">
                              <a href="#">Curriculum</a>
                              <ul>
                                 <li><a href="#">Primary Years Program (PYP)</a></li>
                                 <li><a href="#">Middle Years Program (MYP)</a></li>
                                 <li id="dpmbMenu"><a href="#">Diploma Program (DP)</a></li>
                              </ul>
                           </li>
                           <li id="grmbMenu"><a href="#">Graduation Requirements</a></li>
                        </ul>
                     </li>
                     <li class="menu-has-children">
                        <a href="#">Admissions</a>
                        <ul>
                           <li><a href="#">Admission Process</a></li>
                           <li><a href="#">Admission Policy</a></li>
                           <li><a href="#">Tuition Policies & Procedures</a></li>
                           <li><a href="#">School Fees</a> 
                           </li>
                           <li><a href="#">Bus,Canteen & Uniform </a>
                           </li>
                           <li><a href="#">Registration Offices </a></li>
                           <li><a href="#">Registration 2022</a></li>
                           <li><a href="#">Virtual Tour</a></li>
                        </ul>
                     </li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#">Careers</a></li>
                  </ul>
               </nav>
               {/* <!-- #nav-menu-container --> */}
            </div>
         </div>
         
    </div>
  )
  
}
