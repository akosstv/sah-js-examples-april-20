
//Third part:
console.log('Script file is loaded.');

$('h1').html('This is done by <em>JavaScript</em>!');
 //$('css selector').action()

$('h2').toggleClass('blue');
$('h2').toggleClass('blue') //masodik eltunteti amit az elso rarak



function myLittleFunction() {
    $('main').append('<p> A p is appended in the main</p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '14px');
}

myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});


// Single line comment

 /*
 Multiple
 lines 
 of comments 
 */
