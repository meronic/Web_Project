

function Convert(obj) { // 변환기능을 하는 함수 구현 

  result = ''; // 결과값을 저장할 변수

  type_from = obj.type_select.value; // 입력받은 진법.
  type_to = obj.result_select.value; // 어떤 진법으로 바꿀건지
  val_from = obj.input.value; // 입력받은 값

  deci_from = parseInt(val_from,type_from); // 일단 10진수로
  val_to =deci_from.toString(type_to); // 해당 원하는 지수로 환산하여 수치 문자열을 만든다.
  result = val_to.toUpperCase(); // 결과값 저장

  if (val_from == false) { //값을 입력하지 않는 경우 알림 설정
  	alert("값을 입력해주세요");
  	result = '입력값이 없습니다.';
  }

  obj.result.value = result; // 결과에 출력
} 

