export interface Key {
	name: string;
	type: string;
	value: string;
	expiration?: any;
}

export interface KeyResponse {
	status: number;
	user_name: string;
	key: Key[];
}