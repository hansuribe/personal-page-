import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import alias from "@rollup/plugin-alias";
import cleaner from "rollup-plugin-cleaner";
import gzipPlugin from "rollup-plugin-gzip";
import modulepreload from "rollup-plugin-modulepreload";
import copy from "rollup-plugin-copy";
import svelteSVG from "rollup-plugin-svelte-svg";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "esm",
    name: "app",
    //file: "public/build/bundle.js",
    dir: "dist/build"
  },
  plugins: [
    cleaner({
      targets: ["./dist"]
    }),
    copy({
      targets: [{ src: "public/*", dest: "dist" }]
    }),
    alias({
      entries: [
        { find: "utils", replacement: "./src/utils" },
        { find: "pages", replacement: "./src/pages" },
        { find: "components", replacement: "./src/components" }
      ]
    }),
    svelteSVG(),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      preprocess: sveltePreprocess({ postcss: true }),
      css: css => {
        css.write("dist/bundle.css");
      }
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: importee =>
        importee === "svelte" || importee.startsWith("svelte/")
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser({}),

    production &&
      gzipPlugin({
        additionalFiles: ["./dist/global.css", "./dist/bundle.css"]
      }),

    production &&
      modulepreload({
        prefix: "build",
        index: "dist/index.html",
        shouldPreload: ({ fileName }) =>
          fileName.includes("index") && !fileName.includes("gz")
      })
  ],
  watch: {
    clearScreen: false
  }
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true
        });
      }
    }
  };
}
