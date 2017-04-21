import Rx from 'rxjs/RX'

var button = document.querySelector('button');
// button.addEventListener('click', () => console.log('Clicked!'));

Rx.Observable
.fromEvent(button, 'click')
//.delay(1000)
.throttleTime(1000)
.scan(count => count + 1, 0)
.subscribe(count =>  console.log(`Clicked ${count} times`))

const observable = Rx.Observable.create((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000)
})

// console.log('just before subscribe')
// observable.subscribe({
//     next: x => console.log('got value ' + x),
//     error: err => console.error('something wrong occurred: ' + err),
//     complete: () => console.log('done'),
// })
// console.log('just after subscribe')

const foo = () => {
    console.log('Hello')
    return 42
}

console.log(foo.call())
console.log(foo.call())

console.log('--------------------------------------------------------------')

const fooObservable = Rx.Observable.create(observer => {
    try {
        console.log('Hello')
        observer.next(42)
        observer.next(33)
        setTimeout(() => {
            observer.next(50)
        }, 10)
        observer.complete()
    } catch (error) {
        observer.error(error)
    }
})

fooObservable.subscribe({
    next: (next) => { console.log(next) },
    error: (error) => { console.log('error') },
    complete: () => console.log('complete')
})

console.log('--------------------------------------------------------------')

var observable2 = Rx.Observable.from([10, 20, 30])
var subscription2 = observable2.subscribe(x => console.log(x))
// Later:
subscription2.unsubscribe()

console.log('--------------------------------------------------------------')

// var observable3 = Rx.Observable.create(function subscribe(observer) {
//     // Keep track of the interval resource
//     var intervalID = setInterval(() => {
//         observer.next('hi')
//     }, 1000)

//     // Provide a way of canceling and disposing the interval resource
//     return function unsubscribe() {
//         console.log(unsubscribe)
//         clearInterval(intervalID)
//     }
// })

// observable3.subscribe(x => console.log(x))

console.log('--------------------------------------------------------------')

const observer3 = {
    next: x => console.log('Observer got a next value: ' + x),
}

