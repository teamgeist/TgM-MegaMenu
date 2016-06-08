$(window).load(function(){
	megaMenu();
});

function megaMenu(){
	//Options
	//Breite ab wann das javascript ausgeloest wird
	var minTriggerWidth = 1000;
	//Menu oeffnung methode(hover oder click)
	var opening = "click";

	var breite = parseInt($('html').css('width'));
	if(breite >= minTriggerWidth){
		var overH = 0;
		//Bitte die Function je nach Seiten anforderung aendern
		calcOverlayHeight();
		// Add overlay
		$('<div class="m-overlay" style="width:100%; height:'+overH+'px"></div>').appendTo('section.main-content');

		var $overlay = $('.m-overlay');

		//Opening je nach Auswahl
		switch(opening){
			case 'hover':
				$('li.mm1').hover(function(){
					$($overlay+', div.megamenu').finish();
					$overlay.css('z-index',5);
					$('div.megamenu',this).css('z-index',10);
					$overlay.add('div.megamenu',this).fadeTo('250',1);
				}, function(){
					$('div.megamenu',this).add('.m-overlay').fadeTo('250',0,function(){
						$('.m-overlay,div.megamenu').css('z-index',-1);
					});
				});
				break;
			case 'click':
				$('li.mm1').each(function(){
					//Entferne das href
					$('a.mm1,a.mm1-act,a.mm1.active',this).removeAttr('href');
				});
				//entferne hover, wird per js gemacht damit das menu auch ohne js funktioniert
				$('li.mm1').hover(function(){
					$('div.megamenu',this).css('opacity',0);
					$('div.megamenu',this).css('z-index',-1);
				});
				$('li.mm1 a.mm1').click(function(){
					var el = $(this).parent().find('div.megamenu');
					var aTag = $(this);
					$('a.mm1').not(aTag).removeClass('open');
					$('div.megamenu').not(el).removeClass('mega-open');
					if(el.hasClass('mega-open')){
						aTag.removeClass('open');
						el.removeClass('mega-open');
						$overlay.fadeTo('250',0);
						$overlay.css('z-index',-1);
					}else{
						aTag.addClass('open');
						el.addClass('mega-open');
						$overlay.css('z-index',5);
						$overlay.fadeTo('250',1);
					}
				});
				$(document).on('click', function(event) {
					if (!$(event.target).closest('ul.mm1').length) {
						$('div.megamenu').removeClass('mega-open');
						$('li.mm1 a.mm1').removeClass('open');
						$overlay.fadeTo('250',0, function () {
							$overlay.css('z-index',-1);
						});
					}
				});
				break;
			default:
				console.log('megamenu fehler bei opening settings');
		}
		//Setzt Megamenu Hoehe
		var height = $('div.megamenu').data('height');
		//Zieht padding von den inner Elementen ab(geht von dem 3 Spaltigen Gridelement aus)
		var padding = parseInt($('div.megamenu').css('padding-top'))+parseInt($('div.megamenu').css('padding-bottom'));
		$('div.megamenu .links, div.megamenu .rechts').css('height', (height-padding)+'px');
		$('div.megamenu').css('height', (height)+'px');
	}

	function calcOverlayHeight(){
		overH += $('section.main-content').height();
		overH += $('hr.trenner-footer').outerHeight(true);
		overH += $('footer').height();
	}
}