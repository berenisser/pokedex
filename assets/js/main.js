$(document).ready(function(){

    /*Primer link API cada uno de los pokemons
    $("#btn-go").click(function(event){
        console.log("Entro");
        $("#contenedor-pokemon").empty();

        var param = $("#pokeInput").val();
        console.log(param);
        var pokeURL = "http://pokeapi.co/api/v2/pokemon/" + param;

        $.getJSON(pokeURL, function(data){
            var pokeName = data.name;
            var pokeID = data.id;
            var pokeType = data.types[0].type.name;
            console.log(pokeName);
            console.log(pokeID);
            console.log(pokeType);

            var sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";  //25.png
            var espacio = '<div class="color-espacio col-md-3" id="div-color"><img src="'+ sprites+pokeID+'.png"><h1>' + pokeName + '</h1></div>';
            //var li = '<h1>' + pokeName + '</h1>';
            //var foto = '<img src="'+ sprites+pokeID+'.png">'
            

            $("#contenedor-pokemon").append(espacio);
             if(pokeType == "electric"){
                 $("#div-color").addClass("electric");
            }
        });
        
    });

    /*segundo link API todos los pokemons */


    (function(){
        console.log("Load");
        var allPokeURL = "http://pokeapi.co/api/v2/pokedex/1/";
        $.getJSON(allPokeURL, function(data){
            console.log(data);
            data.pokemon_entries.forEach(function(element){
            var allPokeId = element.entry_number;
            var allPokeName = element.pokemon_species.name;
            var sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
            $("#contenedor-pokemon").append('<div class="color-espacio text-center contenedor-cada-pokemon col-md-2 col-sm-4 col-xs-4" data-toggle="modal" id="'+allPokeName+'" data-target=".'+allPokeName+'"><img src="'+ sprites+allPokeId+'.png"><h1 class="modal-title capitalizar">' + allPokeName+ '</h1><input type="text" value="' + allPokeName+ '" hidden="true"></div>').append(crearContenidoModal(allPokeName, allPokeId));    
            });
        });
    })(); 

$(".contenedor-cada-pokemon").click(function() {
    alert("click dentro");
     //console.log($(".contenedor-cada-pokemon").find($("input").val()));
});

    function cadaPokemonInfo(){
        $(".contenedor-cada-pokemon").find($("input").val());

    var nombrePok;
    var pokeURL = "http://pokeapi.co/api/v2/pokemon/" + nombrePok;

        $.getJSON(pokeURL, function(data2){
            var pokeName = data2.name;
            var pokeID = data2.id;
            var pokeType = data2.types[0].type.name;
            console.log(pokeName);
            console.log(pokeID);
            console.log(pokeType);

            var sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";  //25.png
            var espacio = '<div class="color-espacio col-md-3" id="div-color"><img src="'+ sprites+pokeID+'.png"><h1>' + pokeName + '</h1></div>';
            //var li = '<h1>' + pokeName + '</h1>';
            //var foto = '<img src="'+ sprites+pokeID+'.png">'
            

            $("#contenedor-pokemon").append(espacio);
             if(pokeType == "electric"){
                 $("#div-color").addClass("electric");
            }
        });
    }


    function crearContenidoModal(allPokeName, allPokeId){
        var sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
        var modal ='<div class="modal fade '+allPokeName+'" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">'+
                    '<div class="modal-dialog" role="document">'+
                        '<div class="modal-content">'+
                            '<div class="modal-header">'+
                                '<h1 class="capitalizar">'+allPokeName+'</h1>'+
                            '</div>'+
                            '<div class="modal-body">'+
                                '<div class="row">'+
                                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                        '<img src="'+ sprites+allPokeId+'.png">'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
        return modal;
    };



    $("#btn-go").click(function(event){
        console.log("boton clk");
        var valor = $("#pokeInput").val();
        console.log(valor);
        $('#contenedor-pokemon').find($("#"+valor)).css("background-color","green");

    }); 


    /*
    //Switch
            var jsLang = 'jquery';
            switch (jsLang) { 
                case 'jquery': 
                    alert('jQuery Wins!');
                    break;
                case 'prototype': 
                    alert('prototype Wins!');
                    break;
                case 'mootools': 
                    alert('mootools Wins!');
                    break;      
                case 'dojo': 
                    alert('dojo Wins!');
                    break;
                default:
                    alert('Nobody Wins!');
            }

    */
         

})