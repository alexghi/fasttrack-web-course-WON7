// var keepsHisWord;

// keepsHisWord = true;

// console.log('initializing promise')

// const promise1 = new Promise(function(resolve, reject) {
//     if( keepsHisWord ) {
//         resolve('the man likes to keep his word')
//     }
//     else {
//         reject('the man doen\'t want to keep his word')
//     }
// })

var howIs = 'cool'

console.log('promise initialized')

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(['student1', 'student2'])
        
        
        // resolve({
        //     message: `this man who is ${howIs} likes to keep his word`,
        //     code: `whatever_you_like`
        // })
    }, 5 * 1000)
})


console.log('after promise initialized')


promise2
    .then(
        function(data) {
            console.log(data);
            console.log('1st then  - after promise is resolved')
            
            return new Promise((resolve, reject) => {
                
                setTimeout(() => {
                    reject({
                        reason: 'no_more_money'
                    })
                }, 2000)
            })
        }
    )
    .then(
        function(aaa) {
            console.log(aaa)
            console.log('2nd then - you are here now')
        }
    )
    .then(
        function() {
            console.log('3rd - and now right here')
        }
    )
    .catch(function(e) {
        console.log('something went wrong because of reason', e)
    }) 
    .finally(function() {
        console.log('nothing left to say')
    })


console.log('some random action operation')

