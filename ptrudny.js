var LICZBA_KAFELKOW = 80;     //80
var KAFELKI_NA_RZAD = 10;      //10
var kafelki = [];
var pobraneKafelki = [];
var moznaBrac = true;
var liczbaRuchow = 0;
var paryKafelkow = 0;
var obrazkiKafelkow = [
    'css/images/title_1.png',
    'css/images/title_2.png',
	'css/images/title_3.png',
	'css/images/test1.png',
	'css/images/test2.png',
	'css/images/test3.png',
	'css/images/test4.png',
	'css/images/test5.png',
	'css/images/test6.png',
	'css/images/test7.png',
	'css/images/test8.png',
	'css/images/test9.png',
	'css/images/test10.png',
	'css/images/test11.png',
	'css/images/test12.png',
	'css/images/test13.png',
	'css/images/test14.png',
	'css/images/test15.png',
	'css/images/test16.png',
	'css/images/test17.png',
	'css/images/test18.png',
	'css/images/test19.png',
	'css/images/test20.png',
	'css/images/test21.png',
	'css/images/test22.png',
	'css/images/test23.png',
	'css/images/test24.png',
	'css/images/test25.png',
	'css/images/test26.png',
	'css/images/test27.png',
	'css/images/test28.png',
	'css/images/test29.png',
	'css/images/test30.png',
	'css/images/test31.png',
	'css/images/test32.png',
	'css/images/test33.png',
	'css/images/test34.png',
	'css/images/test35.png',
	'css/images/test36.png',
	'css/images/test37.png',  
];
 
function startGame() {
    kafelki = [];
    pobraneKafelki = [];
    moznaBrac = true;
    liczbaRuchow = 0;
    paryKafelkow = 0;
 
    var plansza = $('.plansza').empty();
 
    for (var i=0; i<LICZBA_KAFELKOW; i++) {
        kafelki.push(Math.floor(i/2));
    }
 
    for (i=LICZBA_KAFELKOW-1; i>0; i--) {
        var swap = Math.floor(Math.random()*i);
        var tmp = kafelki[i];
        kafelki[i] = kafelki[swap];
        kafelki[swap] = tmp;
    }
 
    for (i=0; i<LICZBA_KAFELKOW; i++) {
        var tile = $('<div class="kafelek"></div>');
        plansza.append(tile);
        tile.data('cardType',kafelki[i]);
        tile.data('index', i);
        tile.css({
            left : 5+(tile.width()+5)*(i%KAFELKI_NA_RZAD)
        });
        tile.css({
            top : 5+(tile.height()+5)*(Math.floor(i/KAFELKI_NA_RZAD))
        });
        tile.bind('click',function() {klikniecieKafelka($(this))});
    }
    $('.ruchy').html(liczbaRuchow);
}
 
function klikniecieKafelka(element) {
    if (moznaBrac) {
        //je?eli jeszcze nie pobrali?my 1 elementu
        //lub je?eli index tego elementu nie istnieje w pobranych...
        if (!pobraneKafelki[0] || (pobraneKafelki[0].data('index') != element.data('index'))) {
            pobraneKafelki.push(element);
            element.css({'background-image' : 'url('+obrazkiKafelkow[element.data('cardType')]+')'})    
        }
 
        if (pobraneKafelki.length == 2) {
            moznaBrac = false;
			//                je?eli      |            jest taki sam jak         | oznacza, ?e elementy s? takie same
			         //  odpala si?       V      wtedy funkcja "usunKafelki"     V     je?eli nie s? takie same w?acza sie funkcja "zresetujKafelki"     
            if (pobraneKafelki[0].data('cardType') == pobraneKafelki[1].data('cardType')) {
                setTimeout('usunKafelki()', 1000);
            } else {
                setTimeout('zresetujKafelki()', 1000);
            }
 
            liczbaRuchow++;
            $('.ruchy').html(liczbaRuchow)
        }
    }
}
 
function usunKafelki() {
    pobraneKafelki[0].fadeOut(function() {
        $(this).remove();
    });
    pobraneKafelki[1].fadeOut(function() {
        $(this).remove();
 
        paryKafelkow++;
        if (paryKafelkow >= LICZBA_KAFELKOW / 2) {
            alert('Gratulacje!');
        }
        moznaBrac = true;
        pobraneKafelki = new Array();
    });
}
 //Je?eli wybrane kafelki si? ró?ni? od siebie zostan? zakryte wybranym wcze?niej obrazkiem
                                             //       |
											//        V
function zresetujKafelki() {
    pobraneKafelki[0].css({'background-image':'url(css/images/title.png)'})
    pobraneKafelki[1].css({'background-image':'url(css/images/title.png)'})
    pobraneKafelki = new Array();
    moznaBrac = true;
}
 
$(document).ready(function() {
 
    $('.startGame').click(function() {
        startGame();
    });
 
})