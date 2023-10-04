// Clojure é quando uma função "lembra"
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico

const somarXmais3 = require('./clojure_escopo')
const x = 1000

console.log(somarXmais3())