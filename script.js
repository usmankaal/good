$('#search').keyup(function() {
var searchField = $('#search').val();

$.getJSON('data.json', function(data) {

var output = '<ul class ="searchresults">';
 $.each(data, function(key,val) {
    output += '<li>';
    output += '<h2>'+ val.name + '</h2>';
    output += '<img src="images/'+ val.shortname +' tn.jpng" alt="'+ val.name +'" />';
    output += '<p>'+ val.bio +'</p>';
    output += '</li>';
 });
 output += '</ul>';
 $('#update').html(output);
});
