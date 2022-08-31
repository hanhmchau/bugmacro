export default class Binder {
	bind(enabled) {
		if (enabled) {
			this.enable();
		} else {
			this.disable();
		}
	}

	enable() {}

	disable() {}
}
