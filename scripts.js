
//Third part:
console.log('Script file is loaded.');

$('h1').html('This is done by <em>JavaScript</em>!');
 //$('css selector').action()

$('h2').toggleClass('blue');
$('h2').toggleClass('blue') //masodik eltunteti amit az elso rarak



function myLittleFunction() {
    //condition: number of ps is smaller than 5
    if ($('p').length<5) {
        $('main').append('<p> A p is appended in the main</p>');
    } else {
        console.log('We have reached the maximum paragraph number');
    }
    
    $('p').css('border', '1px solid red');
    $('p').css('padding', '14px');
}

myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});

//Forth part:

//if (condition that true or false) {
    //cond is true
//} else {
    //cond is false
//}

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta']


// Single line comment

 /*
 Multiple
 lines 
 of comments 
 */
