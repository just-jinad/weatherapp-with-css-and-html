
// var veggies = ['Ugwu', 'shoko', 'Ewedu']
// console.log(veggies.length);
// console.log(veggies[0]);
// console.log(veggies[1]);

// for(var i = 0; i<veggies.length; i++){
//     console.log(i+1, veggies[i]);
// }

// function counter(a , b){
//     var c = a*b
//     var bee = null
//     console.log(typeof(bee));
// }
// counter("50" , 3)

// try{
//     // console.log(a+b);
//     throw new ReferenceError()
// }
// catch (err){
//     console.log(err);
//     console.log("My codes is using catch err");
// }
// console.log("my codes dont stop because of a try err catch");

// function  addTwoNums(a, b){
//     try{
//     console.log(a+b)
//     if(typeof(a) != 'number'){
//         throw new ReferenceError("the first argument is not a number")
//     }else if(typeof(b) !='number'){
//     throw new ReferenceError("the second argument is not a number")
//     }
// }
//     catch(err){
//         console.log("Error!", err)
//     }

// }
// addTwoNums("5",  5)



function letterFinder(word, match) {
    condition1  = typeof(word) == 'string' && word.length >= 2
    condition2 = typeof(match) == 'string' && match.length == 1
    if(condition1 && condition2 == true){
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}else{
    console.log("Please pass correct arguments to the function.")
}

    }
    letterFinder("word", "o")

// function letterFinder(word, match) {
//     var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
//     var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
//     if(condition1 && condition2) { //if both condition matches
//         for(var i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 //check if the character at this i position in the word is equal to the match
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     } else {
//         //if the requirements don't match
//         console.log("Please pass correct arguments to the function")
//     }
// }
// letterFinder([],[])
// letterFinder("cat","c")