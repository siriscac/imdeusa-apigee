 var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = yyyy + '-' + mm + '-' + dd ;
var body= {
    "account" : context.getVariable("request.queryparam.account"),
    "startDate" : today,
    "endDate" : context.getVariable("request.queryparam.endDate"),
    "email" : context.getVariable("request.queryparam.email"),
    "status" : "inuse"
}

request.content = JSON.stringify(body);
