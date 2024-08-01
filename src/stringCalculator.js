function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  if (!numbers.includes(",")) {
    return parseInt(numbers);
  }

  const nums = numbers.split(",").map(Number);

  return nums.reduce((a, b) => a + b, 0);
}

module.exports = add;
