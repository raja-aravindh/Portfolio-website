function hover(element, hover){
    $(element).on("mouseover", function(){
        $(this).addClass(hover);
        if (element === ".button" || element === ".img-shadow"){ 
            $(this).removeClass("img-shadow");
           
        }

    })
    
    $(element).on("mouseout", function(){
        $(this).removeClass(hover);
        if (element === ".button" || element === ".img-shadow"){ 
            $(this).addClass("img-shadow");
          
        }
    });
    
}

// onscroll = function(ev) {
//    if ((innerHeight + scrollY) >= document.body.offsetHeight)(){
//        $("body").fadeOut();
//        this.setTimeout(() =>{
//            $("main").load("./trail.html");
//            this.document.documentElement.scrollTop = 0;
//            $("body").fadeIn();
//        }, 400)
//    }

// };

hover(".button","hover");
hover(".bi", "connect-icons-hover");
hover(".tel-mail", "tel-mail-hover");
hover(".nav-link", "active");
hover(".img-shadow","hover");

