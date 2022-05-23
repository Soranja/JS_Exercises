let fu = "FU";
let bar = "BAR";
let counter = 0;


while (counter < 100){
    counter++;

    if (counter % 15 == 0){
        console.log(fu + bar);
    } else if (counter % 5 == 0) {
        console.log(bar);
    } else if (counter % 3 == 0)  {
        console.log(fu);
    } else  {
        console.log(counter);
    }
}
