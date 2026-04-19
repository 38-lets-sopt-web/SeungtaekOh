function solution(num_list) {
  var answer = 0;
  let isEven = 0;
  let isOdd = 0;
  num_list.map((num) => {
    const strNum = num.toString();
    if (n % 2 == 0) isEven += strNum;
    else isOdd += n;
  });
  answer = Number(isEven) + Number(isOdd);
  return answer;
}
