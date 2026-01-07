let tickets=JSON.parse(localStorage.getItem("tickets")||"[]");
function saveTicket(name,email,message){
 tickets.push({name,email,message,date:new Date().toLocaleString()});
 localStorage.setItem("tickets",JSON.stringify(tickets));
}
