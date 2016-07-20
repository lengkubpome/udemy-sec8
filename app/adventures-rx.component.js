/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1, common_1;
    var AdventuresRxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AdventuresRxComponent = (function () {
                function AdventuresRxComponent(fb) {
                    // Example 1 : Creating an observable from DOM events
                    this.form = fb.group({
                        search_rx: []
                    });
                    var search_rx = this.form.find('search_rx');
                    search_rx.valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (x) { return console.log(x); });
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
                    var observable1 = Rx_1.Observable.of(1);
                    var observable2 = Rx_1.Observable.of(1, 2, 3);
                    var observable3 = Rx_1.Observable.of([1, 2, 3]);
                    var observable4 = Rx_1.Observable.empty();
                    var observable5 = Rx_1.Observable.range(1, 5);
                    var observable6 = Rx_1.Observable.fromArray([1, 2, 3]);
                    // observable6.subscribe(x=>console.log(x));
                    // Example 5 : Implementing a timer  
                    var observableEx5 = Rx_1.Observable.interval(1000);
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
                    var remoteDataStream = Rx_1.Observable.of([4, 5, 6]);
                    remoteDataStream
                        .catch(function (err) {
                        var localDataStream = Rx_1.Observable.of([1, 2, 3]);
                        return localDataStream;
                    })
                        .subscribe(function (x) { return console.log(x); });
                    // Example 7.3 : Timeouts
                    var remoteDataStream2 = Rx_1.Observable.of([1, 2, 3]).delay(5000);
                    remoteDataStream2
                        .timeout(1000)
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                    // Example 8 : Getting notified when an observable completes
                    var remoteDataStreamEx8 = Rx_1.Observable.of([1, 2, 3]).delay(3000);
                    remoteDataStreamEx8
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }, function () { return console.log("Completed"); });
                }
                AdventuresRxComponent = __decorate([
                    core_1.Component({
                        selector: 'adventures-rx',
                        template: "\n        <form [ngFormModel]=\"form\">\n            <input type=\"text\" ngControl=\"search_rx\">\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AdventuresRxComponent);
                return AdventuresRxComponent;
            }());
            exports_1("AdventuresRxComponent", AdventuresRxComponent);
            ;
        }
    }
});
//# sourceMappingURL=adventures-rx.component.js.map