function solution(money) {
    let user = [];
    let coffee = user.push(parseInt(money / 5500));
    let change = user.push(parseInt(money % 5500));
    return user;
}