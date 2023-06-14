/*
Math.abs(숫자) : 숫자의 절댓값을 반환
Math.max(1,3,5,6,7) : 가장 큰 값을 반환
Math.min(1,3,5,6,7) : 가장 작은 값을 반환
Math.pow(숫자, 제곱값) : 숫자의 거듭제곱값을 반환
Math.sqrt(숫자) : 숫자의 제곱근
Math.PI : 원주율

Math.random() : 0과 1 사이의 난수 를 반환
Math.round(숫자) : 소수점 첫째 자리에서 반올림한 정수
Math.ceil(숫자) : 소수점 첫째 자리에서 무조건 올림한 정수
Math.floor(숫자) : 소수점 첫째 자리에서 무조건 내림한 정수 parseInt()


*/

/* 
1. 10, 5, 8, 30 중 가장 큰 수를 구하라.
2. 10, 5, 8, 30 중 가장 작은 수를 구하라.

변수num = 2.13215이다.
3. num을 반올림 한 수를 구하라
4. num을 소수점 첫째 자리 내림 한 수를 구하라.
5. num을 소수점 첫째 자리 올림 한 수를 구하라.
6. 0부터 1사이의 난수를 발생 시켜라
7. 원주율 상수를 출력하라.
8. 0부터 30사이의 난수를 발생 시켜라.



*/
console.log(Math.max(10, 5, 8, 30)); //1번
console.log(Math.min(10, 5, 8, 30)); //2번

const num = 2.13215;
console.log(Math.round(num)); //3번
console.log(Math.floor(num)); //4번
console.log(Math.ceil(num)); //5번
console.log(Math.random()); //6번
console.log(Math.PI); //7번
console.log(Math.floor(Math.random()*31)); //8번
