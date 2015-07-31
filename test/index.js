var test = require('tape')
var isCombinator = require('..')

test('+', function (t) {
    var str = '+'
    t.equal(isCombinator(str), true)
    t.end()
})

test('>', function (t) {
    var str = '>'
    t.equal(isCombinator(str), true)
    t.end()
})

test('~', function (t) {
    var str = '~'
    t.equal(isCombinator(str), true)
    t.end()
})
