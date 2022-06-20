async function myPromise() {
    const isCool = true;

    try {
        var data = await new Promise(function(resolve, reject) {
            setTimeout(() => {
                reject('student list fetch error')
                // resolve(['student1', 'student2'])
                console.log('resolving students now')
                
                // resolve({
                //     message: `this man who is ${howIs} likes to keep his word`,
                //     code: `whatever_you_like`
                // })
            }, 5 * 1000)
        })
    }
    catch(e) {
        console.log('error', e)
    }
    
    const t = new Promise(function(resolve, reject) {
        setTimeout(() => {
            reject('something went wrong')
            resolve(['teacher1', 'teacher2'])
            console.log('resolving teacher now')
            
            // resolve({
            //     message: `this man who is ${howIs} likes to keep his word`,
            //     code: `whatever_you_like`
            // })
        }, 5 * 1000)
    })

    const sum = function(a, b) {
        console.log('your sum result', a + b );
    }

    sum(1, 2)


    return t


}

myPromise()
    .then((data) => {
        console.log('data after promise resolve', data)
    })
    .then(()=> {
        console.log('after')
    })
    .catch(function(e) {
        console.log('error', e);
    } ) 
    .finally( function() {
        console.log('regardless of error or success, finally show this')
    })