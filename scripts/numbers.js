import Binder from "./binder.js";

export default class NumberKeyBinder extends Binder {
	_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	enable() {
		for (const number of this._numbers) {
			game.keybindings.set("core", `executeMacro${number}`, [{ key: `Digit${number}` }]);
		}
	}

	disable() {
		for (const number of this._numbers) {
			game.keybindings.set("core", `executeMacro${number}`, []);
		}
	}
}
