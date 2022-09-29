const abc = "abcdefghijklmnopqrstuvwxyz";
const numb = "0123456789";
const symb = "*&%$#@";

let useAbc = true;
let useUpperAbc = true;
let useNumb = true;
let useSymb = true;
let limit = 10;
const bucket = [];

if (useAbc) bucket.push(abc);
if (useNumb) bucket.push(numb);
if (useSymb) bucket.push(symb);
if (useUpperAbc) bucket.push(abc.toUpperCase());

function gen([...chars], limit) {
  const randomNum = chars.length;
  const gimmeRandom = (num) => Math.floor(Math.random() * num);
  const passwordArr = [];
  let ensureThisChar = 0;
  
  while (ensureThisChar < randomNum) {
    const randomBucketIndex = gimmeRandom(limit);
    const currentChar = chars[ensureThisChar];
    if (passwordArr[randomBucketIndex]) {
      continue;
    }
    const randomChar = currentChar[gimmeRandom(currentChar.length)];
    passwordArr[randomBucketIndex] = randomChar;
    ensureThisChar++;
  }
  
  for (let i = 0; i < limit; i++) {
    if (passwordArr[i]) {
      continue;
    }
    const randomIndex = gimmeRandom(randomNum);
    const totalChars = chars[randomIndex].length;
    const randomCharIndex = gimmeRandom(totalChars);
    const randomChar = chars[randomIndex][randomCharIndex]
    passwordArr[i] = randomChar;
  }
  return passwordArr;
}

const password = gen(bucket, limit);

console.log(password.join(""));
