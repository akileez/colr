# colr


### Installation
```bash
$ npm install akileez\colr
```

### Usage
```js
const { red, blue, bold, underline, bbBlue, black, green, yellow, cyan, magenta } = require('colr')

log(
  blue(`I'm blue`),
  bold(blue('da ba dee')),
  underline(bold(blue('da ba daa')))
)

log(`
  There's a ${underline(blue('house'))},
  With a ${bold(blue('window'))},
  And a ${blue('corvette')}
  ${bbBlue(black('And everything is blue'))}
`)

log(bold(`I'm ${blue(`da ba ${underline('dee')} da ba`)} daa`))

log(`${red('Da')} ${blue('ba')} ${yellow('dee')} ${green('da')} ${cyan('ba')} ${magenta('daa')}`)
```
![colr output](img/colr.png)

### API
```js

```

### Why?


### See Also
-

### License
[ISC](https://github.com/akileez/colr/blob/master/LICENSE)

