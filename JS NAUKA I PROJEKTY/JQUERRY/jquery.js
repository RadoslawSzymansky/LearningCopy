// PODPIECIE JQUERY W NODE MODULES LUB CDN
// jqapi - dokumentacja jquery oraz kurs.js

// 1. chwytanie elementu dom $('selektorcss') ' tak samo pare
const divFIrst = $('.first')
// 3. style: , opoznienie, zmiana, opoznienie zmiana :D
divFIrst.css({
    background: 'blue',
    color: 'red'
}).delay(2000).slideUp().delay(1000).slideDown().add('red');
// document ready
$(document).ready(function () {
    // tu kod ktory bedzie wykonywany dopiero po zaladaownaiu dom
})
// skorocona wersja
$(function () {})
/// ---------- ELEMENTY DOM =-----------
// opcje na tablicy elementow DOM
// index
/// div.eq(index)  lub $('div:eq(2)')
// i duzo innych !!
$("div").first().add().last().not().filter()
///
$('div').is(':visible') // i na odwrot not
// DODAWNIE DO KOLEKCJI ELEMENTOW! tu wszystkie p do elemntow div
$('div').add('p')
///
//
// Szczególnie metoda filter(parametr) ma bardzo ciekawe zastosowanie. Jako parametr może ona dostać tekst będący selektorem,
//  lub funkcję która zwraca prawdę lub fałsz.
//  Jeżeli zostanie zwrócona prawda, oznacza to, że dany element tablicy pasuje i zostanie on zwrócony.
$('p').filter('.important'); //pobierz wszystkie p a Na szczególną uwagę zasługują metody parents() i closest(). Metoda parents() zwraca pierwszego napotkanego rodzica, który pasuje do podanego selektora. Sprawdzanie takie rozpoczyna się od rodzica danego elementu (czyli nigdy nie zostanie zwrócony element, na którym została wywołana ta metoda).
// Metoda closest() działa całkiem podobnie, ale rozpoczyna swoją podróż z uwzględnieniem danego elementu:potem odfiltruj z nich te z klasą .important
const $inputs = $('inputs')
$inputs.filter(':not(:checkbox)') //wszystkie inputy nie będące checboxami
// ukrywanie elementu hide
// $('div').filter(':visible').hide() //ukrywa divy, które są widoczne

//  DODOWANIE KLASY
divFIrst.addClass('red')
//
// $elem.parent(selektor*)	Pobiera rodzica. Parametr selektor jest opcjonalny. Jeżeli go nie podamy, zostanie pobrany dowolny rodzic elementu. Jeżeli go podamy, zostanie pobrany rodzic tylko gdy pasuje do selektora.
// $elem.parents(selektor*)	idzie w górę drzewa aż natrafi na rodzica który pasuje do selektora
// $elem.closest(selektor*)	idzie w górę drzewa aż natrafi na rodzica który pasuje do selektora
// $elem.siblings()	pobiera braci elementu
// $elem.next(selektor*)	pobiera następny element jeżeli pasuje do selektora. Można też pominąć ten parametr, wtedy pobierze dowolny następny element
// $elem.nextUtil(selektor*)	Pobiera wszystkie następne elementy dopóki nie natrafi na element pasujący do selektora. Jeżeli nie podamy selektora, wszystkie następne elementy zostaną zwrócone
// $elem.prev(selektor*)	pobiera poprzedni element jeżeli pasuje do selektora. Można też pominąć ten parametr, wtedy pobierze dowolny poprzedni element
// $elem.prevUntil(selektor*)	Pobiera wszystkie poprzednie elementy dopóki nie natrafi na element pasujący do selektora. Jeżeli nie podamy selektora, wszystkie poprzednie elementy zostaną zwrócone
// $elem.children()	pobiera bezpośrednie dzieci elementu
// Na szczególną uwagę zasługują metody parents() i closest(). Metoda parents() zwraca pierwszego napotkanego rodzica, który pasuje do podanego selektora. Sprawdzanie takie rozpoczyna się od rodzica danego elementu (czyli nigdy nie zostanie zwrócony element, na którym została wywołana ta metoda).
// Metoda closest() działa całkiem podobnie, ale rozpoczyna swoją podróż z uwzględnieniem danego elementu:


const $element = $('.first')
//// 
// ----------- KLASY I STYELE -----------//
$element.addClass("nazwa_klasy"); //dodaje klasę css elementowi
$element.removeClass("nazwa_klasy"); //usuwa klasę css elementowi
$element.hasClass("nazwa_klasy"); //sprawdza czy dany element ma klasę
$element.toggleClass("nazwa_klasy"); //włącza/wyłącza klasę
$element.css('background-color', 'red');
$element.css('color', 'blue');
$element.css('padding', 10); //px zostaną dodane automatycznie

//lub podając obiekt

$element.css({
    color: 'red',
    'background-color': 'blue',
    padding: 10 //px zostaną dodane automatycznie
});
// /
// eżeli chcemy dodać lub usunąć więcej klas, podajemy je po spacji:

$element.addClass("big important");
$element.removeClass("big important");
// --------- WYBRANE METODY I WLASCIWOSCI!! =--- 
// $element.attr(nazwa)	pobiera lub ustawia atrybut o danej nazwie. Jeżeli atrybutu nie ma, zwraca undefined
// $element.removeAttr(nazwa)	usuwa atrybut o danej nazwie
const $img = $("img");

const src = $img.attr("src"); //pobiera atrybut src z grafiki

if ( $img.attr("alt") ) { //jeżeli nie ma atrybutu alt
    $img.removeAttr("tooltip"); //usuwam atrybuty
    $img.attr("data-text", $img.attr("alt")); //dodaję pojedynczy atrybut

    $img.attr({ //możemy ustawiać kilka atrybutów na raz
        alt: "Lorem ipsum dolor",
        title: "Lorem ipsum dolor"
    });
}
const $link = $("a");

const href = $link.attr("href"); //pobiera atrybut href z linka
$link.removeAttr("tooltip"); //ustawiam atrybut tooltip

if (href.startsWith("http")) {
    $link.attr("target", "_blank"); //dodaję nowy atrybut
}
// Włącz/wyłącz kolorowanie składni
// $element.prop(nazwa)	pobiera lub ustawia daną właściwość. Jeżeli właściwości nie ma, zwraca undefined
// $element.removeProp(nazwa)	usuwa daną właściwość
const $input = $("input:radio"); //pobieramy input radio
if ($input.is(":checked")) {
    $input.prop("disabled", true); //ustawiam właściwość
}
// Włącz/wyłącz kolorowanie składni
// W powyższym przykładzie działam na właściwościach elementu. Jeżeli nie pamiętasz czym się różnią atrybuty od właściwości elementu, służę pomocą.

// $element.text()	pobiera lub ustawia tekst elementu (równoznaczne z textContent)
// $element.html()	pobiera lub ustawia html elementu (równoznaczne z innerHTML)
const text = $element.text(); //pobieram text w elemencie
$element.html(text); //ustawiam nowy html na tekst bez znaczników html
// Włącz/wyłącz kolorowanie składni
// $element.val()	Ustawia lub pobiera wartość value
$input = $("input:text");
$input.val(); //pobieram value
$input.val("nowa wartość"); //ustawiam value
// Zdarzenia w jquery
// Aby przypiąć nasłuch zdarzenia do pobranego lub utworzonego elementu korzystamy z metody będącej nazwą zdarzenia, lub skorzystać z metody on().

$('input#guzik').click(function() {
    console.log('test');
})

//lub

$('input#guzik').on('click', function() {
    console.log('test');
})
// Włącz/wyłącz kolorowanie składni
// Podobnie jak przy metodzie .css() i .attr() także przy zdarzeniach je deklarować pojedynczo, ale i zbiorczo podając obiekt z odpowiednimi metodami:

$element.on('click', function() {})
// $element.on('mouseover', function() {})

//lub

// $element.on({
//     'click', function() {
//         ...
//     },
//     'mouseover' : function() {
//         ...
//     }
// });
// Włącz/wyłącz kolorowanie składni
// Aby odwołać się do obiektu wywołującego, wskazujemy go instrukcją this. To już wiemy z rozdziału o eventach.

// Domyślnie this wskazuje na element, który wywołał dane zdarzenie. Ten element jest w czystym javascript. Aby na takim obiekcie wykonywać operacje za pomocą jQuery, wystarczy nasze this podstawić pod jquery, stosując konstrukcję $(this). Dzięki temu uzyskujemy obiekt jquery wskazujący na wywołujący element.

// <a class="link" href="http://jakis_adres.com">Pokaż href</a>
// <a class="link" href="http://jakis_inny_adres.com">Pokaż href</a>
$('.element').on('click', function(e) {
    e.preventDefault();

    // this - wskazuje na dany element w czystym JavaScript
    // $(this) - wskazuje na dany element w jQuery

})
$('.element').on('click', function(e) {
    e.preventDefault();

    this.css({'color': 'black'}); //błąd! - this.css is not a function

    $(this).css({'color': 'black'}); //wszystko ok

    console.log( $(this).attr('href') ); //pobieramy atrybut href
})
// Pokaż href Pokaż href

// Aby odpiąć dane zdarzenie, skorzystamy z metody off(). Działa ona praktycznie tak samo jak removeEventListener, czyli jeżeli chcemy odpiąć jakąś funkcję, powinniśmy przekazać ją jako parametr:

function showSomething() {
    console.log('Kliknięto');
}

$('.element').on('click', showSomething);
$('.element').off('click', showSomething);
// W jQuery w przeciwieństwie do JavaScript możemy też odpinać funkcje anonimowe. Wystarczy przy ich podpinaniu podać dla zdarzenia nazwę:

$('.element').on('click', function() {
    console.log('Kliknięto 1');
});

$('.element').on('click.klik2', function() {
    console.log('Kliknięto 2');
});

//usuwam event o nazwie eventToDelete
$('.element').off('click.klik2');
// Włącz/wyłącz kolorowanie składni
// Klik  Klik

// Jednorazowy event za pomocą one()
// Jeżeli chcemy do elementu podpiąć event, który wykona się tylko jeden raz (a zaraz potem zostanie usunięty), skorzystamy z funkcji .one():

$('.element').one('click', function() {
    console.log('Wykonam się tylko jeden raz po czym się odłączę');
});
// Włącz/wyłącz kolorowanie składni
// Klik

// Jest to równoznaczne z odpisaniem eventu z jego wnętrza (co jest możliwe także tylko w Jquery):

$('.element').one('click', function(e) {
    console.log('Wykonam się tylko jeden raz po czym się odłączę');
    $(this).off(e);
});
// Włącz/wyłącz kolorowanie składni
// Pokazywanie i ukrywanie elementów
// jQuery udostępnia nam kilka metod służących do pokazywania i ukrywania elementów na stronie.

// Pierwszymi z nich są show() która pokazuje i hide() która ukrywa dany element.

$('#someDiv').show();
$('#someDiv').hide();
//Nie myl powyższego z:

$('#someDiv').css('display', 'block');
$('#someDiv').css('display', 'none');
// Włącz/wyłącz kolorowanie składni
// Pamiętaj, że element może mieć różne stylowanie i wcale nie jest powiedziane, że będzie miał wyświetlanie typu block.

// Powyższe metody automatycznie określają jakie wyświetlanie ma dany element.

// Płynne pokazywanie i ukrywanie elementów
// Aby płynnie pokazywać lub ukrywać elementy, skorzystamy z metod:

// $element.fadeIn(szybkosc*, funkcjaZwrotna*)//	płynnie pokazuje element
// $element.fadeIn(szybkosc*, funkcjaZwrotna*)	//płynnie ukrywa element
// $element.fadeToggle(szybkosc*, funkcjaZwrotna*)	//płynnie pokazuje lub ukrywa element
// // Opcjonalny parametr szybkość określa szybkość zanikania. Możemy go podać słownie za pomocą słów "slow", "medium", "fast", ale najczęściej podaje się go w formie milisekund.
// Parametr funkcjaZwrotna to funkcja, która zostanie wykonana po zakończeniu zanikania:

$(".test1").fadeOut();
$(".test2").fadeIn(300);
$(".test2").fadeIn(function() {
    console.log("Zakończono animację");
});
// /Przykład użycia:

{/* <div class="module">
    <div class="module-content" style="display:none">
        Lorem ipsum dolor sit amet...
    </div>
    <button class="module-toggle button">Pokaż/schowaj content</button>
</div> */}
$('.module-toggle').on('click', function() {
    $(this).prev().fadeToggle();
})
// Włącz/wyłącz kolorowanie składni
// Zauważ, że pobrany element podstawiłem pod zmienną. Dzięki temu gdy kilka razy odwołujemy się do danego obiektu, każdorazowo JavaScript nie musi przeszukiwać drzewa DOM.

// Znak $ przy nazwie zmiennej $btn to tylko konwencja nazewnicza - ułatwienie dla nas.
// Dzięki temu wiemy, że dana zmienna jest elementem pobranym lub stworzonym za pomocą jQuery, i możemy na nim wywoływać wszystkie metody tej biblioteki (find, next, eq, css itp).

// Płynne zwijanie i rozwijanie elementów
// Bardzo podobnymi w użyciu są metody służące do zwijania/rozwijania elementów:

// Nazwa metody	Co robi
// $element.slideDown(szybkosc*, funkcjaZwrotna*)	//płynnie rozwija element
// $element.slideUp(szybkosc*, funkcjaZwrotna*)	//płynnie zwija element
// $element.slideToggle(szybkosc*, funkcjaZwrotna*)	//płynnie zwija lub rozwija element
$(".test1").slideUp();
$(".test2").slideDown(300);
$(".test3").slideToggle(function() {
    console.log('Zakończono animację');
});
// Przykład użycia:

{/* <div class="module">
    <div class="module-content" style="display:none">
        Lorem ipsum dolor sit amet...
    </div>
    <button class="module-toggle button">Pokaż treść</button>
</div> */}
$('.module-toggle').on('click', function() {
    const $btn = $(this);

    $(this).prev().slideToggle(function() {
        //this tutaj wskazuje na element zwijany

        //sprawdzam czy tekst po zwinięciu/rozwinięciu jest widoczny
        if ($(this).is(':visible')) {
            $btn.text('Ukryj treść');
        } else {
            $btn.text('Pokaż treść');
        }
    });
})
//Tworzenie nowych elementów
///Aby utworzyć nowy element za pomocą jQuery wystarczy skorzystać z podobnej konstrukcji co w przypadku pobierania elementów ze strony:

const $div = $('<div class="module"></div>');
//Włącz/wyłącz kolorowanie składni
///Tak jak w przypadku innych metod, tutaj też mamy kilka sposobów działania z nowymi elementami:

// const $div = $('<div id="headCnt" class="page-header-cnt></div>')

//lub

// const $div = $("<div>", {id: "headCnt", class: "page-header-cnt"});
//Dołączanie elementów do strony
//Aby dołączyć element do strony możemy skorzystać z jednej z kilku metod:

el.append(insertEl)//	Dołącza insertEl na końcu parenta
el.prepend(insertEl)	//Dołącza insertEl na początku parenta
el.before(insertEl)	//Dołącza insertEl przed danym elementem
el.after(insertEl)//	Dołącza insertEl za danym elementem
const $div = $('.test-append-cnt');

const $span1 = $('<span>Na końcu</span>');
$div.append($span1);

const $span2 = $('<span>Na początku</span>');
$div.prepend($span2);

const $span4 = $('<span>Za elementem</span>');
$div.after($span4);

const $span3 = $('<span>Przed elementem</span>');
$div.before($span3);
// Na końcu  Na początku  Za elementem  Przed elementem
// Usuwanie elementów ze strony
// Aby usunąć element, skorzystamy z metody remove():

const $btn = $('.button');
$btn.remove();
// Data
// W lekcji o właściwościach elementów poznałeś właściwość dataset. Właściwość ta opiera się o customowe atrybuty data-...:

<button type="button" id="myButton" data-tooltip="Jakiś tekst" data-arrow-position="top">
    Kliknij mnie
</button>
// Włącz/wyłącz kolorowanie składni
const elem = document.querySelector('#myButton');

console.log(elem.dataset) //{tooltip: "Jakiś tekst", arrowPosition: "top"}
console.log(elem.dataset.tooltip); //Jakiś tekst
console.log(elem.dataset.arrowPosition); //top
// jQuery udostępnia nam metodę data(), która działa dość podobnie - ale nie do końca.

// Otóż jQuery tworzy za naszymi plecami dla każdego elementu obiekt z danymi, który możemy wykorzystać do przechowywania dodatkowych danych związanych z danym elementem.

// Obiekt ten początkowo tworzony jest w oparciu o atrybuty data-...:

$('#myButton').on('click', function() {
    console.log( $(this).data() ); //{arrowPosition: "top", tooltip: "Jakiś tekst"}
})
// Włącz/wyłącz kolorowanie składni
// Kliknij mnie
// Różnica w stosunku do wersji Vanilla JavaScript jest taka, że po dodaniu do tego obiektu nowej właściwości, nie pojawia się ona jako atrybut elementu (w wersji JavaScript się pojawia), a tylko zapisywana jest w obiekcie data. Aby to sprawdzić, kliknij i sprawdź poniższe przyciski w debugerze. W wersji JavaScript zobaczysz, że właściwość dodana do dataset trafiła do atrybutów elementu.


// Aby dodać nowe dane do metody data(), wystarczy podać ich nazwy i wartości w nawiasach. Jeżeli chcemy odczytać dane, wtedy podajemy tylko ich nazwy:

$btn.data() //odczytuje cały obiekt
$btn.data('position'); //odczytuje daną "position"
$btn.data('cat', 'Wielki kocur'); //ustawiam zmienną cat na "Wielki kocur"
$btn.data('bar', { myType: "test", count: 40 } )); //pod zmienną bar przechowuję dodatkowy obiekt
$btn.data('bar'); //odczytuję zmienną bar
// Pytanie, które może się nasunąć to czemu jQuery poszło inną drogą niż Vanilla JavaScript? Ano z prostego powodu. Atrybuty data-... (a więc i cała właściwość dataset) dobrze się sprawdzają przy przetrzymywaniu prostych tekstów. Ale już trzymanie tam innych typów danych wcale fajne nie jest. W przypadku jQuerowego (tak to sie odmienia?) data nie ma takich problemów.

const p = document.querySelector('p');
p.dataset.age = 20;
p.dataset.ob = { name : "Marcin" }
console.log(p.dataset.age); //"20"
console.log(p.dataset.ob); //"[object Object]"

const $p = $('p').first();
$p.data('age', 20);
$p.data('ob', { name : "Marcin" });
console.log(p.data('age')); //20
console.log(p.data('ob')); //{ name : "Marcin" }
