function solution(hp) {
    var answer = 0;
    let jang = Math.floor(hp / 5);
    let byeong = Math.floor((hp % 5) / 3);
    let il = Math.floor(((hp % 5) % 3) / 1);
    answer = jang + byeong + il;
    return answer;
}