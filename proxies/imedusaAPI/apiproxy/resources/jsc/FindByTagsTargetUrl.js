var targetUrl=context.getVariable("target.url");
var pathsuffix = context.getVariable("proxy.pathsuffix");
pathsuffix = pathsuffix.replace('/findByTags', "");
var queryString = context.getVariable("request.querystring");
context.setVariable("target.url", targetUrl + pathsuffix + '?' + queryString );
