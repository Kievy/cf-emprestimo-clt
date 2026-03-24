const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function copy(src, dest) {
  try {
    execSync(`robocopy "${src}" "${dest}" /E /NFL /NDL /NJH /NJS /NC /NS /NP`, { shell: "cmd.exe" });
  } catch (e) {
    // robocopy exit codes 1-7 = success variants; 8+ = error
    if (e.status > 7) {
      console.error("Falha ao copiar:", e.message);
      process.exit(1);
    }
  }
}

const ROOT = path.join(__dirname, "..");
const STANDALONE = path.join(ROOT, ".next", "standalone");
const DEPLOY = path.join(ROOT, "deploy");

// 1. Limpar pasta deploy anterior
if (fs.existsSync(DEPLOY)) {
  try { execSync(`rd /s /q "${DEPLOY}"`, { shell: "cmd.exe" }); } catch (_) {}
}
fs.mkdirSync(DEPLOY, { recursive: true });

// 2. Copiar standalone → deploy
copy(STANDALONE, DEPLOY);

// 3. Copiar .next/static → deploy/.next/static
copy(path.join(ROOT, ".next", "static"), path.join(DEPLOY, ".next", "static"));

// 4. Copiar public → deploy/public
const publicSrc = path.join(ROOT, "public");
if (fs.existsSync(publicSrc)) {
  copy(publicSrc, path.join(DEPLOY, "public"));
}

console.log("\nDeploy pronto em: deploy/");
console.log("Suba o conteudo da pasta deploy/ para o servidor Node.js do cPanel.");
