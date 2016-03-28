System.register(['angular2/core', './trick-details.component'], function(exports_1, context_1) {
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
    var core_1, trick_details_component_1;
    var AppComponent, TRICKS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (trick_details_component_1_1) {
                trick_details_component_1 = trick_details_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tricktionary';
                    this.tricks = TRICKS;
                }
                AppComponent.prototype.onSelect = function (trick) { this.selectedTrick = trick; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>Tricks</h2>\n    <ul class=\"tricks\">\n      <li *ngFor=\"#trick of tricks\"\n        [class.selected]=\"trick === selectedTrick\"\n        (click)=\"onSelect(trick)\">\n        <span class=\"badge\">{{trick.id}}</span> {{trick.name}}\n      </li>\n    </ul>\n    <my-trick-detail [trick]=\"selectedTrick\"></my-trick-detail>\n  ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .tricks {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .tricks li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .tricks li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .tricks li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .tricks .text {\n      position: relative;\n      top: -3px;\n    }\n    .tricks .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "],
                        directives: [trick_details_component_1.TrickDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            TRICKS = [
                { "id": 1, "name": "AS" },
                { "id": 2, "name": "TS" },
                { "id": 3, "name": "CL" },
                { "id": 4, "name": "Criss-Cross" },
                { "id": 5, "name": "Toad" },
                { "id": 6, "name": "Crouger" },
                { "id": 7, "name": "EB" },
                { "id": 8, "name": "One Hand release" },
                { "id": 9, "name": "Double under" },
                { "id": 10, "name": "Tripple under" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map