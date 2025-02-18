class Game {
	constructor() {
		this.stats = new Statistics();
		this.wallet = new Wallet(100);
		document
			.getElementById('start')
			.addEventListener(
				'click',
				this.startGame.bind(this)
			);
		this.spanWallet = document.querySelector(
			'.panel span.wallet'
		);
		this.boards =
			document.querySelectorAll('div.color');
		this.inputBid = document.getElementById('bid');
		this.spanResult = document.querySelector(
			'.score span.result'
		);
		this.spanGames = document.querySelector(
			'.score span.number'
		);
		this.spanWins = document.querySelector(
			'.score span.win'
		);
		this.spanLosses = document.querySelector(
			'.score span.loss'
		);

		this.render();
	}
	render(
		colors = ['gray', 'gray', 'gray'],
		money = this.wallet.getWalletValue(),
		stats = [0, 0, 0],
		result = '',
		bid = 0,
		wonMoney = 0
	) {
		this.boards.forEach((board, i) => {
			board.style.backgroundColor = colors[i];
		});
		this.spanWallet.textContent = `${money}$`;
		if (result) {
			result = `You won ${wonMoney}$. `;
		} else if (!result && result !== '') {
			result = `You lost ${bid}$. `;
		}
		this.spanResult.textContent = result;
		this.spanGames.textContent = stats[0];
		this.spanWins.textContent = stats[1];
		this.spanLosses.textContent = stats[2];
		this.inputBid.value = bid;
	}
	startGame() {
		if (this.inputBid.value < 1)
			return alert('You cannot bet less than 1$');
		const bid = Math.floor(this.inputBid.value);

		if (!this.wallet.checkCanPlay(bid)) {
			return alert("You don't have enough money");
		}

		this.wallet.changeWalletValue('-', bid);
		this.draw = new Draw();
		const colors = this.draw.getDrawResult();
		console.log(colors);
		const win = Result.checkWinner(colors);
		console.log(win);
		const wonMoney = Result.moneyWinInGame(win, bid);

		this.wallet.changeWalletValue('+', wonMoney);
		this.stats.addGameToStatistics(win, bid);

		this.render(
			colors,
			this.wallet.getWalletValue(),
			this.stats.showGameStatistics(),
			win,
			bid,
			wonMoney
		);
	}
}
