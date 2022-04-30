"use strict";

import { libWrapper } from "./lib/libwrapper.js";
import { ModuleSettings, ModuleOptions } from "./scripts/settings.js";

Hooks.on("setup", () => {
	ModuleSettings.registerSettings();

	libWrapper.register("bugmacro", "KeyboardManager.prototype._onDigit", function (wrapped, ...args) {
		if (!ModuleSettings.getSetting(ModuleOptions.DISABLE_NUMBER)) {
			wrapped(...args);
		}
	});

	libWrapper.register("bugmacro", "KeyboardManager.prototype._handleMovement", function (wrapped, ...args) {
		if (!ModuleSettings.getSetting(ModuleOptions.DISABLE_WASD)) {
			wrapped(...args);
		}
	});
});
