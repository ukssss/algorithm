function solution(slice, n) {
    let pizza = 1;
    while (parseInt((pizza * slice) / n) < 1) {
        pizza++;
    }
    return pizza;
}