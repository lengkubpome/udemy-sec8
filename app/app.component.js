/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx', './adventures-rx.component', './seccion9/post.service', 'angular2/http', './seccion9/github-profile.component'], function(exports_1, context_1) {
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
    var core_1, Rx_1, adventures_rx_component_1, post_service_1, http_1, github_profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (adventures_rx_component_1_1) {
                adventures_rx_component_1 = adventures_rx_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (github_profile_component_1_1) {
                github_profile_component_1 = github_profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService) {
                    //start => Seccion 9 : Connecting to the Server
                    // this._postService.createPost({userId:1,title:"a",body:"b"});
                    this._postService = _postService;
                    this.isLoading = true;
                    //start => Seccion 8 : Introduction to Reactive Extensions
                    console.log(new Rx_1.Observable());
                    var keyup = Rx_1.Observable.fromEvent($("#search"), "keyup")
                        .map(function (e) { return e.target.value; })
                        .filter(function (text) { return text.length >= 3; })
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .flatMap(function (searchTerm) {
                        var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                        var promise = $.getJSON(url);
                        return Rx_1.Observable.fromPromise(promise);
                    });
                    var subscription = keyup.subscribe(function (data) { return console.log(data); });
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
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //start => Seccion 9 : Connecting to the Server
                    this._postService.getPosts()
                        .then(function (posts) {
                        _this.isLoading = false;
                        console.log(posts[0].userId);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<!-- start => Seccion 8 : Introduction to Reactive Extensions  -->\n        <h4>Chapter 80+ : Reaction</h4>\n                <input id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search for artists...\">\n                <br>\n                <adventures-rx></adventures-rx>\n\n<!-- start => Seccion 9 : Connecting to the Server  -->\n    <div *ngIf=\"isLoading\">\n        <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    </div> \n\n    <github-profile></github-profile>\n   \n    ",
                        directives: [adventures_rx_component_1.AdventuresRxComponent, github_profile_component_1.GitHubProfileComponent],
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map