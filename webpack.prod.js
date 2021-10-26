const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
process.env.NODE_ENV = 'production';


module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
})