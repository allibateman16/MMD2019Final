const round = document.querySelectorAll("#round")
console.log(round)

round.forEach(drawThis)

function drawThis(line) {
    line.classList.add("draw")
}

function drawThis(line, i) {
    setTimeout(function(){
       line.classList.add("draw")
    }, i * 1000)

}

