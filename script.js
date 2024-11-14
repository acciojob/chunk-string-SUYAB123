function stringChop(str, size) {
  if (!str || size <= 0) {
    return [];
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); 
alert(stringChop(str, size).join(", ")); 