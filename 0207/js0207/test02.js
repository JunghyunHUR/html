// const dt=new Date();

//날짜 관련 method
// const nYear = dt.getFullYear();//연도
// const nMonth = dt.getMonth()+1; //배열 [0,1,2,3.....11]
// const nDate = dt.getDate();
// console.log(nMonth);
//시간 getHours();
// 분 getMinutes();
//초 getSeconds();
//밀리초 getMilliseconds();

//요일 getDay
// const nDay = dt.getDay(); //[0,1,2,3,4,5,6]
// console.log(nDay);

//2023년 2월 7일 화요일 00시

//`$(변수명) 문자열 $(변수명)`

// const dt = new Date();
// const nYear = dt.getFullYear();
// const nMonth = dt.getMonth()+1;
// const nDate = dt.getDate();
// const nHour = dt.getHours();
// const myDay = ["일","월","화","수","목","금","토"];
// const nDay = dt.getDay();

// const nowDate = `오늘은 ${nYear}년 ${nMonth}월 ${nDate}일 ${myDay[nDay]}요일 ${nHour}시 입니다.`;
// console.log(nowDate);

// let nnDay = dt.nDay;
// switch(nDay){
//     case 0:
//         nnDay="일";
//         break
//     case 1:
//         nnDay="월";
//         break
//     case 2:
//         nnDay="화";
//         break
//     case 3:
//         nnDay="수";
//         break
//     case 4:
//         nnDay="목";
//         break
//     case 5:
//         nnDay="금";
//         break
//     case 6:
//         nnDay="토"; 
// }
// const dt = new Date();
// const olp = new Date(1988, 09, 17);
// const dateDiff = dt.getTimes() - olp.getTimes();
/* 
1초 = 1000마이크로초
1분 = 1000*60
1시간 = 1000*60*60
1일 = 1000*60*60*24
*/
// const result = Math.ceil(dateDaiff/(1000*60*60*24));
// const theMonth = olp.getMonth();
// const theDay = olp.getDay();
// const myDay = ["일","월","화","수","목","금","토"];
// const theTime = olp.getTimes();
// console.log(`88올림픽이 열린 날은 ${myDay[theDay]}요일 입니다.`);
// console.log(theTime);
// console.log(dateDiff);

//올해 연말 까지 남은 일 수를 계산해 보세요


// const toDay = new Date();
// const nYear = toDay.getFullYear();
// const theDate = new Date(nYear, 11, 31);
// const diffDate = theDate.getTime()-toDay.getTime();
// // Math.ceil 반올림
// const rs = Math.ceil(diffDate/(60*60*24*1000));
// console.log(`연말까지 ${rs}일 남았습니다`);


