// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


fakeRequestCallback('book.com', function (res) {
    console.log('SUCCESS!!', res);
}, function (err) {
    console.log('Failure!!', err);
})

// calling promise
const request = fakeRequestPromise('book.com/api');
request.then(() => {
    console.log('It worked!!')
    fakeRequestPromise('book.com/api/page2').then(() => {
        console.log("It worked page 2")
    }).catch(() => {
        console.log("It failed page 2")
    })
}).catch(() => {
    console.log('It failed!!!')
})

//Promises
fakeRequestPromise('yelp.com').then(() => {
    console.log('It worked!!')
    return fakeRequestPromise('yelp.com/page2')
}).then(() => {
    console.log('page2')
})

//New promise
new Promise((resolve, reject) => {
    resolve();
})

// Own promise
const fakerequest = (url) => {
    return new Promise((resolve, reject) => {
        const ran = Math.random();
        setTimeout(() => {
            if (ran < 0.7) {
                resolve('Your data is goood');
            }
            reject('Your data is baad');
        }, 1000);
    })
}
fakerequest('catch!').then((data) => {
    console.log('Done!!', data)
}).catch((err) => {
    console('Not done!!', err)
})



