var app = angular.module("app", [])
.directive('textBox', function(){
    return {
        restrict: 'E',
        transclude: true,
        /*scope:{
            txtN = '=txtN'
        },*/
        template:'<span ng-transclude></span>'+
        '<span ng-Show="false" class="icoEdit">t</span>'+
        '<div ng-Show="false">t</div>' 
    }
})

//servicio
    app.service('myService', function(){
        this.getService = function(){
        return [
                {
                    id: "t00001txt01",
                    es: "Esta Historia de coraje y peligo en los remotos confines del universo, en la que un puñado de valientes busca la salvación del cosmos acechados por las legiones del mal, comienza cuando una luz cayo del cielo a TUBUL-TUB, un planeta que hasta la leyenda a olvidado...", 
                    en: "This story of courage and danger in the far reaches of the universe, in which a handful of brave men seek the salvation of the cosmos stalked by the legions of evil, begins when a light falls from the sky to TUBUL-TUB, a planet that even the legend has forgotten...",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00002txt01",
                    es: "Los tubulitas eran muy curiosos y fueron a husmear", 
                    en: "The tubulits were very curious and went to sniff around",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00003txt01",
                    es: "¡M-M-Mirad, hermanitos!", 
                    en: "¡L-L-Look, brothers!",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00004txt01",
                    es: "¡Una nave eesacial! ¡Porlo menos hace doscientos que no veía una!", 
                    en: "¡Una nave eesacial! ¡Porlo menos hace doscientos que no veía una!",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00005txt01",
                    es: "Tal vez su tripulnte esté mal herido! ¡Vamos a ver!", 
                    en: "Tal vez su tripulnte esté mal herido! ¡Vamos a ver!",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00005txt02",
                    es: "¡Ŕápido!", 
                    en: "¡Ŕápido!",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00006txt01",
                    es: "¡mmm... etá muy oscuro! ¡Mejor voy a...", 
                    en: "¡mmm... etá muy oscuro! ¡Mejor voy a...",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00007txt01",
                    es: "¡DETENEOS!", 
                    en: "¡DETENEOS!",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00007txt02",
                    es: "¿Acaso sois esbirros del Barón Eclipse? An malherido, Mog Tagor podrá con vosotros!", 
                    en: "¿Acaso sois esbirros del Barón Eclipse? An malherido, Mog Tagor podrá con vosotros!",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00008txt01",
                    es: "¡T-Tranquilo! ¡Somos amigos!", 
                    en: "¡T-Tranquilo! ¡Somos amigos!",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00009txt01",
                    es: "¡Entonces decidme donde está a Estrellazul!", 
                    en: "¡Entonces decidme donde está a Estrellazul!",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00009txt02",
                    es: "¿Estrellazul? ¿Que es eso?", 
                    en: "¿Estrellazul? ¿Que es eso?",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00010txt01",
                    es: "¡Tal vez sólo un sueño! ¿Pero... qué sería de nosotros sin sueños? ¡Escuchad y sabréis!", 
                    en: "",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00011txt01",
                    es: "Pero alguien merodeaba cerca de la astronave...", 
                    en: "",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                },
                {
                    id: "t00012txt01",
                    es: "¡Esta vez no escaparás, Mog Tagor! ¡Jo, Jo, Jo!", 
                    en: "",
                    fr: "Merci pour l'aide à la traduction. Cliquez sur l'icône pour démarrer.",
                    it: "Grazie per averci aiutato nella traduzione. Fare clic sull'icona per iniziare.",
                    pt: "Obrigado por ajudar na tradução. Clique no ícone para iniciar."
                }
            ]
        }
    });

//creamos nuestro controlador e injectamos tanto la factoría como el servicio
app.controller("mainController", function($scope, myService){
    //devolvemos un servicio
    $scope.txtService = myService.getService();

    $scope.actlang = 'es';

    $scope.setLang = function(actlang){
        $scope.actlang=actlang;
        $scope.setTxt();
        return $scope.actlang;
    }


    var lang = function(n, lang){
        var actlang = lang;
        if(actlang === 'es'){
        var salida = $scope.txtService[n].es;
        }else if(actlang === 'en'){
        var salida = $scope.txtService[n].en;
        }else if(actlang === 'fr'){
        var salida = $scope.txtService[n].fr;
        $scope.$broadcast('setLangChild', actlang);
        }else if(actlang === 'it'){
        var salida = $scope.txtService[n].it;
        $scope.$broadcast('setLangChild', actlang);
        }else if(actlang === 'pt'){
        var salida = $scope.txtService[n].pt;
        $scope.$broadcast('setLangChild', actlang);
        }
        return salida;
    }
    $scope.setTxt = function(){
        $scope.t00001txt01 = lang(0, $scope.actlang);
        $scope.t00002txt01 = lang(1, $scope.actlang);
        $scope.t00003txt01 = lang(2, $scope.actlang);
        $scope.t00004txt01 = lang(3, $scope.actlang);
        $scope.t00005txt01 = lang(4, $scope.actlang);
        $scope.t00005txt02 = lang(5, $scope.actlang);
        $scope.t00006txt01 = lang(6, $scope.actlang);
        $scope.t00007txt01 = lang(7, $scope.actlang);
        $scope.t00007txt02 = lang(8, $scope.actlang);
        $scope.t00008txt01 = lang(9, $scope.actlang);
        $scope.t00009txt01 = lang(10, $scope.actlang);
        $scope.t00009txt02 = lang(11, $scope.actlang);
        $scope.t00010txt01 = lang(12, $scope.actlang);
        $scope.t00011txt01 = lang(13, $scope.actlang);
        $scope.t00012txt01 = lang(14, $scope.actlang);
        if($scope.actlang === 'es'){
            $scope.intro = 'Estrellazul apareció en la revista Anteojito en los años 80, con guión y dibujos que Quique Alcatena, como parte de una serie de obras de fantasía y ciencia ficción.';
            $scope.sign = 'mrando.via@gmail.com';
        }else if($scope.actlang === 'en'){
            $scope.intro = 'Estrellazul apareció en la revista Anteojito en los años 80, con guión y dibujos que Quique Alcatena, como parte de una serie de obras de fantasía y ciencia ficción.';
            $scope.sign = 'mrando.via@gmail.com';
        }
    }
    $scope.setTxt();

});

app.controller("newLangController", function($scope, myService){
    $scope.$on('setLangChild', function(event, actlang)
    {
        $scope.valor = actlang;
        /*console.log(actlang);*/
    })
});