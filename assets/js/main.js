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


    /*Esta funcion recorre el gran listado de pokemons y escribe su nombre y foto */

    (function(){
        console.log("Load");
        var allPokeURL = "http://pokeapi.co/api/v2/pokedex/1/";
        $.getJSON(allPokeURL, function(data){
            console.log(data);
            data.pokemon_entries.forEach(function(element){
            var allPokeId = element.entry_number;
            var allPokeName = element.pokemon_species.name;
            var sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
            $("#contenedor-pokemon").append(crearContenidoModal(allPokeName, allPokeId));    
            });
        });
    })(); 



    function crearContenidoModal(allPokeName, allPokeId){
        var sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
        var modal ='<div class="color-espacio text-center contenedor-cada-pokemon col-md-2 col-sm-4 col-xs-4" onclick="cadaPokemonInfo(this)" data-toggle="modal" id="'+allPokeName+'" data-target=".'+allPokeName+'"><img src="'+ sprites+allPokeId+'.png"><h1 class="modal-title capitalizar">' + allPokeName+ '</h1><input type="text" value="' + allPokeName+ '" hidden="true"></div><div class="modal fade '+allPokeName+'" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">'+
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
                                    '<div class="col-md-3 col-sm-3 col-xs-3">'+
                                        '<h2>Pokemon #'+allPokeId+'</h2>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';
        return modal;
    };

    //ESta funcion deberia poder tomar el nombre del pokemon seleccionado y completar el API del pokemon en especificio
    function cadaPokemonInfo(e){
        console.log(e.id);

        var nombrePok = e.id;
        var pokeURL = "http://pokeapi.co/api/v2/pokemon/" + nombrePok;

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
                 $(".contenedor-cada-pokemon").css("background-color","yellow");
            }
        });
    }



    //Funcion buscador
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