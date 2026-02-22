function PolyFillPromiseAll(promises){
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;

        if(promises.length == 0) return resolve([]);

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((value) => {
                results[index] = value;
                count++;

                if(count == promises.length) resolve(results);

            }).catch((err) => {
                reject(err);
            })
        })

    })
}

PolyFillPromiseAll([p1,p2,p3])