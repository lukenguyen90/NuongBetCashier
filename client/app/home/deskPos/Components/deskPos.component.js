"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var desk_service_1 = require('../../../Services/desk.service');
var DeskPosComponent = (function () {
    function DeskPosComponent(deskService) {
        this.deskService = deskService;
    }
    DeskPosComponent.prototype.loadDesks = function () {
        var _this = this;
        return this.deskService.getDesks()
            .subscribe(function (desks) { return _this.desks = desks.data; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    DeskPosComponent.prototype.ngOnInit = function () {
        this.loadDesks();
    };
    DeskPosComponent = __decorate([
        core_1.Component({
            selector: 'desk-list',
            template: "\n\t\t\t \t<div class=\"col-xs-6 col-md-3 desk-pos\" *ngFor=\"let desk of desks; let i=index\">\n\t\t            <div class=\"desk-pos-name\">{{desk.name}}</div>\n\t\t            <div class=\"desk-pos-type\">\n\t\t                {{desk.type}}\n\t\t            </div>\n\t\t        </div>\n\t\t\t"
        }), 
        __metadata('design:paramtypes', [desk_service_1.DeskService])
    ], DeskPosComponent);
    return DeskPosComponent;
}());
exports.DeskPosComponent = DeskPosComponent;
//# sourceMappingURL=deskPos.component.js.map