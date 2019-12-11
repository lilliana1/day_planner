//current date displays
$("#currentDay").text(moment().format('MMMM Do YYYY'));

//
var saveBtn = document.querySelector(".saveBtn");
var nine = document.querySelector("#9");
var ten = document.querySelector("#10");
var eleven = document.querySelector("#11");
var twelve = document.querySelector("#12");
var one = document.querySelector("#1");
var two = document.querySelector("#2");
var three = document.querySelector("#3");
var four = document.querySelector("#4");
var five = document.querySelector("#5");


// Store data when save button is click on 
$(".saveBtn").on("click", function(){
    var info = $('#9').val
    localStorage.setItem("nine",JSON.stringify("9"))
    // Get data
    localStorage.getItem('nine');
})

// Display the items from local storage 

// Change the color of the "Time Block Section" depending of the current time







// $(".saveBtn").on("click", function(){
    
//     localStorage.setItem("todoNine", input.val());
//     // var todoAtNine = JSON.parse(localStorage.setItem("todoNine"))
//     // todoAtNine.push("todo-9");
//     // todoAtNine.setItem;

//     var storedValue = localStorage.getItem("todoNine");
// })

// $('#saveBtn').on('click', function(){

//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = $(this).val();
//        localStorage.setItem(id, value);

//     });   
// });

// $('#load').on('click', function(){
//     $('input[type="text"]').each(function(){    
//         var id = $(this).attr('id');
//         var value = localStorage.getItem(id);

//         $(this).val(value);

//     }); 
// });















// $(function() {
//     var date = new Date(),
//       currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
//     $(".justify-content-md-center").each(function() {
//       var specifiedDate = $(this).data('date');
//       if (specifiedDate == currentDate) {
//         $(this).addClass('today');
//       } else if (currentDate > specifiedDate) {
//         $(this).addClass('past');
//       } else {
//         $(this).addClass('future');
//       }
//     });
//   });
