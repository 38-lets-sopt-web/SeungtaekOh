function solution(num_list) {
  var answer = 0;
  if (num_list.length > 10) {
    for (i = 0; i < num_list.length; i++) {
      answer += num_list[i];
    }
  } else {
    answer = 1;
    for (i = 0; i < num_list.length; i++) {
      answer *= num_list[i];
    }
  }
  return answer;
}
