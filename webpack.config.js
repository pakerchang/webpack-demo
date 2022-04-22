const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		static: "dist",
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/, // loading all css files
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i, // loading all images
				type: "asset/resource",
			},
		],
	},
};
