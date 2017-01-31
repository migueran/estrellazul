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
            '<div class="LangActual">{{$ctrl.lang}}<div><input value="{{$ctrl.nueva}}"/></div></div>'+
            '<button ng-click="$ctrl.showModal=!$ctrl.showModal" class="fRight"> close </button>'+
            '<button ng-click="$ctrl.saveN()" class="fRight"> save </button>'+
        '</div>',
    controller: function(myService){
        var vm = this;
        vm.txtService = myService.getService();
        vm.showModal = '';
        vm.baseTr = [];
        vm.nuevaTr = [];
        var completa = [];

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
            vm.completa = myService.getThisTxt(vm.box);
            /*for(var i in completa) {
                if(completa[i] !== ''){
                    vm.baseTr.push(completa[i]); //sumo pares
                }else{
                    vm.nuevaTr.push(completa[i]); //sumo pares
                }
                vm.base = vm.completa[vm.lang];
                vm.nueva = vm.nuevaTr[0];
                }*/
            }
        //funciones para sumar idiomas
        vm.baseEsp = function(){
            vm.base = vm.completa.es;
            }
        vm.baseEn = function(){
            vm.base = vm.completa.en;
            }
        vm.saveN = function(){
            console.log(vm.nueva);
            }

        //verifico los cambios para actualizar texto
        vm.$onChanges = function(lang) {
            vm.setTxt();
            }
        }
    }
)