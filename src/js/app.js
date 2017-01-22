var app = angular.module("app", [])
.directive('textBox', function(){
    return {
        return: 'AE',
        scope: {  
          value: '@',
          lang: '@',
          id: '@'
        },
        controller: 'controllerDir',
        template:'<span>{{value}}{{welcome}}</span>'+
        '<div ng-if="!value">'+
        '<span ng-click="showModal=!showModal" class="icoEdit"> </span>'+
        '<div class="modalView" ng-Show="showModal">'+
            '<div class="langTrue">{{langB}}<div></div>{{baseTr[0]}}</div>'+
            '<span class="fLeft"> << </span> <span class="fRight"> >> </span>'+
            '<div class="LangActual">{{langA}}<div></div><input value="{{nuevaTr[0]}}"/></div>'+
            '<button ng-click="showModal=!showModal" class="fRight"> close </button> <button class="fRight"> save </button>'+
            '</div>'+
        '</div>',
        link : function(scope, elem, attrs, ctrl){
            /*scope.langB = 'lenguaje before';
            scope.langA = 'lenguaje after';
            scope.valueB = baseTr[0];
            scope.valueA = nuevaTr[0];*/
            if(attrs.value == ''){
                ctrl.setForm(attrs.id, attrs.lang);
            }
        }
    }
})

//servicio
    app.service('myService', function(){
        this.getService = function(){
        return [
                {  
                    id: "intro",
                    es : 'Estrellazul apareció en la revista Anteojito en los años 80, con guión y dibujos que Quique Alcatena, como parte de una serie de obras de fantasía y ciencia ficción.',
                    en : "Estrellazul appeared in the magazine Anteojito in the 80's, with  Quique Alcatena's script and drawings, as part of a series of works of fantasy and science fiction.",
                    fr : "Estrellazul paru dans le magazine Anteojito dans les années 80, avec le script et les dessins par Quique Alcatena dans le cadre d'une série d'œuvres de fantasy et de science-fiction.",
                    it : "Estrellazul apparso sulla rivista Anteojito negli anni '80, con la sceneggiatura e disegni Quique Alcatena come parte di una serie di opere di fantasy e fantascienza.",
                    pt : 'Estrellazul Anteojito apareceu na revista nos anos 80, com roteiro e desenhos de Quique Alcatena como parte de uma série de obras de fantasia e ficção científica.',
                },
                {
                    id: "t00000txt01",
                    es: "Gracias por ayudarnos con la traducción. Haga clic en el icono para comenzar.", 
                    en: "Thank you for helping us translate. Click the icon to start.",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00001txt01",
                    es: "Esta Historia de coraje y peligo en los remotos confines del universo, en la que un puñado de valientes busca la salvación del cosmos acechados por las legiones del mal, comienza cuando una luz cayo del cielo a TUBUL-TUB, un planeta que hasta la leyenda a olvidado...", 
                    en: "This story of courage and danger in the far reaches of the universe, in which a handful of brave men seek the salvation of the cosmos stalked by the legions of evil, begins when a light falls from the sky to TUBUL-TUB, a planet that even the legend has forgotten...",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00002txt01",
                    es: "Los tubulitas eran muy curiosos y fueron a husmear", 
                    en: "The tubulits were very curious and went to sniff around",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00003txt01",
                    es: "¡M-M-Mirad, hermanitos!", 
                    en: "¡L-L-Look, brothers!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00004txt01",
                    es: "¡Una nave espacial! ¡Porlo menos hace doscientos que no veía una!", 
                    en: "A space ship! At least two hundred years ago I did not see one!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00005txt01",
                    es: "Tal vez su tripulante esté mal herido! ¡Vamos a ver!", 
                    en: "Maybe your crewmember is badly wounded! We'll go to see!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00005txt02",
                    es: "¡Ŕápido!", 
                    en: "Quickly!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00006txt01",
                    es: "¡mmm... está muy oscuro! ¡Mejor voy a...", 
                    en: "mmm...! it's very dark! I better go to ...",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00007txt01",
                    es: "¡DETENEOS!", 
                    en: "STOP!",
                    fr: "Arrêtez!",
                    it: "Stop!",
                    pt: "Pare!"
                },
                {
                    id: "t00007txt02",
                    es: "¿Acaso sois esbirros del Barón Eclipse? An malherido, Mog Tagor podrá con vosotros!", 
                    en: "Are you minions of Baron Eclipse? Yet badly wounded, Mog Tagor will can with you!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00008txt01",
                    es: "¡T-Tranquilo! ¡Somos amigos!", 
                    en: "C-Calm! We are friends!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00009txt01",
                    es: "¡Entonces decidme donde está a Estrellazul!", 
                    en: "Then tell me where the Estrellazul is!!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00009txt02",
                    es: "¿Estrellazul? ¿Que es eso?", 
                    en: "Estrellazul? ¿What is that?",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00010txt01",
                    es: "¡Tal vez sólo un sueño! ¿Pero... qué sería de nosotros sin sueños? ¡Escuchad y sabréis!", 
                    en: "Maybe just a dream! But ... what would become of us without our dreams? Listen and you will know!",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00011txt01",
                    es: "Pero alguien merodeaba cerca de la astronave...", 
                    en: "But someone was prowling near the spaceship ...",
                    fr: "",
                    it: "",
                    pt: ""
                },
                {
                    id: "t00012txt01",
                    es: "¡Esta vez no escaparás, Mog Tagor! ¡Jo, Jo, Jo!", 
                    en: "This time you will not escape, Mog Tagor! ¡Jo, Jo, Jo!",
                    fr: "",
                    it: "",
                    pt: ""
                }
            ]
        }
    });

app.controller("mainController", function($scope, myService){
    //servicio
    $scope.txtService = myService.getService();

    $scope.actlang = 'it';
    $scope.sign = 'mrando.via@gmail.com';
    $scope.percentLangEs = percentLang('es');
    $scope.percentLangEn = percentLang('en')
    $scope.percentLangFr = percentLang('fr')
    $scope.percentLangIt = percentLang('it')
    $scope.percentLangPt = percentLang('pt')
    
    $scope.setLang = function(actlang){
        $scope.actlang=actlang;
        $scope.setTxt();
        return $scope.actlang;
    }

    function percentLang(lang){
        var elementos = [];
        $scope.txtService.forEach(function (elem) {
          /*return  elem == $scope.txtService[1];*/
          elementos.push(elem[lang]);        
        })


        var activos = elementos.filter(function(e){return e != '';})
        var salida = Math.floor(activos.length / elementos.length * 100);
        return salida;
    } 

/*    function testJson(element, index) {
            var value = 't00012txt01';
            var lang = $scope.actlang;
            if(element.id == value)
            {
                console.log("a[" + index + "] = " + element[lang]);
                console.log(Object.keys(element) )
            }
        }*/
    /*$scope.txtService.forEach(testJson);*/

    var lang = function(n, lang){
        var salida = $scope.txtService[n][lang];
        return salida;
    }

    $scope.setTxt = function(){
        $scope.intro = lang(0, $scope.actlang);
        $scope.t00001txt00 = lang(1, $scope.actlang);
        $scope.t00001txt01 = lang(2, $scope.actlang);
        $scope.t00002txt01 = lang(3, $scope.actlang);
        $scope.t00003txt01 = lang(4, $scope.actlang);
        $scope.t00004txt01 = lang(5, $scope.actlang);
        $scope.t00005txt01 = lang(6, $scope.actlang);
        $scope.t00005txt02 = lang(7, $scope.actlang);
        $scope.t00006txt01 = lang(8, $scope.actlang);
        $scope.t00007txt01 = lang(9, $scope.actlang);
        $scope.t00007txt02 = lang(10, $scope.actlang);
        $scope.t00008txt01 = lang(11, $scope.actlang);
        $scope.t00009txt01 = lang(12, $scope.actlang);
        $scope.t00009txt02 = lang(13, $scope.actlang);
        $scope.t00010txt01 = lang(14, $scope.actlang);
        $scope.t00011txt01 = lang(15, $scope.actlang);
        $scope.t00012txt01 = lang(16, $scope.actlang);
    }
    $scope.setTxt();

});

app.controller("controllerDir", function($scope, myService){
    this.txtService = myService.getService();
    $scope.baseTr = [];
    $scope.nuevaTr = [];
    var completa = [];
    this.setForm = function(actualId, lang){
    $scope.welcome = this.txtService[1][lang];
    this.txtService.forEach(function(elem){
        if(elem.id === actualId){
            completa = elem;
            };
        });
    for(var i in completa) {
            if(completa[i] === actualId){
            }else if(completa[i] !== ''){
                $scope.baseTr.push(completa[i]);
            }else{
                $scope.nuevaTr.push(completa[i]);
            };
        }
    console.log($scope.baseTr[0])
    }
    /*$scope.test(console.log('hola'));*/
});