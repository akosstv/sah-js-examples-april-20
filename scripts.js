
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

//Fourth part:

//if (condition that true or false) {
    //cond is true
//} else {
    //cond is false
//}

let colors = ['orange', 'yellow', 'blue', 'lime', 'magenta'];

colors.forEach(function (color) {
    $('#box-container').append('<div class="box"></div>');
    $('.box:last-child').css('background', color);

});

for (let i = 0; i < 100; /*i=i+1*/ i++) {
    console.log(i);
}

// ugyanaz mint a fenti (colors.forEach) csak loop-pal egyszerűbb
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[0]);
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[1]);
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[2]);
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[3]);
//$('#box-container').append('<div class="box"></div>');
//$('.box:last-child').css('background', colors[4]);


// Single line comment

 /*
 Multiple
 lines 
 of comments 
 */
