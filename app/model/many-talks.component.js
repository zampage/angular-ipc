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
var ManyTalks = (function () {
    function ManyTalks() {
        this.allTalks = [
            {
                'shortname': 'Angular',
                'longname': 'Modern Web with Angular 2 - cleaner, simpler, sensible',
                'description': 'The sheer pace of Modern Web evolution has been demanding a sensible and stable framework for a long time now. The question is, which framework stands out? Which framework caters the need of continuous evolution? The answer: Angular 2.',
                'speaker': {
                    'firstname': 'Anas Raza',
                    'lastname': 'Firdousi'
                }
            },
            {
                'shortname': 'Symfony',
                'longname': 'Symfony2 – von 0 auf 100 in wenigen Stunden',
                'description': 'Das Symfony-Framework ist erwachsen geworden und die Basis vieler Webseiten und Anwendungen. Das Framework bedient sich bewährter Methoden und Architekturen, auch von anderen Plattformen beziehungsweise Sprachen. Der Workshop behandelt im ersten Teil die wichtigsten Schlüsselkonzepte von Symfony: Installation, Architektur, Bundles, MVC, Twig-Templates. Im zweiten Teil werden fortgeschrittene Themen angeschnitten. Dazu gehören unter anderem Datenbankzugriffe mit Doctrine 2, Formulare, Dependency Injection, HTTP Caching. Die Einführung erfolgt anhand eines konkreten Beispiels und zeigt, wie in kurzer Zeit eine Webanwendung mit Symfony gebaut werden kann.',
                'speaker': {
                    'firstname': 'Timo',
                    'lastname': 'Habkern'
                }
            }
        ];
    }
    ManyTalks.prototype.selectTalk = function (talk) {
        this.selected = talk;
    };
    ManyTalks = __decorate([
        core_1.Component({
            selector: 'many-talks',
            templateUrl: './app/model/many-talks.template.html',
            styleUrls: ['./app/model/many-talks.style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ManyTalks);
    return ManyTalks;
}());
exports.ManyTalks = ManyTalks;
//# sourceMappingURL=many-talks.component.js.map