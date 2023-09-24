let text = prompt("enter your text")

function typeText() {
    let index = 0;
    let length = text.length;
    let out = '';
    let htmlOut = document.getElementById("typewritter")

    function typer() {
        let interval = setTimeout(function () {
            out += text[index]
            htmlOut.innerHTML = out
            index++

            if (index == length) {
                clearTimeout(interval)
                return true
            }

            typer()
        }, 200)
    }

    typer()
}

typeText()