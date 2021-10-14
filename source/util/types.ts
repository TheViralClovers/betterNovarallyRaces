interface player_info_balances_fuel_usage {
	snakeoil: string;
	snakegas: string;
	snakepow: string;
	snakeven: string;
}

interface player_info {
	last_played_date: number;
	daily_race_count: number;
	boost_balance: number;
	pending_prizes: Array<string>;
	balances: player_info_balances_fuel_usage;
	fuel_usage: player_info_balances_fuel_usage;
}

interface balance {
	balance: string;
}

export { player_info, balance };
