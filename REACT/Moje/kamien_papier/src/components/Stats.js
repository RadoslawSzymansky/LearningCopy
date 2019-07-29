import React from 'react'
import './Stats.css'
const Stats = (props) => {
    const { stats } = props
    const lastGame = stats[stats.length - 1];
    const wins = stats.filter(stat => stat.result === "win").length
    const looses = stats.filter(stat => stat.result === "loose").length
    const draws = stats.length - wins - looses;
    let lastGameRes = ""
    switch (lastGame.result) {
        case "win":
            lastGameRes = "WYGRANA"
            break;
        case "loose":
            lastGameRes = "PRZEGRANA"
            break;
        default:
            lastGameRes = "REMIS"
    }
    return (
        <div className="stats">
            <div className="lastGame">
                <h3>Ostatnia gra:</h3>
                <p>Twój wybór:  <strong>{lastGame.player}</strong></p>
                <p>Wybór bota:  <strong>{lastGame.bot}</strong></p>
                <p>Wynik: <strong>{lastGameRes}</strong></p>
            </div>
            <div className="gameResults">
                <h3>Wyniki ogólne:</h3>
                <p>Liczba gier: <strong>{stats.length}</strong></p>
                <p>Remisy: <strong>{draws}</strong></p>
                <p>Przegrane: <strong>{looses}</strong></p>
                <p>Wygrane: <strong>{wins}</strong></p>
                <p>Wynik:  Gracz: <strong>{wins}</strong> Bot: <strong>{looses}</strong></p>
            </div>
        </div>
    )
}
export default Stats