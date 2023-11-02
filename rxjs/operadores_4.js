const { from, Observable } = require('rxjs')

function nenhum(){
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(v){
                    subscriber.complete()
                }
            })
        })
    }
}

function primeiro(){
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(v){
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
    }
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