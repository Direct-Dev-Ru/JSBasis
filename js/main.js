function sumTov1(n) {
    "use strict";
    if (typeof (n) === "string") {
        n = parseInt(n);
    }
    if (isNaN(n)) {
        return NaN;
    }
    let sum = 0;
    for (var i = n; i > 0; i--) {
        sum = sum + i;
    }

    return sum;
}

function sumTov2(n) {
    "use strict";
    if (typeof (n) === "string") {
        n = parseInt(n);
    }
    if (isNaN(n)) {
        return NaN;
    }
    if (n === 1) {
        return 1;
    } else {
        return n + sumTov2(n - 1);
    }
}

function sumTov3(n) {
    "use strict";
    if (typeof (n) === "string") {
        n = parseInt(n);
    }
    if (isNaN(n)) {
        return NaN;
    }
    return n * (n + 1) / 2;
}

function factorial(n) {
    "use strict";
    if (typeof (n) === "string") {
        n = parseInt(n);
    }

    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function fib(n) {
    "use strict";
    if (typeof (n) === "string") {
        n = parseInt(n);
    }
    if (isNaN(n)) {
        return NaN;
    }

    let a = 1,
        b = 1;

    for (var i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}