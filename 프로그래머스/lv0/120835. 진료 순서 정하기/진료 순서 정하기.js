function solution(emergency) {
    // 내림차순 정렬, sort 는 원배열이 정렬되기에 스프레드 연산자를 사용해서 진행
    const sortDown = [...emergency].sort((a, b) => b - a);
    let answer = [];

    // for of 사용
    for (const element of emergency) {
        // sortDown, emergency 비교해서 인덱스 값 추출, 0 부터 시작하기에 1 증가
        answer.push(sortDown.indexOf(element) + 1);
    }

    return answer;
}