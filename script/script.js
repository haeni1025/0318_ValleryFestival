$(function () {

    /* GNB 메뉴 */
    $("#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(1000);
    });
    $("#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(1000);
    });
    /* GNB 메뉴 */


    /* 슬라이드 쇼 */
    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#slideShuttleFrame").animate({
                "margin-left": "-800px"
            },
            1000,
            "swing",
            function () {
                $("#slideShuttleFrame").css({
                    "margin-left": "0"
                });

                $("#slideShuttleFrame>a:first-child").insertAfter("#slideShuttleFrame>a:last-child");

            }
        );
    }

/*                            var selector = "#slideShuttleFrame";
                            $(selector + ">a:first").insertAfter(selector + ">a:last");*/

    /* 슬라이드 쇼 */



    /* 모달레이어 팝업 */
    $("#bbsNotice table tr:first>td").click(function () {
        $("#modalLayerBg").css({
            "display": "block"
        });
    });

    $("#closeBtn>button").click(function () {
        $("#modalLayerBg").css({
            "display": "none"
        });
    });
    /* 모달레이어 팝업 */

});
