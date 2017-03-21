var payload = JSON.parse(context.getVariable("response.content"));
var data = payload.entities;
for (i=0 ; i < data.length ; i++) {
    delete data[i].uuid;
    delete data[i].type;
    delete data[i].metadata;
    delete data[i].created;
    delete data[i].modified;
}
response.content = JSON.stringify(data);
