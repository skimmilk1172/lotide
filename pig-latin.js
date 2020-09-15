const arg = process.argv.slice(2);
let output = '';
for (let i = 0; i < arg.length; i++) {
  for (let j = 1; j < arg[i].length; j++) {
    output += arg[i][j];
  }
  output += arg[i][0];
  output += 'ay ';
}
console.log(output);