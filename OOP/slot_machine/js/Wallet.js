class Wallet {
	constructor(money) {
		let _money = money;
		this.getWalletValue = () => _money;
		this.checkCanPlay = value => {
			if (_money >= value) return true;
			return false;
		};
		this.changeWalletValue = (type = '+', value) => {
			if (typeof value === 'number' && !isNaN(value)) {
				if (type === '+') {
					return (_money += value);
				} else if (type === '-') {
					return (_money -= value);
				} else {
					throw new Error('Invalid operation type');
				}
			} else {
				console.log(typeof value);
				throw new Error('Invalid number');
			}
		};
	}
}

const wallet = new Wallet(200);
