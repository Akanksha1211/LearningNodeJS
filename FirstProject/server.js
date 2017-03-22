var connect=require('connect');
var http=require('http');

//looks at app how do you want me to handle my request
var app=connect();

function profile(request, response){
console.log("User Requested Profile");
}
function forum(request, response){
  console.log("User Requested Forum");
}

//doFirst
//stack of function
// /profile is the url
app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running");
