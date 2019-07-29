class Wallet {
    constructor(money) {
        let _money = money // aktualna ilosc pieniedzy
        this.showWalletValue = () => _money;

        this.checkCanPlay = value => {
            if (value <= _money) return true;
            return false
        }
        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                console.log('ssij')

                if (type === '+') {
                    return _money += value
                } else if (type === '-') {
                    return _money -= value
                } else {
                    throw new Error('dupa zly value')
                }
            } else {
                throw new Error('zla liczba')
            }
        }

    }
}
// const wallet = new Wallet(200, 50)