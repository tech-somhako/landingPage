const path = require("path");

module.exports = {
	debug: true,
	i18n: {
		defaultLocale: process.env.NODE_ENV === "production" ? "ja" : "en",
		locales: ["en", "ja"],
		localePath: path.resolve("./public/locales")
	}
};
