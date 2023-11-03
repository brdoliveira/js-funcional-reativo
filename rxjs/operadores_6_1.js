const { from, Observable } = require('rxjs')

function createPipeableOperator(nextGenerator){
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next: nextGenerator(subscriber)
            })
        })
    }
}

function nenhum(){
    return createPipeableOperator(subscriber => valor => {
        subscriber.complete()
    })
}

function primeiro(){
    return createPipeableOperator(subscriber => valor => {
            subscriber.next(valor)
            subscriber.complete()
        }
    )
    // // (subscriber => v => {}) // Função passando uma função 
    // return createPipeableOperator(subscriber => v => {
    //     subscriber.next(v)
    //     subscriber.complete()
    // })
}

function ultimo(){
    return function(source){
        return Observable.create(subscriber => {
            let ultimo
            source.subscribe({
                next(v){
                    ultimo = v
                },
                complete(){
                    if(ultimo !== undefined){
                        subscriber.next(ultimo)
                    }
                    subscriber.complete(ultimo)
                }
            })
        })
    }
}


from([1,2,3,4,5])
    .pipe(
        nenhum(),
        // primeiro(),
        // ultimo()
    )
    .subscribe(console.log)