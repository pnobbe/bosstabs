/**
 * Currency Converter
 * This is a service class that converts the OSRS currency between calculable and readable.
 */
export default class CurrencyConverter {
  toInt (str) {
    /** Thousand **/
    if (new RegExp(/k/i).test(str)) {
      if (new RegExp(/\..k/i).test(str)) {
        str = str.replace('.', '')
        return parseInt(str.replace(/k/i, '00'))
      }
      return parseInt(str.replace(/\.k/i, '000'))
    }

    /** Million **/
    if (new RegExp(/m/i).test(str)) {
      if (new RegExp(/\..m/i).test(str)) {
        str = str.replace('.', '')
        return parseInt(str.replace(/m/i, '00000'))
      }
      return parseInt(str.replace(/\.m/i, '000000'))
    }

    /** Billion **/
    if (new RegExp(/b/i).test(str)) {
      if (new RegExp(/\..b/i).test(str)) {
        str = str.replace('.', '')
        return parseInt(str.replace(/b/i, '00000000'))
      }
      return parseInt(str.replace(/\.b/i, '000000000'))
    }

    /** No special case **/
    return parseInt(str)
  }

  toString (number) {
    number = Number(number)

    let abbr
    if (number >= 1e12) {
      abbr = 't'
    } else if (number >= 1e9) {
      abbr = 'b'
    } else if (number >= 1e6) {
      abbr = 'm'
    } else if (number >= 1e3) {
      abbr = 'k'
    } else {
      console.log(number)
      return number + ''
    }
    return this.annotate(number, 2, abbr)
  }

  annotate (number, maxPlaces, abbr) {
    let rounded = 0
    switch (abbr) {
      case 't':
        rounded = number / 1e12
        break
      case 'b':
        rounded = number / 1e9
        break
      case 'm':
        rounded = number / 1e6
        break
      case 'k':
        rounded = number / 1e3
        break
      case '':
        rounded = number
        break
    }
    if (maxPlaces !== false) {
      let test = new RegExp('\\.\\d{' + (maxPlaces + 1) + ',}$')
      if (test.test(('' + rounded))) {
        rounded = rounded.toFixed(maxPlaces)
      }
    }
    return rounded + abbr
  }
}
