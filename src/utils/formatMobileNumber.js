export const formatMobileNumber = (number) => {
  if (number.slice(0,1) === '+') {
    return number
}

  if (number.slice(1,2) === '(') {
    return `+${number}`
  }
  return `+${number.slice(0,1)}(${number.slice(1,4)})${number.slice(4,7)}-${number.slice(7,9)}-${number.slice(9,11)}`
}