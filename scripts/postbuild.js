const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const OUT = path.join(__dirname, "../out");
const src = path.join(OUT, "_next");
const dest = path.join(OUT, "next");

// 1. Copy _next → next using Windows robocopy, then remove _next
if (fs.existsSync(src)) {
  try {
    if (fs.existsSync(dest)) {
      execSync(`rd /s /q "${dest}"`, { shell: "cmd.exe" });
    }
    execSync(`robocopy "${src}" "${dest}" /E /NFL /NDL /NJH /NJS /NC /NS /NP`, { shell: "cmd.exe" });
    execSync(`rd /s /q "${src}"`, { shell: "cmd.exe" });
    console.log("Copied _next → next");
  } catch (e) {
    // robocopy returns non-zero exit codes even on success (1-7 = ok)
    if (e.status > 7) {
      console.error("Failed to copy:", e.message);
      process.exit(1);
    }
    console.log("Copied _next → next");
  }
}

// 2. Replace all references in html/js/css files
function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (file.endsWith(".html") || file.endsWith(".js") || file.endsWith(".css")) {
      let content = fs.readFileSync(full, "utf8");
      if (content.includes("/_next/")) {
        content = content.replaceAll("/_next/", "/next/");
        fs.writeFileSync(full, content, "utf8");
      }
    }
  }
}

walk(OUT);
console.log("References updated: _next → next");
console.log("Done! Upload the contents of out/ to your hosting root.");
