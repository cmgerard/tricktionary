System.register(['angular2/core', 'angular2/router', './trick-detail.component', './trick.service'], function(exports_1, context_1) {
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
    var core_1, router_1, trick_detail_component_1, trick_service_1;
    var TricksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (trick_detail_component_1_1) {
                trick_detail_component_1 = trick_detail_component_1_1;
            },
            function (trick_service_1_1) {
                trick_service_1 = trick_service_1_1;
            }],
        execute: function() {
            TricksComponent = (function () {
                function TricksComponent(_router, _trickService) {
                    this._router = _router;
                    this._trickService = _trickService;
                }
                TricksComponent.prototype.getTricks = function () {
                    var _this = this;
                    this._trickService.getTricks().then(function (tricks) { return _this.tricks = tricks; });
                };
                TricksComponent.prototype.ngOnInit = function () {
                    this.getTricks();
                };
                TricksComponent.prototype.onSelect = function (trick) { this.selectedTrick = trick; };
                TricksComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['TrickDetail', { id: this.selectedTrick.id }]);
                };
                TricksComponent = __decorate([
                    core_1.Component({
                        selector: 'my-tricks',
                        templateUrl: 'app/templates/tricks.component.html',
                        styleUrls: ['app/css/tricks.component.css'],
                        directives: [trick_detail_component_1.TrickDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, trick_service_1.TrickService])
                ], TricksComponent);
                return TricksComponent;
            }());
            exports_1("TricksComponent", TricksComponent);
        }
    }
});
//# sourceMappingURL=tricks.component.js.map