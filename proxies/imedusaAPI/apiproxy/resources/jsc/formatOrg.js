var payload = JSON.parse(context.getVariable("response.content"));
delete payload.entities[0].uuid;
delete payload.entities[0].type;
delete payload.entities[0].metadata;
delete payload.entities[0].created;
delete payload.entities[0].modified;

response.content = JSON.stringify(payload.entities[0]);