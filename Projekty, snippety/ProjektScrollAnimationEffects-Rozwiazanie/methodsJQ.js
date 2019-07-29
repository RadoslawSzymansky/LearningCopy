
//Aktualna pozycja skrola (wartość początkowa lub gdy brak skrola to 0)
$(document).scrollTop()

// Odległość elementu od krawędzi dokumentu
$("element").offset().top

// Szerokość i wysokość dokumentu (strony czyli dokumentu html)
$(document).width()
$(document).height()

//Szerokość i wysokość okna przeglądarki bez pasków przewijania
$(window).height()
$(window).width()

//Szerokość i wysokosć elementu (zgodna z właściwościami width i height w css)  
$("element").height()
$("element").width()

//Szerokość i wysokosć elementu wraz z paddingiem
$('element').innerHeight()
$('element').innerWidth()

//Szerokość i wysokosć elementu wraz z paddingiem i borderem
$('element').outerHeight()
$('element').outerWidth()

//Szerokość i wysokosć elementu wraz z paddingiem, borderem i marginesem
$('element').outerHeight(true)
$('element').outerWidth(true)


