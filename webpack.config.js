const path = require("path")
const webpack = require("webpack")
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: {
          loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-stage-0']
        //   }
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                '@babel/plugin-proposal-function-bind',
                '@babel/plugin-proposal-export-default-from',
                '@babel/plugin-proposal-logical-assignment-operators',
                ['@babel/plugin-proposal-optional-chaining', { 'loose': false }],
                ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }],
                ['@babel/plugin-proposal-nullish-coalescing-operator', { 'loose': false }],
                '@babel/plugin-proposal-do-expressions',
                ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-throw-expressions',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-syntax-import-meta',
                ['@babel/plugin-proposal-class-properties', { 'loose': false }],
                '@babel/plugin-proposal-json-strings',
                ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", {
          loader: "postcss-loader",
        //   options: {
            // plugins: () => [require("autoprefixer")]
        //   }
        }]
      }
    ]
  },
  plugins: [
    require("autoprefixer")
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
          warnings: false,
          mangle: true,
        },
      }),
    ],
  },
}
