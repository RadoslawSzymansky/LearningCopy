    class View {
        static setCurrentPlayer = (player) => {
            elements.currentPlayerSpan.textContent = player
        }
        static setPlayers = (player1, player2) => {
            elements.play1.textContent = player1
            elements.play2.textContent = player2
        }
    }