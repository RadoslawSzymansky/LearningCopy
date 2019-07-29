import React from "react";
import "../styles/AboutUs.scss"
const tekst = ` 
                MOTOKLUB OLSZTYN - kontynuator tradycji sekcji samochodowo – motocyklowej               Olsztyńskiego  Klubu Sportowego “Stomil” w Olsztynie.
                Reaktywowanie klubu w naszym układzie było zasługą 25 osobowej grupy założycielskiej m.in.: Elżbiety   Marcinkiewicz, Andrzeja Olszewskiego, Mieczysława Jesionowskiego, Jerzego Dowejko itd.
                Pierwsze władze klubu to: Andrzej Filipek – Prezes; Andrzej Olszewski – Wiceprezes; Aleksander Lachowicz – Skarbnik; Elżbieta Marcinkiewicz – Sekretarz; Członkowie: Jerzy Dowejko, Tadeusz Cwalina, Zygmunt Janusik, Ryszard Tałałas, Mariusz Mazuchowski. Komisja Rewizyjna: Mieczysław Jesionowski – Przewodniczący, Wojciech Szczuciński, Jacek Olszewski, Marian Bandurski, Jarosław Kowalski.
                Był to trudny okres działania zarządu, gdyż byliśmy w próżni, bez toru motocrossowego (ówczesne władze miasta zamknęły tor motocrossowy w Dajtkach 1992r.), pomieszczenia biurowego. Pierwsze zebranie zarządu odbyło się w prywatnym mieszkaniu kol. Eli Marcinkiewicz (18.05.1993r.). W pozyskaniu pomieszczenia na biuro pomógł nam kol. Aleksander Lachowicz – mieściło się ono w pokoiku Spółdzielni Mieszkaniowej “Pojezierze” przy ul. Kołobrzeskiej, 13. Trudna sytuacja finansowa była powodem odejścia kilku zawodników do innych klubów, z doświadczonych zawodników pozostał Jacek Olszewski I, młodsi: Leszek Pszczółkowski, Piotrek Brzózka, Tomek Wawrzyn, którzy zdobyli tytuł Drużynowego Wicemistrza Polski.
                Oprócz sekcji motocrossowej powołano sekcje samochodową, koło pojazdów zabytkowych i koło miłośników “VW Garbus”.   W 1993 roku nie odbył się Rajd “Kormoran”. 28 lutego1993 roku odszedł od nas nieodżałowany kierowca rajdowy Marian    Grzegorz Bublewicz.
                W klubie jest 96 członków.
`
const AboutUs = () => {
    return (
        <div className="about">
            <h2>MotoKlub <span className="clubName">Olsztyn</span></h2>
            <h3>Kilka słów o nas:</h3>
            <p className="desc">  
            {tekst}
            </p>
        </div>
    )
}
export default AboutUs