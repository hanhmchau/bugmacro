import Binder from "./binder.js";

export default class WASDKeybinder extends Binder {
	enable() {
		game.keybindings.set("core", "panUp", [{ key: "KeyW" }]);
		game.keybindings.set("core", "panLeft", [{ key: "KeyA" }]);
		game.keybindings.set("core", "panDown", [{ key: "KeyS" }]);
		game.keybindings.set("core", "panRight", [{ key: "KeyD" }]);
	}

	disable() {
		game.keybindings.set("core", "panUp", []);
		game.keybindings.set("core", "panLeft", []);
		game.keybindings.set("core", "panDown", []);
		game.keybindings.set("core", "panRight", []);
	}
}
