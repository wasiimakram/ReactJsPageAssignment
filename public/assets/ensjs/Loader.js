function ShowProgress() {
    alert("ok..");
}


function ShowLoader() {
    alert("show..");
    document.getElementById("Loader").style.visibility = "visible";
}

function HideLoader() {
    alert("hide..");
    document.getElementById("Loader").style.visibility = "hidden";


    //var element = document.getElementById("Loader");
   // element.classList.add("hideDiv");
}

function showhideloader() {

    var x = document.getElementById("Loader");
    alert(x.style.display);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

    
//$('form').live("submitLoader", function () {
//    ShowProgress();
//});

