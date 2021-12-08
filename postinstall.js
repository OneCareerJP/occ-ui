const fs = require("fs");
const path = require("path");
let dir = path.resolve(__dirname, "dist");

function loadModule(name) {
  try {
    return require(name);
  } catch (e) {
    return undefined;
  }
}

function copy(name) {
  const src = path.join(dir, "vue2", name);
  const dest = path.join(dir, name);

  let content = fs.readFileSync(src, "utf-8");

  try {
    fs.unlinkSync(dest);
  } catch (error) {}
  fs.writeFileSync(dest, content, "utf-8");
}

const Vue = loadModule("vue");

if (!Vue || typeof Vue.version !== "string") {
  console.warn(
    '[occ-ui] Vue is not found. Please run "npm install vue" to install.'
  );
} else if (Vue.version.startsWith("2.")) {
  console.log(`[occ-ui] installing for vue2 from dir ${dir}`);
  copy("occ-ui.esm.js");
}
