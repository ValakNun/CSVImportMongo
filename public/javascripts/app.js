$(function(){

    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(products, function(index, product ) {

                string += '<tr><td>'+(index+1)+'</td><td>'+product['_id']+'</td><td>'+product['region']+'</td><td>'+product['country']+'</td><td>'+product['itemType']+'</td><td>'+product['salesChannel']+'</td></tr>';
            });

            $("#trdata").html(string);
        });
    });
 
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

    $("#cleardata").on('click', function(){
        $.get( "/cleardata", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

}); 