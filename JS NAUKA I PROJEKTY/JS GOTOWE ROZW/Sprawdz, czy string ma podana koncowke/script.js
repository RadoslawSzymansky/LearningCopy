// sprawdzenie czy dane slowo ma na koncu podany ciag znakow
function confirmEnding(str, target) {

    // number sluzy do ustalenia ile razy ma sie wykonac odwrotna petla
    let number = str.length - target.length;
    // flaga poczatek startowy false i tak samo liczby sprawdzonycj
    checked = false;
    let numberOfThesame = 0;
    // odwrotna petla
    for (let i = (str.length - 1); i >= number; i--) {
        // index sprawdzanej koncowki, tak zeby byl zawsze sprawdzany od konca , rowno z indexem stringa
        let indexTarget = i - number;
        //
        console.log('Porownanie liter :', str[i], target[indexTarget])
        // jezeli taka sama to podnies numberOftheSame a inaczej wyzeruj zeby sie nie zgadzal pozniej
        if (str[i] == target[indexTarget]) {
            numberOfThesame++
        } else {
            numberOfThesame = 0;
        }
    };
    // sprawdzenie czy tyle samo liczb pasowalo co dlugosc sprawdzanej koncowki/
    if (numberOfThesame == target.length) {
        checked = true
    }
    // zwroci true jezeli sie zgadza
    return checked;
}

console.log(confirmEnding("abcd", "abcd"));