System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var NewsletterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NewsletterComponent = (function () {
                function NewsletterComponent(formbuilder) {
                    this.formbuilder = formbuilder;
                    this.form = formbuilder.group({
                        firstName: ['', [common_1.Validators.required, common_1.Validators.minLength(8)]],
                        lastName: ['', common_1.Validators.required],
                        emailAddress: ['', common_1.Validators.required],
                        address: formbuilder.group({
                            street: ['', common_1.Validators.required],
                            zip: ['', common_1.Validators.required],
                            city: ['', common_1.Validators.required]
                        })
                    });
                }
                NewsletterComponent.prototype.ngOnInit = function () {
                    this.form.valueChanges.
                        subscribe(function (form) {
                        sessionStorage.setItem('form', JSON.stringify(form));
                    });
                    var formValues = sessionStorage.getItem('form');
                    if (formValues) {
                        this.applyFormValues(this.registerForm, JSON.parse(formValues));
                    }
                };
                NewsletterComponent = __decorate([
                    core_1.Component({
                        selector: 'newsletter',
                        templateUrl: 'newsletter.template.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], NewsletterComponent);
                return NewsletterComponent;
            }());
            exports_1("NewsletterComponent", NewsletterComponent);
        }
    }
});
//# sourceMappingURL=newsletter.component.js.map