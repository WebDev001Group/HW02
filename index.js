function generate() {

    var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    var arr = []
    for (let i = 0; i < 6; i++) {
        arr[i] = randomIntFromInterval(1, 256);
    }
    var gradient = "linear-gradient(to bottom, rgba(" + arr[0] + "," + arr[1] + " , " + arr[2] + ", 0.52), rgba(" + arr[3] + ", " + arr[4] + ", " + arr[5] + ", 0.73))";


    document.getElementById("cp").style.backgroundImage = gradient

}

document.onload = generate();