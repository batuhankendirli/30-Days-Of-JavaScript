// EXERCISES

// Level 1
// 1
const text =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const numberPattern = /\d+/g;

const total = text
  .match(numberPattern)
  .reduce((acc, curr) => acc + Number(curr), 0);
console.log(total);

// 2
const text2 =
  'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
const pointPattern = /-?\d/g;
const sortedPoints = text2.match(pointPattern).sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log(distance);

// 3
const pattern = /^\[-]/g;
const is_valid_variable = function (string) {
  const regex = /^([a-zA-Z_$][a-zA-Zd_$]*)$/;
  return regex.test(string);
};
console.log(is_valid_variable('firstname'));
console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('1first_name'));

// Level 2
// 1
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const tenMostFrequentWords = function (string, number) {
  const withoutPunctuation = string
    .replace(/[^\w\s\']|/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');

  const uniqueWords = withoutPunctuation.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  const arr = [];
  for (let i = 0; i < uniqueWords.length; i++) {
    let count = 0;
    for (let j = 0; j < withoutPunctuation.length; j++) {
      if (uniqueWords[i] == withoutPunctuation[j]) {
        count++;
      }
    }
    const obj = {
      word: uniqueWords[i],
      count: count,
    };
    arr.push(obj);
  }

  return arr.sort((a, b) => b.count - a.count).slice(0, number);
};

console.log(tenMostFrequentWords(paragraph, 10));

// Level 3
// 1
const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?';
const cleanText = function (text, number) {
  const withoutPunctuation = text
    .replace(/[^\w\s\']|/g, '')
    .replace(/\s+/g, ' ')
    .split(' ');
  const uniqueWords = withoutPunctuation.filter(
    (word, index, self) => self.indexOf(word) === index
  );
  const arr = [];
  for (let i = 0; i < uniqueWords.length; i++) {
    let count = 0;
    let obj = {};

    for (let j = 0; j < withoutPunctuation.length; j++) {
      if (uniqueWords[i] === withoutPunctuation[j]) {
        count++;
      }
    }
    obj.word = uniqueWords[i];
    obj.count = count;
    arr.push(obj);
  }
  return arr.sort((a, b) => b.count - a.count).slice(0, number);
};

console.log(cleanText(sentence, 8));

// END OF THE EXERCISES
