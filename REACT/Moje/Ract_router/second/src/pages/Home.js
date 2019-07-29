import React from "react";
import Article from "../components/Article"
const articles = [{
    id: 0,
    title: "Samochod",
    text: `Al-Bagdadi chwali także terrorystów, którzy przeprowadzili zamachy na Sri Lance, co sugeruje, że film został nagrany w ostatnim tygodniu. Jeśli chodzi o naszych braci na Sri Lance, byłem wniebowzięty, kiedy usłyszałem o atakach samobójczych, które przewróciły kołyski Krzyżowców, i pomściły naszych braci w Baghuz - powiedział. W atakach zginęło ponad 250 osób. 

    Czytaj więcej na https://www.rmf24.pl/raporty/raport-swiat-kontra-panstwo-islamskie/najnowsze-fakty/news-panstwo-islamskie-opublikowalo-film-z-liderem-al-bagdadim-pi,nId,2964037#utm_source=paste&utm_medium=paste&utm_campaign=chrome`

}, {
    id: 1,
    title: "Samochod",
    text: `Ostatnie zdjęcia i filmy Abu Bakr al-Bagdadiego pochodzą z 2014 roku, gdy lider terrorystów przemawiał w Wielkim Meczecie w Mosulu. Od tamtej pory pojawiały się jedynie nagrania, w których zwracał się do swoich zwolenników.

    Czytaj więcej na https://www.rmf24.pl/raporty/raport-swiat-kontra-panstwo-islamskie/najnowsze-fakty/news-panstwo-islamskie-opublikowalo-film-z-liderem-al-bagdadim-pi,nId,2964037#utm_source=paste&utm_medium=paste&utm_campaign=chrome`

}, {
    id: 2,
    title: "Samochod",
    text: `Al-Bagdadi chwali także terrorystów, którzy przeprowadzili zamachy na Sri Lance, co sugeruje, że film został nagrany w ostatnim tygodniu. Jeśli chodzi o naszych braci na Sri Lance, byłem wniebowzięty, kiedy usłyszałem o atakach samobójczych, które przewróciły kołyski Krzyżowców, i pomściły naszych braci w Baghuz - powiedział. W atakach zginęło ponad 250 osób. 

    Czytaj więcej na https://www.rmf24.pl/raporty/raport-swiat-kontra-panstwo-islamskie/najnowsze-fakty/news-panstwo-islamskie-opublikowalo-film-z-liderem-al-bagdadim-pi,nId,2964037#utm_source=paste&utm_medium=paste&utm_campaign=chrome`

}]
const Home = () => {
    const artList = articles.map(e => (
        <Article key={e.id} {...e}></Article>
    ))
    return (
        <>
            {artList}
        </>
    )
}
export default Home