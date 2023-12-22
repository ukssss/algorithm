function solution(phone_number) {
    const cnt = phone_number.substring(0, phone_number.length - 4).length;
    let last = phone_number.substring(phone_number.length - 4, phone_number.length);
    for(let i = 0; i < cnt; i++) {
        last = "*" + last;
    }
    return last;
}