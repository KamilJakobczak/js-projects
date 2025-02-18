class Wallet {
	constructor(money) {
		let _money = money;
		this.getWalletValue = () => _money;
		this.checkCanPlay = value => {
			if (_money >= value) return true;
			return false;
		};
		this.changeWalletValue = (type = '+', value) => {
			console.log(value);
			if (typeof value === 'number' && !isNaN(value)) {
				if (type === '+') {
					return (_money += value);
				} else if (type === '-') {
					return (_money -= value);
				} else {
					throw new Error('Invalid operation type');
				}
			} else {
				throw new Error('Invalid number');
			}
		};
	}
}
