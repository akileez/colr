//
//    █████╗ ██╗  ██╗██╗██╗     ███████╗███████╗███████╗
//   ██╔══██╗██║ ██╔╝██║██║     ██╔════╝██╔════╝╚══███╔╝
//   ███████║█████╔╝ ██║██║     █████╗  █████╗    ███╔╝
//   ██╔══██║██╔═██╗ ██║██║     ██╔══╝  ██╔══╝   ███╔╝
//   ██║  ██║██║  ██╗██║███████╗███████╗███████╗███████╗
//   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝╚══════╝
//
//       Copyright (c) 2021, Keith Williams. (ISC)

// striped down version of colorz
exports.reset     = (s) => '\u001b[0m'  + s + '\u001b[0m'
exports.bold      = (s) => '\u001b[1m'  + s + '\u001b[22m'
exports.dim       = (s) => '\u001b[2m'  + s + '\u001b[22m'
exports.italic    = (s) => '\u001b[3m'  + s + '\u001b[23m'
exports.underline = (s) => '\u001b[4m'  + s + '\u001b[24m'
exports.inverse   = (s) => '\u001b[7m'  + s + '\u001b[27m'
exports.hidden    = (s) => '\u001b[8m'  + s + '\u001b[28m'
exports.strike    = (s) => '\u001b[9m'  + s + '\u001b[29m'
exports.black     = (s) => '\u001b[30m' + s + '\u001b[39m'
exports.gray      = (s) => '\u001b[90m' + s + '\u001b[39m'
exports.grey      = (s) => '\u001b[90m' + s + '\u001b[39m'
exports.red       = (s) => '\u001b[31m' + s + '\u001b[39m'
exports.green     = (s) => '\u001b[32m' + s + '\u001b[39m'
exports.yellow    = (s) => '\u001b[33m' + s + '\u001b[39m'
exports.blue      = (s) => '\u001b[34m' + s + '\u001b[39m'
exports.magenta   = (s) => '\u001b[35m' + s + '\u001b[39m'
exports.cyan      = (s) => '\u001b[36m' + s + '\u001b[39m'
exports.white     = (s) => '\u001b[37m' + s + '\u001b[39m'
exports.bgBlack   = (s) => '\u001b[40m' + s + '\u001b[49m'
exports.bgGray    = (s) => '\u001b[40m' + s + '\u001b[49m'
exports.bgGrey    = (s) => '\u001b[40m' + s + '\u001b[49m'
exports.bgRed     = (s) => '\u001b[41m' + s + '\u001b[49m'
exports.bgGreen   = (s) => '\u001b[42m' + s + '\u001b[49m'
exports.bgYellow  = (s) => '\u001b[43m' + s + '\u001b[49m'
exports.bgBlue    = (s) => '\u001b[44m' + s + '\u001b[49m'
exports.bgMagenta = (s) => '\u001b[45m' + s + '\u001b[49m'
exports.bgCyan    = (s) => '\u001b[46m' + s + '\u001b[49m'
exports.bgWhite   = (s) => '\u001b[47m' + s + '\u001b[49m'
exports.brBlack   = (s) => '\u001b[90m' + s + '\u001b[39m'
exports.brGray    = (s) => '\u001b[90m' + s + '\u001b[39m'
exports.brGrey    = (s) => '\u001b[90m' + s + '\u001b[39m'
exports.brRed     = (s) => '\u001b[91m' + s + '\u001b[39m'
exports.brGreen   = (s) => '\u001b[92m' + s + '\u001b[39m'
exports.brYellow  = (s) => '\u001b[93m' + s + '\u001b[39m'
exports.brBlue    = (s) => '\u001b[94m' + s + '\u001b[39m'
exports.brMagenta = (s) => '\u001b[95m' + s + '\u001b[39m'
exports.brCyan    = (s) => '\u001b[96m' + s + '\u001b[39m'
exports.brWhite   = (s) => '\u001b[97m' + s + '\u001b[39m'
exports.bbBlack   = (s) => '\u001b[100m' + s + '\u001b[49m'
exports.bbGray    = (s) => '\u001b[100m' + s + '\u001b[49m'
exports.bbGrey    = (s) => '\u001b[100m' + s + '\u001b[49m'
exports.bbRed     = (s) => '\u001b[101m' + s + '\u001b[49m'
exports.bbGreen   = (s) => '\u001b[102m' + s + '\u001b[49m'
exports.bbYellow  = (s) => '\u001b[103m' + s + '\u001b[49m'
exports.bbBlue    = (s) => '\u001b[104m' + s + '\u001b[49m'
exports.bbMagenta = (s) => '\u001b[105m' + s + '\u001b[49m'
exports.bbCyan    = (s) => '\u001b[106m' + s + '\u001b[49m'
exports.bbWhite   = (s) => '\u001b[107m' + s + '\u001b[49m'

exports.strip = (s) => {
  return s.replace(/(?:\u001b\[)\d+m/g, '')
}

exports.wrap = function wrap (s, c) {
  if (!c) return s
  c = Array.isArray(c) ? c : [c]

  return c.length > 1 ? wrap(c[0](s), c.slice(1)) : c[0](s)
}

exports.expose = (c, s, no) => {
  if (typeof s === 'boolean') {
    no = s
    s = 'Hello World'
  }

  s = s || 'Hello World'

  return no
    ? Array.isArray(c)
      ? json(wrap(s, c))
      : json(c(s))
    : Array.isArray(c)
      ? json(wrap(s, c)).replace(/(\\u001b\[\d+m)/g, c[0](['$1']))
      : json(c(s)).replace(/(\\u001b\[\d+m)/g, c(['$1']))
}

const json = (s) => JSON.stringify(s)
