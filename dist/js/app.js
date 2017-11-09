var dataproject = {
    init: function() {
        dataproject.mouseFuncs();
    },
    share: function() {
        $(".icon-twitter").on("click", function() {
            var tweet = "";
            var url = "";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".icon-facebook").on("click", function() {
            var picture = "";
            var title = "";
            var description = "";
            var url = "";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    },
    mouseFuncs: function() {
        $(".artistNav__arrow, .artistNav__dropdown").on("click", function() {
            $(".artistNav__dropdown").toggleClass("active");
        });
        $(".artistNav__dropdown__item").on("click", function() {
            var newArtist = $(this).text();
            var newNum = $(this).data("id");
            $(".activeArtist").removeClass("activeArtist");
            $(this).addClass("activeArtist");
            $(".artistNav__dropdown__currItem").text(newArtist);
            $(".artistNav__num .floatRight").text(newNum);
        });
    }
};

$(document).ready(function() {
    dataproject.init();
    console.log("connected");
});