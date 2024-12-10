// #1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); // изменение
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));

// #2
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

/*
    У нас после Promise результат может быть один, то есть resolve or reject.
    В нашем случае используется только resolve, но дважды.
    Если выше было #1 правило, то #2 правило у нас про количество использования resolve or reject.
    По нашим правилам, resolve или reject могут быть использованы только один раз, и при повторном использовании остальные будут игнорироваться.

    По #1 и #2 правилам наш ответ будет 1, а второй resolve(2) будет проигнорирован.
*/

// 3
promise.then(f1).catch(f2);

promise.then(f1, f2);

/*
    Абсолютно нет. В случае появление ошибки в then в первом примере оно будет
    отрабатываться а втором примере нет. Это можно понять через определение then,
    и then у нас передает result or error в следующий блок. И во втором примере 
    нету блока catch который мог бы отрабатывать ошибку и ошибки которые потенциально
    могут возникать в 'f1' не будут обработаны.
*/