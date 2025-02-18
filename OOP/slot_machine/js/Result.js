class Result {
	static moneyWinInGame(result, bid) {
		if (result) return 3 * bid;
		else return 0;
	}
	static checkWinner(draw) {
		const a = draw[0];
		const b = draw[1];
		const c = draw[2];
		if (
			(a === b && b === c) ||
			(a !== b && b !== c && a !== c)
		) {
			return true;
		} else return false;
	}
}
