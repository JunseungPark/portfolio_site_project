//돈 단위 컴마 붙이기
export const comma = function (str) {
  return String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//돈 단위 컴마 붙이기
export const filterComma = function (str) {
  return String(str).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// 날짜 맵핑
export const filterDate = function (str) {
  let date = str.split(' ')[0].split('/')
  return date[2] + "년 " + date[0] + "월 " + date[1] + "일"
}