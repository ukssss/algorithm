# 자바스크립트의 9가지 코드 트릭

> [프로그래머스 코딩테스트 광탈 방지 A to Z : JavaScript 강의](https://school.programmers.co.kr/learn/courses/13213/13213-%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B4%91%ED%83%88-%EB%B0%A9%EC%A7%80-a-to-z-javascript) 를 보고 참고하여 정리한 내용입니다.

## Table of Contents

- [구조 분해 할당을 이용한 변수 swap](#구조-분해-할당을-이용한-변수-swap)
- [배열 생성으로 루프 제거하기](#배열-생성으로-루프-제거하기)
- [배열 내 같은 요소 제거하기](#배열-내-같은-요소-제거하기)
- [Spread 연산자를 이용한 객체 병합](#spread-연산자를-이용한-객체-병합)
- [&&, || 활용](#활용)
- [구조 분해 할당 사용](#구조-분해-할당-사용)
- [비구조화 할당 사용하기](#비구조화-할당-사용하기)
- [동적 속성 이름](#동적-속성-이름)
- [!! 연산자를 사용하여 Boolean 값으로 바꾸기](#연산자를-사용하여-boolean-값으로-바꾸기)

### 구조 분해 할당을 이용한 변수 swap

ES6의 구조 분해 할당 문법을 사용하여 두 변수를 swap 할 수 있다.

```jsx
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log(a, b);
```

### 배열 생성으로 루프 제거하기

보통 단순히 범위 루프를 돌고 싶다면 다음과 같이 작성한다.

```jsx
let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}
```

범위 루프를 함수형 프로그래밍 방식으로 사용하고 싶다면 배열을 생성해서 사용할 수 있다.

```jsx
const sum = Array.from(new Array(5), (_, i) => i + 5).reduce((acc, cur) => acc + cur, 0);
```

### 배열 내 같은 요소 제거하기

`Set` 사용

```jsx
const names = ['kim', 'lee', 'park', 'lee', 'kim'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];
```

### Spread 연산자를 이용한 객체 병합

두 객체를 별도 변수에 합칠 수 있다.

```jsx
const person = {
  name: 'Hong Seonguk',
  familyName: 'Hong',
  givenName: 'Seonguk',
};

const company = {
  name: 'Pukyong National University',
  address: 'Busan',
};

const myProfile = { ...person, ...company };
console.log(myProfile);

// {
//   name: 'Pukyong National University',
//   familyName: 'Hong',
//   givenName: 'Seonguk',
//   address: 'Busan'
// }
```

### &&, || 활용

```jsx
// ||
// 기본값을 넣어주고 싶을 때 사용할 수 있음
// participantName이 0, undefined, 빈 문자열, null 일 경우 'Guest'로 할당된다.
const name = participantName || 'Guest';

// &&
// flag가 true일 경우에만 실행
flag && func();

// 객체 병합에도 이용할 수 있다.
const makeCompany = (showAddress) => {
  return {
    name: 'Pukyong National University',
    ...(showAddress && { address: 'Busan' }),
  };
};

console.log(makeCompany(false));
// { name: 'Pukyong National University' }
console.log(makeCompany(true));
// { name: 'Pukyong National University', address: 'Busan' }
```

### 구조 분해 할당 사용

객체에서 필요한 것만 꺼내 쓰는 것이 좋다.

```jsx
const person = {
  name: 'Hong Seonguk',
  familyName: 'Hong',
  givenName: 'Seonguk',
  company: 'Pukyong National University',
  address: 'Busan',
};

const { familyName, givenName } = person;
```

**객체 생성시 키 생략하기**

객체를 생성할 때 프로퍼티 키를 변수 이름으로 생략할 수 있다.

```jsx
const name = 'Hong Seonguk';
const company = 'PKNU';
const person = {
  name,
  company,
};

console.log(person);

// { name: 'Hong Seonguk', company: 'PKNU' }
```

### 비구조화 할당 사용하기

함수에 객체를 넘길 경우 필요한 것만 꺼내 쓸 수 있다.

```jsx
const makeCompany = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};

const cobalt = makeCompany({ name: 'PKNU', address: 'Busan', serviceName: 'Univ' });
```

### 동적 속성 이름

ES6에 추가된 기능으로 객체의 키를 동적으로 생성할 수 있다.

```jsx
const nameKey = 'name';
const emailKey = 'email';
const person = {
  [nameKey]: 'Hong Seonguk',
  [emailKey]: '1872003115su@gmail.com',
};

console.log(person);

// { name: 'Hong Seonguk', email: '1872003115su@gmail.com' }
```

### !! 연산자를 사용하여 Boolean 값으로 바꾸기

!! 연산자를 이용하여 `0, null, 빈 문자열, undefined, NaN`을 `false`로, 그 외에는 `true`로 변경할 수 있다.

```jsx
function check(variable) {
  if (!!variable) {
    console.log(variable);
  } else {
    console.log('Wrong Value');
  }
}

check(null); // Wrong Value
check(3.14); // 3.14
check(undefined); // Wrong Value
check(0); // Wrong Value
check('Good'); // Good
check(''); // Wrong Value
check(NaN); // Wrong Value
check(5); // 5
```
