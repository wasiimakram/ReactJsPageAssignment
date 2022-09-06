import $ from "jquery";
import React from 'react'

export default function Script() {

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
}