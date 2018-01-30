const KEYMAP = {
	'LEFT': 37,
	'RIGHT': 39,
	'UP': 38,
	'DOWN': 40
};

class Player {
	constructor(websocket) {
		this._websocket = websocket;
		this._keys = [];
		for (let k in KEYMAP) {
			this._keys[k] = new Key(KEYMAP[k])
		}
		this.create_listeners();
	}

	create_listeners() {
		for (let i = 0; i < this._keys.length; i++) {
			this._keys[i].press = function() {
				
			}
		}
	}
	
}