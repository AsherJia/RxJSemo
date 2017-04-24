import Rx from 'rxjs/RX'

// var button = document.querySelector('button');
// // button.addEventListener('click', () => console.log('Clicked!'));

// Rx.Observable
// .fromEvent(button, 'click')
// //.delay(1000)
// .throttleTime(1000)
// .scan(count => count + 1, 0)
// .subscribe(count =>  console.log(`Clicked ${count} times`))

// const observable = Rx.Observable.create((observer) => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     setTimeout(() => {
//         observer.next(4);
//         observer.complete();
//     }, 1000)
// })

// // console.log('just before subscribe')
// // observable.subscribe({
// //     next: x => console.log('got value ' + x),
// //     error: err => console.error('something wrong occurred: ' + err),
// //     complete: () => console.log('done'),
// // })
// // console.log('just after subscribe')

// const foo = () => {
//     console.log('Hello')
//     return 42
// }

// console.log(foo.call())
// console.log(foo.call())

// console.log('--------------------------------------------------------------')

// const fooObservable = Rx.Observable.create(observer => {
//     try {
//         console.log('Hello')
//         observer.next(42)
//         observer.next(33)
//         setTimeout(() => {
//             observer.next(50)
//         }, 10)
//         observer.complete()
//     } catch (error) {
//         observer.error(error)
//     }
// })

// fooObservable.subscribe({
//     next: (next) => { console.log(next) },
//     error: (error) => { console.log('error') },
//     complete: () => console.log('complete')
// })

// console.log('--------------------------------------------------------------')

// var observable2 = Rx.Observable.from([10, 20, 30])
// var subscription2 = observable2.subscribe(x => console.log(x))
// // Later:
// subscription2.unsubscribe()

// console.log('--------------------------------------------------------------')

// // var observable3 = Rx.Observable.create(function subscribe(observer) {
// //     // Keep track of the interval resource
// //     var intervalID = setInterval(() => {
// //         observer.next('hi')
// //     }, 1000)

// //     // Provide a way of canceling and disposing the interval resource
// //     return function unsubscribe() {
// //         console.log(unsubscribe)
// //         clearInterval(intervalID)
// //     }
// // })

// // observable3.subscribe(x => console.log(x))

// console.log('--------------------------------------------------------------')

// const observer3 = {
//     next: x => console.log('Observer got a next value: ' + x),
// }

// console.log('--------------------------------------------------------------')

// const observable4 = Rx.Observable.create(function subscribe(observer) {
//   try {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     // throw new Error('Error...')
//     observer.complete('Asher');
//   } catch (err) {
//     observer.error(err); // delivers an error if it caught one
//   }
// });

// observable4.subscribe({
//     next: next => console.log('Next: ', next),
//     error: err => console.log('Subscribe Error: ', err),
//     complete: comp => console.log('Complete: ', comp)
// })

// console.log('-------------------------------------------------------------------')

// var observable5 = Rx.Observable.from([10, 20, 30]);
// var subscription5 = observable.subscribe(x => console.log(x));
// // Later:
// subscription5.unsubscribe();

// console.log('-------------------------------------------------------------------')

// function subscribe6(observer) {
//     var intervalID = setInterval(() => {
//         observer.next('hi')
//     }, 1000)

//     return function unsubscribe() {
//         console.log('unsubscribe...')
//         clearInterval(intervalID)
//     }
// }

// var unsubscribe6 = subscribe6({ next: x => console.log(x) })

// // Later:
// setInterval(() => {
//     unsubscribe6() // dispose the resources
// }, 5000)

// console.log('-------------------------------------------------------------------')

// var observable7 = Rx.Observable.interval(400);
// var observable8 = Rx.Observable.interval(300);

// var subscription7 = observable7.subscribe(x => console.log('first: ' + x));
// var childSubscription8 = observable8.subscribe(x => console.log('second: ' + x));

// subscription7.add(childSubscription8);

// setTimeout(() => {
//   // Unsubscribes BOTH subscription and childSubscription
//   subscription7.unsubscribe();
// }, 1000);

// console.log('-------------------------------------------------------------------')

// var subject8 = new Rx.ReplaySubject(3); // buffer 3 values for new subscribers ，注:缓存了三个值。

// subject8.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// subject8.next(1);
// subject8.next(2);
// subject8.next(3);
// subject8.next(4);

// subject8.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject8.next(5);

// console.log('-------------------------------------------------------------------')

// A multicasted Observable uses a Subject under the hood to make multiple Observers see the same Observable execution.
// const source9 = Rx.Observable.from([1, 2, 3, 4])
// const subject9 = new Rx.Subject()
// const multicasted9 = source9.multicast(subject9)

// multicasted9.subscribe({
//     next: x => console.log('ObserverA: ', x)
// })

// multicasted9.subscribe({
//     next: x => console.log('ObserverB: ', x)
// })

// multicasted9.connect()
// console.log('refCount: ', multicasted9.refCount())

// console.log('-------------------------------------------------------------------')

// refCount makes the multicasted Observable automatically start executing when the first subscriber arrives,
// and stop executing when the last subscriber leaves.

// BehaviorSubjects are useful for representing "values over time". For instance, an event stream of birthdays is a Subject,
// but the stream of a person's age would be a BehaviorSubject.

// var subject = new Rx.BehaviorSubject(0); // 0 is the initial value

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(3);

// A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.
// var subject = new Rx.ReplaySubject(2); // buffer 3 values for new subscribers

// subject.subscribe({ next: (v) => console.log('observerA: ' + v) });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({ next: (v) => console.log('observerB: ' + v) });

// subject.next(5);

// var subject = new Rx.ReplaySubject(100, 500 /* windowTime */);

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// var i = 1;
// setInterval(() => subject.next(i++), 200);

// setTimeout(() => {
//   subject.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   });
// }, 1000);

// The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, and only when the execution completes.
// var subject = new Rx.AsyncSubject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(5);
// subject.complete();

