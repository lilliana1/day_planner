//current date displays
$("#currentDay").text(moment().format('MMMM Do YYYY'));

//
// var saveBtn = document.querySelector(".saveBtn");
// var nine = document.querySelector("#9");
// var ten = document.querySelector("#10");
// var eleven = document.querySelector("#11");
// var twelve = document.querySelector("#12");
// var one = document.querySelector("#1");
// var two = document.querySelector("#2");
// var three = document.querySelector("#3");
// var four = document.querySelector("#4");
// var five = document.querySelector("#5");


window.onbeforeunload = function() {
    localStorage.setItem("toDo9", $('#9').val());
    localStorage.setItem("toDo10", $('#10').val());
    localStorage.setItem("toDo11", $('#11').val());
    localStorage.setItem("toDo12", $('#12').val());
    localStorage.setItem("toDo1", $('#1').val());
    localStorage.setItem("toD2", $('#2').val());
    localStorage.setItem("toDo3", $('#3').val());
    localStorage.setItem("toDo4", $('#4').val());
    localStorage.setItem("toDo5", $('#5').val());
};

window.onload = function() {
    var str = localStorage.getItem("toDo9");
    if (str !== null) $('#9').val(str);
    var str = localStorage.getItem("toDo10");
    if (str !== null) $('#10').val(str);
    var str = localStorage.getItem("toDo11");
    if (str !== null) $('#11').val(str);
    var str = localStorage.getItem("toDo12");
    if (str !== null) $('#12').val(str);
    var str = localStorage.getItem("toDo1");
    if (str !== null) $('#1').val(str);
    var str = localStorage.getItem("toDo2");
    if (str !== null) $('#2').val(str);
    var str = localStorage.getItem("toDo3");
    if (str !== null) $('#3').val(str);
    var str = localStorage.getItem("toDo4");
    if (str !== null) $('#4').val(str);
    var str = localStorage.getItem("toDo5");
    if (str !== null) $('#5').val(str);

};



// var todo9 = localStorage.getItem(9);
// // Store data when save button is click on 
// $(".saveBtn").on("click", function(){
//     localStorage.setItem("#9", input.val());
//     // Get data
//     localStorage.getItem(9);
//     localStorage.setItem("nine",JSON.stringify("9"))
    
// })

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
