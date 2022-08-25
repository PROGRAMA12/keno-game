var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

var userChosenNums = []

var winnerNum = []
var numberCounter = 0




function addition() {
    winnerNum = []
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 1000)
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 3000)
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 5000)
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 7000)

    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 9000)
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 11000)
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 13000)
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 15000)
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
    }, 17000)
    setTimeout(function winner() {
        var indexer = Math.floor((Math.random() * (numbers.length)))
        winnerNum.push(numbers[indexer])


        document.getElementById("list").innerHTML = winnerNum
        numbers.splice(indexer, 1)
        comparison()
    }, 19000)


}

function subUserNums() {
    userChosenNums.push(document.getElementById("userPlace").value)
    userChosenNums.push(document.getElementById("userPlace1").value)
    userChosenNums.push(document.getElementById("userPlace2").value)
    userChosenNums.push(document.getElementById("userPlace3").value)
    userChosenNums.push(document.getElementById("userPlace4").value)
    console.log(userChosenNums.length);

    return document.getElementById("userPlaceFinal").innerHTML = userChosenNums

}

function comparison() {
    for (var i = 0; i < userChosenNums.length; i += 1) {
        console.log(winnerNum.indexOf(userChosenNums[i]), typeof(userChosenNums[i]), typeof(winnerNum[i]))


        if (winnerNum.indexOf(Number(userChosenNums[i])) != -1) {
            numberCounter++
        }

    }
    return document.getElementById("results").innerHTML = "თქვენ გამოიცანით    " + numberCounter + "  ციფრი"
}




function findeWinner() {



    setTimeout(function() { return document.getElementById("Winner").innerHTML = names[indexer] }, 5000)

}