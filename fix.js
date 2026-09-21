
const fs = require("fs");
let css = fs.readFileSync("css/style.css", "utf8");
// Fix the mangled characters (powershell mangles emdash to ?")
css = css.replace(/\?\"/g, "—");
css = css.replace(/\"\?\"\?/g, "--");

// Fix the bad characters in titles
css = css.replace(/\?\"\?\?\"\? CSS VARIABLES \?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?\?\"\?/g, "-- CSS VARIABLES -----------------------------------------------");
css = css.replace(/.*CSS VARIABLES.*/, "/* -- CSS VARIABLES ----------------------------------------------- */");
css = css.replace(/.*RESET & BASE.*/, "/* -- RESET & BASE ------------------------------------------------- */");
css = css.replace(/.*UTILITY.*/, "/* -- UTILITY ------------------------------------------------------ */");
css = css.replace(/.*FOOD CARD.*/, "/* -- FOOD CARD ------------------------------------------------- */");
css = css.replace(/.*COMING SOON.*/, "/* -- COMING SOON ---------------------------------------------- */");

// Font replacement
css = css.replace(/var\(--font-sans\)/g, "var(--font-primary)");
css = css.replace(/var\(--font-serif\)/g, "var(--font-heading)");

// Fix specific brand elements (logo texts) to use --font-brand
css = css.replace(/font-family: var\(--font-heading\);\s*\n\s*font-size: 1.0625rem;/g, "font-family: var(--font-brand);\n  font-size: 1.0625rem;");
css = css.replace(/font-family: var\(--font-heading\);\s*\n\s*font-size: 0.875rem;/g, "font-family: var(--font-brand);\n  font-size: 0.875rem;");
css = css.replace(/font-family: var\(--font-heading\);\s*\n\s*font-size: clamp/g, "font-family: var(--font-brand);\n  font-size: clamp");

fs.writeFileSync("css/style.css", css, "utf8");
console.log("Fixed CSS successfully!");

