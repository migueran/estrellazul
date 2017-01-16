var app = angular.module("app", []);

//servicio
    app.service('myService', function(){
        this.getService = function(){
        return [
                {
                    id : "t00001txt01",
                    es: "Esta Historia de coraje y peligo en los remotos confines del universo, en la que un puñado de valientes busca la salvación del cosmos acechados por las legiones del mal, comienza cuando una luz cayo del cielo a TUBUL-TUB, un planeta que hasta la leyenda a olvidado...", 
                    en: "This story of courage and danger in the far reaches of the universe, in which a handful of brave men seek the salvation of the cosmos stalked by the legions of evil, begins when a light falls from the sky to TUBUL-TUB, a planet that even the legend has forgotten..."
                },
                {
                    id: "t00002txt01",
                    es: "Los tubulitas eran muy curiosos y fueron a husmear", 
                    en: "Los tubulitas eran muy curiosos y fueron a husmear"
                },
                {
                    id: "t00003txt01",
                    es: "¡M-M-Mirad, hermanitos!", 
                    en: "¡M-M-Mirad, hermanitos!"
                },
                {
                    id: "t00004txt01",
                    es: "¡Una nave eesacial! ¡Porlo menos hace doscientos que no veía una!", 
                    en: "¡Una nave eesacial! ¡Porlo menos hace doscientos que no veía una!"
                },
                {
                    id: "t00005txt01",
                    es: "Tal vez su tripulnte esté mal herido! ¡Vamos a ver!", 
                    en: "Tal vez su tripulnte esté mal herido! ¡Vamos a ver!"
                },
                {
                    id: "t00005txt02",
                    es: "¡Ŕápido!", 
                    en: "¡Ŕápido!"
                },
                {
                    id: "t00006txt01",
                    es: "¡mmm... etá muy oscuro! ¡Mejor voy a...", 
                    en: "¡mmm... etá muy oscuro! ¡Mejor voy a..."
                },
                {
                    id: "t00007txt01",
                    es: "¡DETENEOS!", 
                    en: "¡DETENEOS!"
                },
                {
                    id: "t00007txt02",
                    es: "¿Acaso sois esbirros del Barón Eclipse? An malherido, Mog Tagor podrá con vosotros!", 
                    en: "¿Acaso sois esbirros del Barón Eclipse? An malherido, Mog Tagor podrá con vosotros!"
                },
                {
                    id: "t00008txt01",
                    es: "¡T-Tranquilo! ¡Somos amigos!", 
                    en: "¡T-Tranquilo! ¡Somos amigos!"
                },
                {
                    id: "t00009txt01",
                    es: "¡Entonces decidme donde está a Estrellazul!", 
                    en: "¡Entonces decidme donde está a Estrellazul!"
                },
                {
                    id: "t00009txt02",
                    es: "¿Estrellazul? ¿Que es eso?", 
                    en: "¿Estrellazul? ¿Que es eso?"
                },
                {
                    id: "t00010txt01",
                    es: "¡Tal vez sólo un sueño! ¿Pero... qué sería de nosotros sin sueños? ¡Escuchad y sabréis!", 
                    en: ""
                },
                {
                    id: "t00011txt01",
                    es: "Pero alguien merodeaba cerca de la astronave...", 
                    en: ""
                },
                {
                    id: "t00012txt01",
                    es: "¡Esta vez no escaparás, Mog Tagor! ¡Jo, Jo, Jo!", 
                    en: ""
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