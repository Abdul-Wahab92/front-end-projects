var calc_screen = document.getElementById('calc_screen');
var buttons = document.querySelectorAll('.btn');
var another_btn = document.querySelectorAll('.another_btn');

//insert buttons text into screen

Array.from(buttons).forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (calc_screen.textContent.length < 14) {

            var holdTarget = e.target.textContent;
            calc_screen.innerHTML += holdTarget;

        }
    })
})

// evaluate the screen text to result and add unique_btn text to screen

for (var buttons of another_btn) {
    buttons.addEventListener('click', function (e) {
        var holdTarget = e.target.textContent;

        //check condition for what to do if defferent button was pressed

        switch (holdTarget) {
            case "x":
                calc_screen.innerHTML += "*";
                break;
            case "=":
                calc_screen.innerHTML = eval(calc_screen.textContent);
                break;
            case "d":
                calc_screen.innerHTML = calc_screen.textContent.slice(0, calc_screen.textContent.length - 1);
                break;
            case "c":
                calc_screen.innerHTML = "";
                break;

        }
    })
}