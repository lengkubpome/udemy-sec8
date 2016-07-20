/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import { AdventuresRxComponent } from './adventures-rx.component';

import { PostService } from './seccion9/post.service';
import {HTTP_PROVIDERS}from 'angular2/http'

@Component({
    selector: 'my-app',
    template: `
<!-- start => Seccion 8 : Introduction to Reactive Extensions  -->
        <h4>Chapter 80+ : Reaction</h4>
                <input id="search" type="text" class="form-control" placeholder="Search for artists...">
                <br>
                <adventures-rx></adventures-rx>

<!-- start => Seccion 9 : Connecting to the Server  -->

   
    `,
    directives: [AdventuresRxComponent],
    providers: [PostService, HTTP_PROVIDERS]




})
export class AppComponent {
    constructor(private _postService: PostService) {

        //start => Seccion 8 : Introduction to Reactive Extensions
        console.log(new Observable());

        var keyup = Observable.fromEvent($("#search"), "keyup")
            .map(e => e.target.value)
            .filter(text => text.length >= 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm => {
                var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                var promise = $.getJSON(url);
                return Observable.fromPromise(promise);
            });

        var subscription = keyup.subscribe(data => console.log(data));
        subscription;
        // subscription.unsubscribe; //<<<< cancel subscription   

        // var debounce = _.debounce(function (text) {
        //     var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
        //     $.getJSON(url, function (artists) {
        //         console.log(artists);
        //     });
        // }, 400);
        // $("#search").keyup(function (e) {
        //     var text = e.target.value;
        //     if (text.length < 3)
        //         return;
        //     debounce(text);
        // });

        //start => Seccion 9 : Connecting to the Server
        this._postService.getPosts()
            .subscribe(posts => console.log(posts));


    }
}