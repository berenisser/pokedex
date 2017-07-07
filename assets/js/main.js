$(document).ready(function(){

    //Primer link API cada uno de los pokemons
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
            if(pokeType == "electric"){
                 $("#div-color").addClass("electric");
            }

            $("#contenedor-pokemon").append(espacio);
        });
        
    });

    /*segundo link API todos los pokemons
     $(window).load(function() {
        todosAjax(data);
    }); */

    (function(){
        console.log("Load");
        var allPokeURL = "http://pokeapi.co/api/v2/pokedex/1/";
        $.getJSON(allPokeURL, function(data){
            console.log(data);
            data.pokemon_entries.forEach(function(element){
            var allPokeId = element.entry_number;
            var allPokeName = element.pokemon_species.name;
            var sprites = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
            $("#contenedor-pokemon").append('<div class="color-espacio col-md-3 col-sm-6 col-xs-6"><img src="'+ sprites+allPokeId+'.png"><h1>' + allPokeName+ '</h1></div>');    
            });
        });
    })();

   



    /*function pokeSubmit(){
        var param = $("#pokeInput").val();
        var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
        var pokeURL2 = "http://pokeapi.co/api/v2/pokemon/" + param;

        $.getJSON(pokeURL, function(data){
            //console.log(data);
            //var pokeID = data.national_id;
            var pokeName = data.name;
            var li = '<h1>#' + pokeName + '</h1>';
            $("#pokeDetails").append(li);


            var pokeType1 = data.types[0].name;
            if (data.types.length == 2) {
                var pokeType2 = data.types[1].name;
            }
            else var pokeType2 = null;
            var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
            var pokeDescription = "";

            $.getJSON(descriptionURI, function(data2){
                //console.log(data2);
                pokeDescription = data2.description;
            }); 

            $.getJSON(pokeURL2, function(data3){
                //console.log(data3);

                 //console.log(JSON.stringify(data, null, "  "));
                var imageURI = data3.sprites.front_default;

                console.log("Number: ", pokeID);
                console.log("Name: ", pokeName);
                console.log("Type 1: ", pokeType1);
                console.log("Type 2: ", pokeType2);
                console.log("Description URI: ", descriptionURI);
                console.log("Description: ", pokeDescription);
                console.log("Image URI: ", imageURI);

                // append data to HTML
                // empty string to hold HTML
                var li = "";
                li += '<li><img src="' + imageURI + '">';
                li += '<h1>#' + pokeID + ' ' + pokeName + '</h1>';
                li += '<p>Type 1: ' + pokeType1 + '</p>';

                // only display Type 2 if it is not null
                if (pokeType2 != null){
                    li += '<p>Type 2: ' + pokeType2 + '</p>';
                }

                li += '<p>' + pokeDescription + '</p>';
                li += '</li>';

                // empty the listview
                $("#pokeDetails").empty();

                // append new li to listview
                $("#pokeDetails").append(li).promise().done(function(){
                        $(this).listview("refresh");
                });

            }); 

        });
    } */
         

})