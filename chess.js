let size = 20;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "@";
        }
    }
    board += "\n";
}

console.log(board);


let spHash = " #";
let hasgSp = "# ";
let length = 0;

while (length < 8) {
    length++;
    if (length % 2 == 0) {
        console.log(spHash.repeat(4));
    } else {
        console.log(hasgSp.repeat(4));
    }

}