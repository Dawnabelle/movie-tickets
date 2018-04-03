// business logic

// builds movie ticket
function Ticket(name, time, age){
  this.name = name;
  this.time = time;
  this.age = age;
}

// formula to find correct movie ticket price
 Ticket.prototype.ticketPrice = function() {
  //  standard ticket price
   var cost = 18;
   if (this.name !== "Trolls") {
    //  new or old movie option
     cost -= 2;
   } if (this.time === 'matinee') {
    //  minus cost of matinee, if necessary
       cost -= 2;
     }
     if (this.age < 13 || this.age > 55) {
      //  accounts for age
          cost -= 2;
    } return "$" + cost;
  }

// user logic
  $(function(){
    // submit button and refresh preventer
    $("#formOne").submit(function(event){
      event.preventDefault();
      // all of our variables
      var name = $("#name").val();
      var time = $("#time").val();
      var age = parseInt($("#age").val());

// user interface ticket formula
    var newTicket = new Ticket(name, time, age);
    var cost = newTicket.ticketPrice();
    $("#formOne").fadeIn();
    $("#cost").text(cost);
    $("#movie").text(newTicket.name);
    $("#hidden").fadeIn();
    });
  });





//
// MovieTicket.prototype.ticketPrice = function(){
//   var price = 17;
//   if (this.name !== "Trolls"){
//     price -=4;
//   }
//   if (this.time !== 'evening'){
//     price -= 4;
//   } if (this.age < 12 || this.age > 65) {
//     price -= 4;
//   }
//     return "$" + price;
// }
//
// $(function(){
//   $("#formOne").submit(function(event){
//     event.preventDefault();
//     var name = $("#name").val();
//     var time = $("#time").val();
//     var age = parseInt($("#age").val());
//
//
//   var newTicket = new MovieTicket(name, time, age);
//   var cost = newTicket.ticketPrice();
//   $("#formOne").fadeIn();
//   $("#cost").text(cost);
//   $("#movie").text(newTicket.name);
//   $("#hidden").fadeIn();
//   });
// });
