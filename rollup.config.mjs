import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
//import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs", //esm
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
        extract: false,
        use: ["sass"],
      }),
      //scss({ fileName: "bundle.css", outputStyle: "compressed" }),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      babel({
        exclude: "node_modules/**",
        presets: [
          "@babel/preset-react",
          "@babel/preset-typescript",
          "@babel/preset-env",
        ],
        extensions: [".js", ".ts", ".tsx"],
        babelHelpers: "bundled",
      }),
      external(),
      //terser(),
    ],
  },
];
