import fs from "fs";
import path from "path";

function printTree(dir, prefix = "") {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    console.log(prefix + "└── " + file);
    if (fs.statSync(fullPath).isDirectory()) {
      printTree(fullPath, prefix + "    ");
    }
  }
}

printTree("./src/app");
