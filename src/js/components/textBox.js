'use strict';

angular.module('textBox', ['service'])
.component('textBox', {
   bindings: {
          lang: '@',
          box: '@'
        },
    template:'<span ng-init="$ctrl.setTxt()" ng-changes($ctrl.lang)="$ctrl.setTxt()" ng>{{$ctrl.txtvalue}}</span>'+
        '<div ng-if="$ctrl.showEdit">'+
        '<span ng-click="$ctrl.setForm()" class="icoEdit"> </span>'+
        '<div class="modalView" ng-Show="$ctrl.showModal">'+
            '<div>{{$ctrl.base}}</div>'+
            '<span>|</span> <span ng-repeat="it in $ctrl.bases" ng-click="$ctrl.setBase(it)">'+
            ' {{$ctrl.langs[it]}} |</span>'+
            '<div class="LangActual">{{$ctrl.langActTitle}}<div><input ng-model="$ctrl.nuevas[$ctrl.lang]" /></div></div>'+
            '<button ng-click="$ctrl.showModal=!$ctrl.showModal" class="fRight"> close </button>'+
            '<button ng-click="$ctrl.saveN()" class="fRight"> save </button>'+
        '</div>',
    controller: function(myService){
        var vm = this;
        vm.showModal = '';
        var initModal = '';
        var completa = [];
        vm.langs = [];
        vm.bases = [];
        vm.nuevas = []; 
        vm.langActTitle;

        //seteo la pagina
        vm.setTxt = function(){
            vm.txtvalue = myService.getThisLangTxt(vm.lang, vm.box);
            vm.showEdit = false;
            if  (vm.txtvalue == ''){
                vm.showEdit = true;
                vm.txtvalue = myService.getThisLangTxt(vm.lang, 't00000txt01');
            } else {
                vm.showModal = false;
            }
        }

        //seteo formulario traducion
        vm.setForm = function (){
            vm.showModal = !vm.showModal;
            if(initModal == false){
                initModal = true;
                completa = myService.getThisTxt(vm.box);
                vm.langs = myService.getThisTxt('lenguajes');
                    for(var i in completa) {
                        if (completa[i] !== '' & completa[i] !== vm.box){
                            vm.bases.push(i);
                            }else if (completa[i] === ''){
                            vm.nuevas[i]='';
                            console.log(vm.nuevas);
                            }
                        }    
                    vm.base = completa.es;
                    vm.configForm();
                }
            }
        vm.configForm = function (){
            vm.nueva = vm.nuevas[vm.lang]; // apunto objeto idioma actual
            vm.langActTitle = vm.langs[vm.lang];
        }
                
        //ver base
        vm.setBase = function(lang){
            vm.base =  completa[lang]; //borrar
            }
        // salvo y exporto al servicio
        vm.saveN = function(){
            myService.setThisTxt(vm.lang, vm.box, vm.nuevas[vm.lang]);
            }

        //verifico los cambios para actualizar texto
        vm.$onChanges = function(lang) {
            vm.setTxt();
            if(vm.showModal){vm.configForm()}
            }
        }
    }
)