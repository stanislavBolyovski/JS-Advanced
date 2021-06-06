    function math(first, second, operation) {
        first = Number(first);
        second = Number(second);

        let result = 0;
        switch (operation) {
            case "+":
                result = first + second;
                break;
            case "-":
                result = first - second;
                break;
            case "*":
                result = first * second;
                break;
            case "/":
                result = first / second;
                break;
            case "**":
                result = first ** second;
                break;
            case "%":
                result = first % second;
                break;
        }
        console.log(result);
    }

    math(3, 5.5, '*');