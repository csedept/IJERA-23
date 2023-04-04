document.onreadystatechange = function preloader() {
    if (document.readyState !== "complete") {
        let preloader = document.getElementById("loader");
        document.querySelector(
        "body").style.visibility = "hidden";
        document.querySelector(
        "#loader").style.visibility = "visible";
        setTimeout(function() {
            preloader.style.visibility = "hidden";
            document.querySelector(
                "#loader").style.display = "none";
                document.querySelector(
                "body").style.visibility = "visible";
          }, 2500);
    }
};

    