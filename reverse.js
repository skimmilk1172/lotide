const arg = process.argv.slice(2);
for (let i = 0; i < arg.length; i++) {
  let output = '';
  for (let j = arg[i].length - 1; j >= 0; j--) {
    output += arg[i][j];
  }
  console.log(output);
}