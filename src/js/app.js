'use strict';

angular.module("app", ['textBox', 'service'])
.controller("mainController", mainController);

function mainController (myService){
    var vm = this;

    vm.actlang = 'es';
    vm.sign = 'mrando.via@gmail.com';

    //txt porcentaje de traduccion
    function percentLang(){
        vm.percentLangEs = myService.getPercentLang('es');
        vm.percentLangEn = myService.getPercentLang('en');
        vm.percentLangFr = myService.getPercentLang('fr');
        vm.percentLangIt = myService.getPercentLang('it');
        vm.percentLangPt = myService.getPercentLang('pt');
    }
    percentLang();
 
    //seteo lenguaje
    vm.setLang = function (lang){
        vm.actlang = lang;
        vm.intro = setIntro();
        percentLang();
        return vm.actlang;
    }

    //seteo intro
    vm.intro = setIntro();
    function setIntro(){
        return myService.getThisLangTxt(vm.actlang,'intro');
    }

    //verifico los cambios para actualizar porcentaje

}