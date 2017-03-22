/**
 * Created by aavha on 2/25/2017.
 */
function placeOrder(orderNumber){
  console.log("orderPlace for:", orderNumber);
  var time = 5;
  var t=function(i){
    console.log("Deliver order i is",i)
    return i*5;
  }

  cookAndDeliverTime(t);
  console.log("End of place order");
};


function cookAndDeliverTime(x){
  //for (var i=0; i<time;i++)
  //    myfunc(i)
  console.log(x(5));
  //setTimeout(myfunc,time);
 // console.log("I m after settimeout");
}
placeOrder(1);
placeOrder(2);

