//extracts a portion of the string with the defined start and end points
function extractString(sentence, start, end) {
return sentence.slice(start, end);
}
console.log(extractString("I am phenomenal", 5, 15));
