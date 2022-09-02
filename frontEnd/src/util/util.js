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


export const isBlackColor = function(code) {
  var  color = hexToRgb(code)
  var result = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b
  return (result < 128) ? true : false
} 

// 컬러가 어디색에 가까운지 계산한다.
export const colorCheck = function(color) {
  var result = 0.2126*color.r + 0.7152*color.g + 0.0722*color.b
  return (result < 128) ? true : false
} 

//export const rgbToHex = (r, g, b) => {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// hexCode를 RGB로 변환
export const hexToRgb = function(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}