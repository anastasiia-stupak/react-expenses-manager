const path = require('path');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Webpack Plugins
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

// VARS
const NODE_ENV = process.env.NODE_ENV;
const DEVELOPMENT = NODE_ENV === 'development';
const PRODUCTION = NODE_ENV === 'production';


const config = {};

// ------------ DEVELOPMENT AND PRODUCTION -------------

// -- INPUT --
config.context = path.resolve(__dirname, "src");
config.entry = {
	index: ["babel-polyfill", "./app/index.js"]
};

// ----- OUTPUT -----
config.output = {
	path: path.resolve(__dirname, "dist"),
	filename: "assets/js/[name].js",
	publicPath: '/'
};

// ----- LOADERS -----
config.module = {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader'],
			})
		},
		{
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file-loader',
			query: {
				name: `[name].[ext]`,
				publicPath: '/assets/fonts/',
			}
		},
		{
			test: /\.(svg|png|jpg|jpeg|gif)$/,
			loader: 'file-loader',
			query: {
				limit: 10000,
				name: `[name].[ext]`,
				publicPath: '/assets/images/',
			}
		}
	]
};

// ----- PLUGINS -----

config.plugins = [
	new NamedModulesPlugin(),
	new LoaderOptionsPlugin({
		debug: !PRODUCTION,
		cache: !PRODUCTION,
		minimize: PRODUCTION,
		options: {
			sassLoader: {
				outputStyle: PRODUCTION ? 'compressed' : 'expanded',
				precision: 10,
				sourceComments: false,
				sourceMap: PRODUCTION,
			}
		}
	}),
	new DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
	}),
	new CopyWebpackPlugin([
		{
			from: 'assets',
			to: 'assets',
			ignore: ['**/*.scss'],
		}
	]),
	new ExtractTextPlugin({
		filename: 'assets/css/[name].css',
		disable: !PRODUCTION,
	}),
	new HtmlWebpackPlugin({
		filename: 'index.html',
		hash: false,
		inject: 'body',
		chunksSortMode: 'dependency',
		template: './index.html',
	})
];

if(PRODUCTION) {
	config.plugins.push(
		new UglifyJsPlugin({
			sourceMap: true
		})
	);
}

// ----- DEVTOOL -----
config.devtool = DEVELOPMENT ? "cheap-module-eval-source-map" : "hidden-source-map";

// ----- DEV-SERVER -----

config.devServer = {
	contentBase: path.resolve(__dirname, "dist"),
	historyApiFallback: true,
	host: '127.0.0.1',
	port: '5000'
};


module.exports = config;

