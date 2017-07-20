/* ES5 */
// var isMomHappy = false;
//
// // Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }
//
//     }
// );
//
// // call our promise
// var askMom = function () {
//     willIGetNewPhone.then(function (fulfilled) {
//             // yay, you got a new phone
//             console.log(fulfilled);
//             // output: { brand: 'Samsung', color: 'black' }
//         }).catch(function (error) {
//             // oops, mom don't buy it
//             console.log(error.message);
//             // output: 'mom is not happy'
//         });
// };
//
// askMom();
var Q = require('q');

function testFunc1(name) {
    var deferred = Q.defer();
    setTimeout(function () {
        deferred.resolve("test1 fonksiyonu : "+name);
    }, 500);

    return deferred.promise;
}

function testFunc2(name) {
    var deferred = Q.defer();

    setTimeout(function () {
        deferred.resolve("test2 fonksiyonu : "+ name);
    }, 100);

    return deferred.promise;
}

function testFunc3(name) {
    var deferred = Q.defer();

    setTimeout(function () {
        deferred.resolve("test3 fonksiyonu : "+name);
    }, 900);

    return deferred.promise;
}

function testFunc4(name) {
    var deferred = Q.defer();

    setTimeout(function () {
        deferred.resolve("test4 fonksiyonu : "+name);
    }, 300);

    return deferred.promise;
}

testFunc1("Betül")
    .then(function (result) {
        console.log(result);
        // testFunc2 fonksiyonunu çağırıyoruz
        return testFunc2("Hande");
    })
    .then(function (result) {

        console.log(result);

        // testFunc3 fonksiyonunu çağırıyoruz
        return testFunc3("Tuğba");
    })
    .then(function (result) {
        console.log(result);

        // testFunc4 fonksiyonunu çağırıyoruz
        return testFunc4("Yasemin");
    })
    .then(function (result) {
        //testFunc4 fonksiyonunu sonucu
        console.log(result);
    })
    .catch(function (error) {
        console.log("Hata : "+error);
    });


// function testFunc1(name,callback) {
//     setTimeout(function () {
//         callback(null,name);
//     }, 500);
// }
//
// function testFunc2(name,callback) {
//     setTimeout(function () {
//         callback(null,name)
//     }, 100);
// }
//
// function testFunc3(name,callback) {
//     setTimeout(function () {
//         callback(null,name)
//     }, 900);
// }
//
// function testFunc4(name,callback) {
//     setTimeout(function () {
//         callback(null,name)
//     }, 3000);
// }
//
// testFunc1("Betül",function(err,result1){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("testFunc1 sonucu : "+result1);
//         testFunc2("Hande",function(err,result2){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("testFunc2 sonucu : "+result2);
//                 testFunc3("Tuğba",function(err,result3){
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         console.log("testFunc3 sonucu : "+result3);
//                         testFunc4("Yasemin",function(err,result4){
//                             if(err){
//                                 console.log(err);
//                             }
//                             else{
//                                 console.log("testFunc4 sonucu : "+result4);
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });
