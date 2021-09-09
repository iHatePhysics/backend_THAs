var fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `\nselect command!\n1.crd\n2.rmd\n3.crfile\n4.apdfile\n5.rdfile\n6.rnfile\n`,
  (input) => {
    console.log(`${input} selected!`);
    switch (input) {
      case "crd":
        readline.question(`Directory name:\n`, (drname) => {
          fs.mkdirSync(`${drname}`);
          console.log(`\n${drname} Created!`);
          readline.close();
        });
        break;
      case "rmd":
        readline.question(`\nDirectory name:`, (rmdname) => {
          fs.rmdirSync(`${rmdname}`);
          console.log(`\n${rmdname} Removed!`);
          readline.close();
        });
        break;
      case "crfile":
        readline.question(
          `\nFile name with path as Path/filename.extension`,
          (crfname) => {
            fs.writeFileSync(`${crfname}`, (err) => {
              if (err) {
                console.log(err);
              }
            });
            console.log(`\n${crfname} Created!`);
            readline.close();
          }
        );
        break;
      case "apdfile":
        readline.question(
          `\nFile name with path as Path/filename.extension, And "String" of Input`,
          (pt, st) => {
            fs.appendFileSync(`${pt}`, `${st}`);
            console.log(`\n"${st}" Added to the file`);
            readline.close();
          }
        );
        break;
      case "rdfile":
        readline.question(
          `\nFile name with path as Path/filename.extension`,
          (rdname) => {
            fs.readFileSync(`${rdname}`, "utf-8");
            //   console.log(`"${st}" Added to the file`);
            readline.close();
          }
        );
        break;
      case "rnfile":
        readline.question(
          `\nFile names with path as Path/filename.extension, And New Name with path`,
          (olname, rnname) => {
            fs.renameSync(`${olname}`, `${rnname}`);
            //   console.log(`"${st}" Added to the file`);
            readline.close();
          }
        );
        break;
      case "close":
        readline.close();
        break;
      default:
        console.log("X");
        break;
    }
  }
);
