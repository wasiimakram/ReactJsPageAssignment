jQuery(function ($) {
    // custom formatting example

    var i = 0;
    var bannerActionstring1 = "<h3 class='ensGreen' style='font-size:20px;padding-bottom:10px;'>eServices</h3>Pay for school fees and keep your information updated through our online portal<br /><br /><a href='https://eservices.ens.sch.ae/' target='_blank' id='btnCmp' class='btnSelectRed' style='font-size:14px;padding:8px !important;'>Secure Login</a>";
    var bannerActionstring2 = "<h3 class='ensGreen' style='font-size:20px;padding-bottom:10px;'>Registration is now open in KG1 to Grade 12</h3><br /><a href='https://eservices.ens.sch.ae' target='_blank' id='btnCmp' class='btnSelectRed' style='font-size:14px;padding:8px !important;'>Enroll Now</a>";
    
    var bannerActionstring7 = "<h3 class='ensGreen' style='font-size:20px;padding-bottom:10px;'>Re-registration</h3>You can now pay re-registration fees safely and easily through our online portal<br /><br /><a href='https://play.google.com/store/apps/details?id=com.ens.eservices' target='_blank' id='btnCmp' style='font-size:12px;padding:4px !important;'><img width=120px; alt='googlePlayBtn' src='assets/img/googlePlayBtn.jpg' /></a><a href='https://apps.apple.com/us/app/ens-e-services/id1586836056' target='_blank' id='btnCmp' style='font-size:12px;padding:4px !important;'><img width=120px; alt='appStoreBtn' src='assets/img/appStoreBtn.jpg' /></a>";
    var bannerActionstring3 = "<h3 class='ensGreen' style='font-size:20px;padding-bottom:10px;'>Reopening Plan :</h3><a href='https://ens.sch.ae/Pages/EN/returningback.aspx' target='_blank' id='btnCmp' class='btnSelectRed' style='font-size:14px;padding:8px !important;'>Learn More</a>";
    var bannerActionstring11 = "<h3 class='ensGreen' style='font-size:20px;padding-bottom:10px;'>Learn more about our awards</h3><a href='https://youtu.be/khdhDkQgYRo' target='_blank' id='btnCmp' class='btnSelectRed' style='font-size:14px;padding:8px !important;'>Watch Now</a>";
    var bannerActionstring12 = "<h3 class='ensGreen' style='font-size:20px;padding-bottom:10px;'>Registration is now open in KG1 to Grade 5</h3><br /><a href='https://www.ens.sch.ae/DubaiCampus/Index.aspx' target='_blank' id='btnCmp' class='btnSelectRed' style='font-size:14px;padding:8px !important;'>Learn more</a>";
    var bannerActionstring13 = "<h3 class='ensGreen' style='font-size:20px;padding-bottom:10px;'>Watch the full ceremony</h3><br /><a href='https://www.youtube.com/watch?v=lGFHACCppjs&t=858s' target='_blank' id='btnCmp' class='btnSelectRed' style='font-size:14px;padding:8px !important;'>Watch Now</a>";
    var bannerActionstring14 = "<h3 class='ensGreen' style='font-size:20px;padding-bottom:10px;'>Download Now</h3><br/><a href='https://play.google.com/store/apps/details?id=com.ens.eservices' target='_blank' id='btnCmp' style='font-size:12px;padding:4px !important;'><img width=120px; alt='googlePlayBtn' src='assets/img/googlePlayBtn.jpg' /></a><a href='https://apps.apple.com/us/app/ens-e-services/id1586836056' target='_blank' id='btnCmp' style='font-size:12px;padding:4px !important;'><img width=120px; alt='appStoreBtn' src='assets/img/appStoreBtn.jpg' /></a>";

    var header_banner = $(".banner-area ");
    var title_banner1 = $("#bannerTitle1");
    var title_banner2 = $("#bannerTitle2");
    var bannerActions = $("#bannerActions");

    var banners = ["assets/img/banner/banner9.png", "assets/img/banner/main/Main11.jpg", "assets/img/banner/main/Main6.jpg", "assets/img/banner/main/Main1.jpg", "assets/img/banner/main/Main2.jpg"];
    var bannerTitle1 = ["Emirates National Schools E-Services App", "An awards winning IB  World School offering quality education for KG to Grade 12 students", "Re-registration is now available", "Secure and Easy", "Registration for Academic Year 2022-2023"];
    var bannerTitle2 = ["is now available", "", "online", "online services", "is now open"];
    var banner_Actions = [bannerActionstring14, bannerActionstring11, bannerActionstring7, bannerActionstring1, bannerActionstring2];

    var banner1 = "assets/img/banner/main/Main2.jpg";
    header_banner.css('backgroundImage', 'url("' + banner1 + '")');

    window.setInterval(function () {

        i = (i >= banners.length) ? 0 : i;
        //change the background image
        header_banner.css('backgroundImage', 'url("' + banners[i] + '")');
        title_banner1.html(bannerTitle1[i]);
        title_banner2.html(bannerTitle2[i]);
        bannerActions.html(banner_Actions[i]);
        i++;

    }, 5000);
})