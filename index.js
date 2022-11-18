

var guestName = document.querySelector(".btn").addEventListener("click", function(){
  var guestList = ["Otobong", "Joseph", "Samba", "Mimi", "Ity","Kristy", "James", "John", "Grace", "Gift", "Sara", "Jonathan", "Nzaki","Mark", "Alfred", "Didi", "Obong Hanson", "Firstborn", "Emem", "Hanson", "Mr D", "Efe", "Ngozi", "Lynda", "Sally", "Nsikak", "Starboy","Elisha"];

  var guest = prompt("Your Name");

  if (guestList.includes(guest)){
    alert("Congratulations, You are on the list for DevFest. I believe you'll enjoy the program");
    alert("HAVE FUN!!!😁😁😁")
  } else{
    alert("I'm so sorry, you are not on the list for DevFest. Try next year ");
    alert("SEE YOU NEXT YEAR 😈😈😈 ")
  }




})
