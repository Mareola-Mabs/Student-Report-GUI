/*jQuery Initialization*/
$('document').ready(()=>{

    /*For Mobile Tap-Highlight-Color*/
    $("body").css("-webkit-tap-highlight-color", "transparent");
    // $("body").css({"transform": "translateX(-200%)", "transition":"0.5s"})

    /*For Shrink Animation on Submit*/
    $('.submit').on("click", ()=>{
        switch(true){
            case $("#name").val()=="":
                alert("Please Enter Your Full Name")
                $("#name").focus()
                break;
            
            case $("#matric").val()=="":
                alert("Please Enter Your Matric")
                $("#matric").focus()
                break;

            default:
                var nameId = $("#name").val()
                $(".name_info").text(nameId)
                $(".main__page-login--text").text("Logging in...")
                setTimeout(()=>{
                    $(".main__page-login--container").addClass("shrink")
                    $(".main__page-login--input").each(()=>{
                        $(".main__page-login--input").addClass("shrink")
                    })
                    $(".submit").addClass("shrink")
                    $(".main__page-login--password").addClass("shrink")
                    $(".main__page-login--text").css("fontSize", "0.9rem")
                    $(".main__page-login--text").text("Logged In")
                }, 1500)
            
                setTimeout(()=>{
                    $("body").css({"transform": "translateX(-100%)", "transition":"0.5s"})
                }, 2500)

        }
        return false
        
    })

    // For final Page
    $(".switch").on("click", ()=>{
        $("body").css({"transform": "translateX(-200%)", "transition":"0.5s"})
    })

    // To go Back
    $(".one").on("click", ()=>{
        $("body").css({"transform": "translateX(-100%)", "transition":"0.5s"})
    })












})
/*End of jQuery Initialization*/