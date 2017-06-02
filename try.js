'use strict';

console.log(typeof foo); // 'function'

var foo = 'foo';

function foo () {
    var bam = 'bam';
    console.log(bam);
}
