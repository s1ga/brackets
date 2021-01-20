module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i <= bracketsConfig.length; i++) {
    bracketsConfig.forEach(value => {
        const brackets = value[0] + value[1]
        while (str.indexOf(brackets) >= 0) {
          const index = str.indexOf(brackets)
          str = str.slice(0, index) + str.slice(index + 2)
        }
    })
  }
  return str ? false : true
}
