const { from, Observable } = require("rxjs");

function createPipeableOperator(operatorFn) {
  return function (source) {
    return Observable.create((subscriber) => {
        const sub = operatorFn(subscriber)
      source.subscribe({
        next: sub, next,
        error: sub.error || (e => subscriber.error(e)),
        complete: sub.complete || (c => subscriber.complete(c))
      });
    });
  };
}

function nenhum() {
  return createPipeableOperator((subscriber) => ({
    next(v) {
      subscriber.complete();
    },
  }));
}

function primeiro() {
  return createPipeableOperator((subscriber) => ({
    next(v) {
      subscriber.next(v);
      subscriber.complete();
    },
  }));
}

function ultimo() {
  let ultimo;
  return createPipeableOperator((subscriber) => ({
    next(v) {
      ultimo = v;
    },
    complete() {
      if (ultimo !== undefined) {
        subscriber.next(ultimo);
      }
      subscriber.complete(ultimo);
    },
  }));
}

from([1, 2, 3, 4, 5])
  .pipe(
    nenhum()
    // primeiro(),
    // ultimo()
  )
  .subscribe(console.log);
