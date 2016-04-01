System.register(['angular2/core', 'angular2/router', './trick', './trick.service'], function(exports_1, context_1) {
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
    var core_1, router_1, trick_1, trick_service_1;
    var TrickDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trick_1_1) {
                trick_1 = trick_1_1;
            },
            function (trick_service_1_1) {
                trick_service_1 = trick_service_1_1;
            }],
        execute: function() {
            TrickDetailComponent = (function () {
                function TrickDetailComponent(_trickService, _routeParams) {
                    this._trickService = _trickService;
                    this._routeParams = _routeParams;
                }
                TrickDetailComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    var id2 = +this._routeParams.get('id2');
                    this._trickService.getTrick(id, id2);
                };
                TrickDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', trick_1.Trick)
                ], TrickDetailComponent.prototype, "trick", void 0);
                TrickDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-trick-detail',
                        templateUrl: 'app/templates/trick-detail.component.html',
                        styleUrls: ['app/css/trick-detail.component.css']
                    }), 
                    __metadata('design:paramtypes', [trick_service_1.TrickService, router_1.RouteParams])
                ], TrickDetailComponent);
                return TrickDetailComponent;
            }());
            exports_1("TrickDetailComponent", TrickDetailComponent);
        }
    }
});
//# sourceMappingURL=trick-detail.component.js.map