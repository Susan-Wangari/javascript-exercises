//toggle the case of the sentence depending on the value of the case parameter.
function changeCase (sentence, c) {
    if(c === "upper") {
     return sentence.toLowerCase();
    } else if(c === "lower"){
        return sentence.toUpperCase();
    }
}
console.log(changeCase("Hello this is Susan Wangari", "lower"));
