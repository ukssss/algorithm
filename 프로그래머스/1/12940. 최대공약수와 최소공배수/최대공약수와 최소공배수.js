function solution(n, m) {
    return [gcd(n, m), lcd(n, m)];
}

function gcd(a, b) {
    let r = a % b;
    while (b !== 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function lcd(a, b) {
    return (a * b) / gcd(a, b);
}