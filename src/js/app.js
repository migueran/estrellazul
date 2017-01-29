'use strict';

angular.module("app", ['textBox', 'service'])
.controller("mainController", mainController);

function mainController (myService){
    var vm = this;
    //servicio
    vm.txtService = myService.getService();

    vm.actlang = 'es';
    vm.sign = 'mrando.via@gmail.com';

    //txt porcentaje de traduccion
    vm.percentLangEs = percentLang('es');
    vm.percentLangEn = percentLang('en');
    vm.percentLangFr = percentLang('fr');
    vm.percentLangIt = percentLang('it');
    vm.percentLangPt = percentLang('pt');
    
    function percentLang(lang){
        var elementos = [];
        vm.txtService.forEach(function (elem) {
          elementos.push(elem[lang]);        
        })
        var activos = elementos.filter(function(e){return e != '';})
        var salida = Math.floor(activos.length / elementos.length * 100);
        return salida;
    };
 
    //seteo lenguaje
    vm.setLang = function (lang){
        vm.actlang = lang;
        vm.intro = setTxt(0);
        return vm.actlang;
    };

    //seteo intro
    vm.intro = setTxt(0);
    function setTxt(index){
        return vm.txtService[index][vm.actlang];
    };
}