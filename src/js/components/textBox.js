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
            '<span class="fLeft" ng-click="$ctrl.baseEsp()"> Español </span> | <span class="fRight" ng-click="$ctrl.baseEn()"> English </span>'+
            '<div class="LangActual">{{$ctrl.langActTitle}}<div><input value="{{$ctrl.nueva}}"/></div></div>'+
            '<button ng-click="$ctrl.showModal=!$ctrl.showModal" class="fRight"> close </button>'+
            '<button ng-click="$ctrl.saveN()" class="fRight"> save </button>'+
        '</div>',
    controller: function(myService){
        var vm = this;
        vm.showModal = '';
        vm.completa = [];
        vm.langs = [];
        vm.langActTitle;


        //seteo la pagina
        vm.setTxt = function(){
            vm.txtvalue = myService.getThisLangTxt(vm.lang, vm.box);
            vm.showEdit = false; //ocultar, no borrar // creo el var createEdit = false?
            if  (vm.txtvalue == ''){
                vm.showEdit = true;
                vm.txtvalue = myService.getThisLangTxt(vm.lang, 't00000txt01');
            } else {
                vm.showModal = false;
            }
        }

        //seteo formulario traducion
        vm.setForm = function (){
            vm.showModal = true;
            vm.completa = myService.getThisTxt(vm.box);
            vm.langs = myService.getThisTxt('lenguajes');
            //genero el obje1 box y su metodo new
                for(var i in vm.completa) {
                    if (vm.completa[i] !== '' & vm.completa[i] !== vm.box){
                        // genero objeto bloque texto por lenguaje
                        // genero el boton por lenguaje y su metodo
                        }else if (vm.completa[i] === ''){
                            // genero objeto bloque texto por lenguaje
                        }
                    }
                vm.base = vm.completa.es;
                vm.configForm();
            }
        vm.configForm = function (){
            vm.nueva = vm.completa[vm.lang]; // apunto objeto idioma actual
            vm.langActTitle = vm.langs[vm.lang];
            console.log(vm.langActTitle);
        }
                
        //funciones para sumar idiomas
        vm.baseEsp = function(){
            vm.base =  vm.completa.es; //borrar
            }
        vm.baseEn = function(){
            vm.base = vm.completa.en; //borrar;
            }
        // salvo y exporto al servicio
        vm.saveN = function(){
            console.log(vm.nueva);
            }

        //verifico los cambios para actualizar texto
        vm.$onChanges = function(lang) {
            vm.setTxt();
            if(vm.showModal){vm.configForm()}
            }
        }
    }
)