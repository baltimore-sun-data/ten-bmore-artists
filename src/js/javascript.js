var tenArtists = {
	init: function(){
		if(window.location.hash) {
			$(document).scrollTop($(window.location.hash.replace(/!/, '')).offset().top);
		}
		tenArtists.share();
		tenArtists.navFuncs();
	},
	share: function(){
		$(".fa-twitter").on("click", function(){
			var tweet = "Pay attention to these up-and-coming artists grown right in Baltimore."; //Tweet text
			var url = "http://data.baltimoresun.com/features/baltimore-music-2017/"; //Interactive URL
			var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
			window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
		$(".fa-facebook").on("click", function(){
			var picture = "http://data.baltimoresun.com/features/baltimore-music-2017/images/thumb.jpg"; //Picture URL
			var title = "10 Baltimore Musicians on the Rise"; //Post title
			var description = "Pay attention to these up-and-coming artists grown right in Baltimore."; //Post description
			var url = "http://data.baltimoresun.com/features/baltimore-music-2017/"; //Interactive URL
	    	var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";    		
			window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;
		});
	},
	navFuncs: function(){
		var navVisible = false;
		var sectionsPos = [];
		var sectionCount = 0;
		var scrollPos, currPos;

		getSecitonPos();
		window.addEventListener('resize', function() {
			getSecitonPos();
		});
		$(document).on('scroll', function() {
			clearTimeout($.data(this, 'scrollTimer'));
			$.data(this, 'scrollTimer', setTimeout(function() {
				scrollPos = $(this).scrollTop();
				if(navVisible == false) {
					if(scrollPos > sectionsPos[0]) {
						$('.artistNavWrapper').addClass('visible');
						navVisible = true;
					};
				} else {
					if(scrollPos < sectionsPos[0]) {
						$('.artistNavWrapper').removeClass('visible');
						navVisible = false;
					};
				};
				if(scrollPos > sectionsPos[sectionCount]) {
					while(scrollPos > sectionsPos[sectionCount]) {
						sectionCount++;
					};
					currPos = sectionCount;
					sectionCount = 0;
				};
				$('.activeArtist').removeClass('activeArtist');
				$('.artistNav__dropdown__item[data-id=' + '"'+currPos+'"' + ']').addClass('activeArtist');
				$('.artistNav__dropdown__currItem').text($('.artistNav__dropdown__item.activeArtist').text());
				$('.artistNav__num .floatRight').text(currPos);
				if(currPos >= 0) {
					window.location.hash = '!' + getHash(currPos);
				}
			}, 100));
		});

		$('.artistNav__arrow, .artistNav__dropdown').on('click', function (){
			$('.artistNav__dropdown').toggleClass('active');
		});
		$('.artistNav__dropdown__item').on('click', function() {
			var newArtist = $(this).text();
			currPos = $(this).data('id');
			$('.activeArtist').removeClass('activeArtist');
			$(this).addClass('activeArtist');
			$('.artistNav__dropdown__currItem').text(newArtist);
			$('.artistNav__num .floatRight').text(currPos);
			window.location.hash = '!' + getHash(currPos);
			$(document).scrollTop($(window.location.hash.replace(/!/, '')).offset().top);
		});

		function getSecitonPos(){
			sectionsPos = [];
			for(var i=0;i<10;i++) {
				sectionsPos.push($('.artist--' + i).position().top-100);
			}
		};
		function getHash(id){
			switch(id) {
				case 1:
					return 'pesodamafia';
					break;
				case 2:
					return 'snailmail';
					break;
				case 3:
					return 'riplay';
					break;
				case 4:
					return 'postpink';
					break;
				case 5:
					return 'lorchoc';
					break;
				case 6:
					return 'yggtay';
					break;
				case 7:
					return 'usandusonly';
					break;
				case 8:
					return 'bandhuntaizzy';
					break;
				case 9:
					return '3lon';
					break;
				case 10:
					return 'amyreid';
					break;
				default:
					return '';
					break;
			};
		};
	}
}
$(document).ready(function(){
	tenArtists.init();
	console.log("connected");
});