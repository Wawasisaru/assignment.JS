
// Extract the first four characters from the string below;
// "beautiful"
const beautiful = 'beautiful'

console.log(beautiful.slice(0,4))
// Insert the following string at the tenth index of the below variable:
// "eat"
// const food = "I did not have appetite today"
const food = "I did not have appetite today";
const Index=10;
const output=food.slice(0,Index)+"eat";
console.log(output);

// Count how many times the following string appears in the string variable:
// 1. "the"
const story= "She sells sea shells at the sea shore"
const story1="the"
const story2=story.split(story1).length-1;
console.log(story2);
// story-different
// 2."s"
const story3="s"
const story4=story.split(s3).length-1;
console.log(s4);
// 1. UpperCase: "CONfidant"
const girl="CONfidant";
console.log(girl.toUpperCase());
//2. LowerCase: "amazing", "beautiFUL"
const school="amaizing";
console.log(school.toLowerCase());
const identity="beautiful";
console.log(identity.toLowerCase());

// 3. Title case "A busy office"
let n="A busy office";

let s=n.split(" ").map(w=>w[0].toUpperCase()+w.substring(1).toLowerCase());
console.log(n);

// Using JavaScript, find the following words from the following strings:
// 1. "market"
// const string1 = "The lady went to the market with her sister";
const string1 = 'The lady went to the market with her sister'

console.log(string.indexOf("market"));
// 2. "season"
// const string2 = "My favorite season is spring"
const string2 = "My favorite season is spring";
console.log(string2.indexOf("season"));
//  Option 1