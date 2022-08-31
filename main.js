"use strict";

import { ModuleSettings, ModuleOptions } from "./scripts/settings.js";
import WASDKeybinder from "./scripts/wasd.js";
import NumberKeyBinder from "./scripts/numbers.js";

Hooks.on("ready", () => {
	ModuleSettings.registerSettings();

	const wasd = new WASDKeybinder();
	wasd.bind(!ModuleSettings.getSetting(ModuleOptions.DISABLE_WASD));

	const number = new NumberKeyBinder();
	number.bind(!ModuleSettings.getSetting(ModuleOptions.DISABLE_NUMBER));
});
