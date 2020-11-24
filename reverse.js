const reversed_argv = process.argv.slice(2).join(" ").split("").reverse().join("");

console.log(reversed_argv)