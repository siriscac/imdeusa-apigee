function isNullOrEmpty(value) 
{ //check for null 
    if (value == null || value == undefined) 
    { 
        return true; 
    } 
    else if (!isNaN(value)) 
    { 
        return false; 
    } 
    else if (typeof value == "string" && value.length == 0) 
    { // Check for String 
    return true; 
    } 
    else if (typeof value == "object" && Object.keys(value).length === 0) 
    { // Check for Objects and Arrays 
    return true; 
    } 

    return false; 
}



var tag1=context.getVariable("request.queryparam.filter1Name");
var value1=context.getVariable("request.queryparam.filter1Value");
var tag2=context.getVariable("request.queryparam.filter2Name");
var value2=context.getVariable("request.queryparam.filter2Value");
var tag3=context.getVariable("request.queryparam.filter3Name");
var value3=context.getVariable("request.queryparam.filter3Value");

var ql = 'select * where ' ;

if (!isNullOrEmpty(tag1)) {
    ql = ql + tag1 + '=\'' + value1 + '\'';
}
if (!isNullOrEmpty(tag2)) {
    if (!isNullOrEmpty(tag1))
        ql = ql  + tag2 + '=\'' + value2 + '\'';
    else
        ql = ql + ' and ' + tag2 + '=\'' + value2 + '\'';
}
if (!isNullOrEmpty(tag3)) {
    if (!isNullOrEmpty(tag1) && !isNullOrEmpty(tag2))
        ql = ql + tag3 + '=\'' + value3 + '\'';
    else
        ql = ql + ' and ' + tag3 + '=\'' + value3 + '\'';
}

context.setVariable('ql', ql);
