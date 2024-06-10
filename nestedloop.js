    // for(i = 1; i <= 2; i++){
    //     for(j = 1; j<= 5; j++){
    //         console.log("week "+ i + " day " + j );
    //     }
    // }

    // for(year = 2023; year < 2025; year++){
    //     console.log("Present year is " + year);
    //     for(month = 6; month < 9; month++){
    //         console.log(".........." + month);
    //     }
    // }

//    for(num = 1; num < 13; num++){
//     // console.log(num);
//     for(mul = 3; mul <=3; mul++){
//         console.log(mul + " x " + num + " = " + num*mul );
//     }
//    }

    // for(num = 100; num > 10; num = num - 10){
    //     for (var j = 10; j > 4; j = j - 5) {
    //         console.log(num + " divided by " + j + " equals " + num / j);
    //     }
    // }

//     var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//     // console.log(i);
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }


    // for(i = 1; i <=10; i++){
    //     // console.log(i);
    //     if(i === 1){
    //         console.log("Gold medal");
    //     }else if(i === 2){
    //         console.log("Silver medal");
    //     }else if(i===3){
    //         console.log("Bronze medal")
    //     }else{
    //         console.log(i);
    //     }
    // }

    for(var i=1; i<=10; i++){
        switch(i){
            case  1:
                console.log("Gold medal");
                break;
            case 2:
                console.log("Silver medal");
                break;
            case 3:
                console.log("Bronze medal");
                break;
            default:
                console.log(i);
        }
    }


    // TENARY OPERATOR
    // var age = 28

    // const beverage  = age >= 24 ? "beer" : "malt"
    // console.log(beverage);