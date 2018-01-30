class Websocket {
	constructor() {
		this._conn = new Websocket("ws://127.0.0.1");
	}

	onclose(callback) {
		if (callback instanceof Function) {
			this._conn.onclose = callback;
		}
	}

	onmessage(callback) {
		if (callback instanceof Function) {
			this._conn.onmessage = callback;
		}
	}
}