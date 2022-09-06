$(document).ready(function () {

    $("#enselectcampus").click(function () {
        setCampusView();
    });
 
    $("#arselectcampus").click(function () {
        setCampusView();
    });



    function setCampusView() {

        //var selector = document.getElementById('campuses');
        //if(typeof selector.scrollIntoView !== 'undefined' )
        //    selector.scrollIntoView();

        $('html, body').animate({
            scrollTop: $("#campuses").offset().top
        }, 1000);
    }

    function fncloseCampusPopUp(obj) {

        alert(obj);
        console.log(obj);
        $("#SelectCampusModal").modal('hide');

    }

    //setInterval(function () {
    //    alert("hello");
    //    // Set new background image
    //  //  $("#galleryContent").css({ 'background': 'url(' + banners[counting]['Source'] + ') top left' });
    //}, 100);
  
    //var body = $('.banner-area');
    //var backgrounds = [
    //  'url(http://static.jsbin.com/images/jsbin_static.png)',
    //  'url(http://static.jsbin.com/images/popout.png)'];
    //var current = 0;

    //function nextBackground() {
    //    body.css(
    //        'background',
    //    backgrounds[current = ++current % backgrounds.length]);

    //    setTimeout(nextBackground, 100);
    //}
    //setTimeout(nextBackground, 100);
    //body.css('background', backgrounds[0]);



});

