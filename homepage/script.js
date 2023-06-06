var themeColor;
        var originalSize = 16;

        $(document).ready(function() {
            $("#btnText").text('ಇನ್ನಷ್ಟು ಓದಿ')
        })

        function readMoreLess() {
            if ($("#moreContent").hasClass("hide")) {
                $("#moreContent").removeClass("hide");
                $("#btnText").text('ಕಡಿಮೆ ಓದಿ')
            } else {
                $("#moreContent").addClass("hide");
                $("#btnText").text('ಇನ್ನಷ್ಟು ಓದಿ')
            }
        }

        function changeColor() {
            sessionStorage.setItem("themeColor", "black");
            myfunction();
        }

        function defaultColor() {
            sessionStorage.setItem("themeColor", "transparent");
            myfunction();
        }

        function myfunction() {
            if (sessionStorage.getItem("currentFontSize") != null || sessionStorage.getItem("currentFontSize") != '') {
                $('body, *').css('font-size', sessionStorage.getItem("currentFontSize") + 'px');
            }
            if (sessionStorage.getItem("themeColor") === "black") {
                themeColor = sessionStorage.getItem("themeColor");
                $('h2,p,span,a,section,li,h1,h2,h3,h4,h5,h6,marquee,nav,header,button,div,body,navbar,td,th, footer').css("background-color", themeColor);
                $('h2,p,span,a,section,li,h1,h2,h3,h4,h5,h6,marquee,nav,header,button,div,body,navbar,td,th').css("color", "white");
                $(".captcha-img").css("background-color", "white")
                $(".cm-logo ,.carousel-caption").css("background-color", "transparent")

            } else if (sessionStorage.getItem("themeColor") === "transparent") {
                //themeColor = sessionStorage.getItem("themeColor");
                //$('body, *').css("background-color", themeColor)
                //$('body, *').css("color", "black")
                $(".captcha-img").css("background-color", "transparent")
                sessionStorage.clear();
                location.reload();

            }

        }

        $('#increasetext').click(function() {
            //curSize = originalSize + 2;
            curSize = sessionStorage.getItem("currentFontSize") != null ? (JSON.parse(sessionStorage.getItem("currentFontSize")) + 2) : originalSize + 2
            console.log(curSize)
            if (curSize <= 20) {
                $('body, *').css('font-size', curSize);
                sessionStorage.setItem("currentFontSize", curSize)
            }

        });

        $('#resettext').click(function() {
            sessionStorage.removeItem("currentFontSize");
            location.reload();
        });

        $('#decreasetext').click(function() {
            curSize = sessionStorage.getItem("currentFontSize") != null ? (JSON.parse(sessionStorage.getItem("currentFontSize")) - 2) : originalSize - 2;
            if (curSize >= 14) {
                $('body, *').css('font-size', curSize);
                sessionStorage.setItem("currentFontSize", curSize)
            }

        });