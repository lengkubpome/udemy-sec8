/// <reference path="../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import { ControlGroup, FormBuilder } from 'angular2/common';

@Component({
    selector: 'adventures-rx',
    template: `
        <form [ngFormModel]="form">
            <input type="text" ngControl="search_rx">
        </form>
    `
})

export class AdventuresRxComponent {

    form: ControlGroup;


    constructor(fb: FormBuilder) {
        // Example 1 : Creating an observable from DOM events
        this.form = fb.group({
            search_rx: []
        });

        var search_rx = this.form.find('search_rx');
        search_rx.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '-'))
            .subscribe(x => console.log(x));

        // Example 3 : Creating an observable from an array

        // var observable = Observable.fromArray([1, 2, 3]);
        // observable.subscribe(x => console.log(x));


        // var startDates = [];
        // var startDate = new Date();

        // for (var day = -2; day <= 2; day++) {
        //     var date = new Date(
        //         startDate.getFullYear(),
        //         startDate.getMonth(),
        //         startDate.getDate() + day
        //     );
        //     startDates.push(date);
        // }

        // Observable
        //     .fromArray(startDates)
        //     .map(date => {
        //         console.log("Geeting deals for date " + date)
        //         return[1,2,3];
        //         })
        //     .subscribe(x => console.log(x));

        // Example 4 : Other ways to create an observable
        var observable1 = Observable.of(1);
        var observable2 = Observable.of(1, 2, 3);
        var observable3 = Observable.of([1, 2, 3]);
        var observable4 = Observable.empty();
        var observable5 = Observable.range(1, 5);
        var observable6 = Observable.fromArray([1, 2, 3]);
        // observable6.subscribe(x=>console.log(x));

        // Example 5 : Implementing a timer  
        var observableEx5 = Observable.interval(1000);
        // observableEx5
        //     .flatMap(x=>{
        //         console.log("calling the server to get the latest news");
        //         return Observable.of([1,2,3]);
        //     })
        //     .subscribe(news=>console.log(news));

        // Example 6 : Running Parallel Operations
        // var userStream = Observable.of({
        //     userId: 1, username: 'Leng'
        // }).delay(5000);
        // var tweetsStream = Observable.of([1, 2, 3]).delay(1500);

        // Observable
        //     .forkJoin(userStream, tweetsStream)
        //     .map(joined =>
        //         new Object({ user: joined[0], tweets: joined[1] }))
        //     .subscribe(result => console.log(result));

        // Example 7.1 : Handling Errors
        // var observableEx7 = Observable.throw(new Error("Something failed."));

        // observableEx7.subscribe(
        //     x=> console.log(x),
        //     error => console.error(error)          
        // );

        // var counter = 0;
        // var ajaxCall = Observable.of('url')
        //     .flatMap(() => {
        //         if(++counter<2){
        //             console.log(counter)
        //             return Observable.throw(new Error("Request failed"));
        //         }
        //         return Observable.of([1,2,3]);
        //     });

        // ajaxCall
        //     .retry(3)
        //     .subscribe(x => console.log(x),
        //     error => console.error(error)
        // )

        // Example 7.2 : Catching and continuing
        var remoteDataStream = Observable.of([4,5,6])

        remoteDataStream
            .catch(err =>{
                var localDataStream = Observable.of([1,2,3]);
                return localDataStream;
            })
            .subscribe(x=> console.log(x));

        // Example 7.3 : Timeouts
        var remoteDataStream2 = Observable.of([1,2,3]).delay(5000);   
        remoteDataStream2
            .timeout(1000)
            .subscribe(
                x=> console.log(x),
                error => console.error(error)                
            );

        // Example 8 : Getting notified when an observable completes
        var remoteDataStreamEx8 = Observable.of([1,2,3]).delay(3000);   
        remoteDataStreamEx8
            .subscribe(
                x=> console.log(x),
                error => console.log(error),
                () => console.log("Completed")                
            );
    }
};