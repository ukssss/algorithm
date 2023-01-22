# [level 0] 진료 순서 정하기 - 120835

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120835)

### 성능 요약

메모리: 33.4 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 코딩테스트 입문

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 <code>emergency</code>가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>중복된 원소는 없습니다.</li>
<li>1 ≤ <code>emergency</code>의 길이 ≤ 10</li>
<li>1 ≤ <code>emergency</code>의 원소 ≤ 100</li>
</ul>

<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>emergency</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[3, 76, 24]</td>
<td>[3, 1, 2]</td>
</tr>
<tr>
<td>[1, 2, 3, 4, 5, 6, 7]</td>
<td>[7, 6, 5, 4, 3, 2, 1]</td>
</tr>
<tr>
<td>[30, 10, 23, 6, 100]</td>
<td>[2, 4, 3, 5, 1]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p>입출력 예 #1</p>

<ul>
<li><code>emergency</code>가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><code>emergency</code>가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.</li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li><code>emergency</code>가 [30, 10, 23, 6, 100]이므로 응급도의 크기 순서대로 번호를 매긴 [2, 4, 3, 5, 1]를 return합니다.</li>
</ul>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges

---

### 풀이

정수 배열 `emergency` 가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return 하는 solution 함수를 제작하는 문제이다.

값이 높을수록 응급도가 높기에 배열을 내림차순 정렬을 해주어야 한다. 기존 배열 값을 내림차순 정렬한 배열에 비교하여 지정된 요소를 찾아 나온 인덱스 값을 새로운 배열에 넣어 진료 순서를 나타내었고, 이를 return 할 수 있도록 설계했다.

배열을 내림차순 정렬을 할때 `sort()` 가 원배열도 정렬되는 것에 유의해야 한다. 복사본이 만들어지는 것이 아니다. 그래서 나는 스프레드 연산자를 사용해서 새로운 배열을 만들어주었다.

```js
// 내림차순 정렬, sort 는 원배열이 정렬되기에 스프레드 연산자를 사용해서 진행
const sortDown = [...emergency].sort((a, b) => b - a);
```

다음은 emergency 배열에 존재하는 값들이 sortDown 배열에서 몇 번째 인덱스를 차지하는지를 파악하면 된다. 이는 `for of` 문을 사용해서 emergency 값 하나씩 뽑을 수 있게 하였으며, `indexOf()` 를 사용하여 배열에서 지정된 요소를 찾을 수 있도록 설계하였다. 그리고 나온 인덱스 값을 answer 배열에 추가하였다.

```js
// for of 사용
for (const element of emergency) {
  // sortDown, emergency 비교해서 인덱스 값 추출, 0 부터 시작하기에 1 증가
  answer.push(sortDown.indexOf(element) + 1);
}
```

응급도 높은 순서대로 진료 순서를 answer 배열에 추가하였고 이를 return 하여 문제를 마무리했다.
