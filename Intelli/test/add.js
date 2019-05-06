
module.exports = {
 
  "Test Home Page": function (client) {
    client.init();
    client.waitForElementVisible("body", 2000);
    client.expect.element('.login-form-section').to.be.visible;
   client.expect.element('.float-input:nth-child(1)').to.be.visible;
   client.setValue('.float-input:nth-child(1)',['asif@divami.com',client.Keys.TAB]);
   client.expect.element('.form-group:nth-child(2) .float-input').to.be.visible;
   client.setValue('.form-group:nth-child(2) .float-input', 'Divami@123');
   client.expect.element('.login-button').to.be.visible;
   client.click('.login-button');
   client.pause(1000);
   client.expect.element('.dashboard-container').to.be.visible;
   client.pause(1000);
    },
  
  "Test nav bar": function(client){ 
  var fname,lname,emailid,mobile;

 client.expect.element('.side-nav-container .nav-item.customer .customer-icon').to.be.visible;
 client.click('.side-nav-container .nav-item.customer .customer-icon');
 client.pause(1000);
var loc='table tbody tr';
client.expect.element(loc).to.be.visible;

var locate=loc+''+':nth-child(2)';
client.expect.element(locate).to.be.visible;
client.pause(1000);
//client.expect.element(locate+' '+'td:nth-child(1) .customercustomer-cell-block .customer-details .customer-name').to.be.visible;
//client.expect.element(locate+' '+'td:nth-child(1) .customer-cell-block .customer-details .customer-name').to.be.visible;
var locator=locate+' '+'td:nth-child(1) .customer-cell-block .customer-details .customer-name';
client.getText(locator,function(res){
  console.log(res.value);
  fname=res.value.split(' ')[0];
 //fname=res.value;
  console.log("fname "+fname);
 
  lname=res.value.split(' ')[1];
 // lname=res.value;
  console.log("lname "+lname);
});
client.getText(locate+' '+'td:nth-child(2) .email-id',function(res){
  
  emailid=res.value;
});
  client.getText(locate+' '+'td:nth-child(2) .cell-number',function(res){
    mobile=res.value;
  });
 
client.moveToElement(locate,1,1,function(){
client.expect.element(locate+' '+'td:nth-child(6) .edit-icon').to.be.visible;
client.click(locate+' '+'td:nth-child(6) .edit-icon');
client.pause(1000);

// client.assert.containsText('p-dialog app-add-user form input[formcontrolname="firstName"]',fname);
// //client.assert.containsText('.create-service-request-pop-up .create-service-pop-up-content .create-service-popup-main-content .form-group:nth-child(2) .ui-inputtext',fname);
 //console.log(result +fname);

// client.getText('app-all-users p-dialog app-add-user form input[formcontrolname="firstName"]',function(res){
//   console.log("result "+fname);
// });
 client.getText('.create-service-request-pop-up .create-service-pop-up-content .create-service-popup-main-content .form-column:nth-child(1) .form-group:nth-child(1) .ui-inputtext',function(res){
 console.log("result "+fname);
 });
 client.pause(2000);
client.getText('.create-service-request-pop-up .create-service-pop-up-content .create-service-popup-main-content .form-column:nth-child(1) .form-group:nth-child(2) .ui-inputtext',function(res){
  console.log("result "+lname);
  });
client.getText('.create-service-request-pop-up .create-service-pop-up-content .create-service-popup-main-content .form-column:nth-child(2) .form-group:nth-child(1) .ui-inputtext',function(res){
console.log("result "+mobile);
});
client.getText('.create-service-request-pop-up .create-service-pop-up-content .create-service-popup-main-content .form-column:nth-child(2) .form-group:nth-child(2) .ui-inputtext',function(res){
 console.log("result "+ emailid);
});

client.expect.element('app-all-users p-dialog app-add-user form .create-cancel-group .cancel-form').to.be.visible; 
client.click('app-all-users p-dialog app-add-user form .create-cancel-group .cancel-form');
//.expect.element('.root-element .route-container .app-all-users section').to.be.visible;
client.expect.element('.route-container app-all-users section').to.be.visible;
 });
  client.moveToElement(locate,1,1,function(){
  client.expect.element(locate+' '+'td:nth-child(6) .edit-icon').to.be.visible;
  client.click(locate+' '+'td:nth-child(6) .edit-icon');
  client.pause(1000);
var arr=new Array("app-all-users p-dialog app-add-user form input[formcontrolname='firstName']","app-all-users p-dialog app-add-user form input[formcontrolname='lastName']","app-all-users p-dialog app-add-user form input[formcontrolname='email']","app-all-users p-dialog app-add-user form input[formcontrolname='mobile']");
var arr1=new Array("abcd","efgh","ijkl@gmail.com","1234567890"); 
var k=4;
for( var i=0;i<=arr.length-1;i++){
   
  for(var j=4;j<=4;j++)
    {
      console.log(arr[i]);
      console.log(i);
      client.clearValue(arr[i]);
      client.pause(1000);
      client.setValue(arr[i],arr1[j-k]);
      console.log("\n");
      client.pause(1000);
     }
 k--;
   }
  
   client.expect.element('app-all-users p-dialog app-add-user form p-autocomplete').to.be.visible; 

   client.click('.create-service-popup-main-content .form-group:nth-child(8) .create-service-popup-options .create-service-popup-options-list li:nth-child(1)');
   client.pause(1000);
   client.
  // client.click('app-all-users p-dialog app-add-user form p-autocomplete');


   //client.setValue('app-all-users p-dialog app-add-user form p-autocomplete','Andaman and Nicobar');
  //  client.expect.element('app-all-users p-dialog app-add-user form p-autocomplete button div ul li:nth-child(1)');
  //  cleint.click('app-all-users p-dialog app-add-user form p-autocomplete button div ul li:nth-child(1)');
  //  client.pause(1000);
  //  client.waitForElementVisible('option[value="Andaman and Nicobar"]');
  //   client.click('option[value="Andaman and Nicobar"]');
  //   client.pause(1000);
   // client.keys(['\uE006']); //hits the enter key.
// client.click('app-all-users p-dialog app-add-user form p-autocomplete');
// client.pause(1000);
  // client.expect.element('app-all-users p-dialog app-add-user form .form-column:nth-child(3) p-autocomplete[formcontrolname="userstate"]').to.be.visible;  

  })

}


  

  }



































//   client.pause(3000);
//  client.getText(locate+' '+'td:nth-child(2) .email-id', function(res){
//    email=res.value;
//  });
//    client.getText(locate+''+'td:nth-child(2) .cell-number',function(res){
//      mobile=res.vlaue;
//   //  });
  
  

// "Edit user":function(client){
// client.assert.containsText('.create-service-request-pop-up .create-service-pop-up-content .create-service-popup-main-content .form-group:nth-child(2) .ui-inputtext',fname);

// //client.assert.containsText('.create-service-request-pop-up .create-service-pop-up-content .create-service-popup-main-content .form-group:nth-child(2) .ui-inputtext',lname);
// client.click('.create-service-request-pop-up .create-service-pop-up-content .create-service-popup-main-content .form-group:nth-child(2) .ui-inputtext',fname);
// },

  

  
  //var fname,lname,email,mobile;
  // "Editing user details":function(client){

  //   var loc='table tbody tr';
   
  //   var locate=loc+''+':nth-child(2)';
  //   client.expect.element(locate+' '+'td:nth-child(1) .customer-cell-block .customer-details .customer-name').to.be.visible;
  
  //   var locator=locate + ' ' + 'td:nth-child(1) .customer-cell-block .customer-details .customer-name';
  //   client.getText(locator, function (res) {
  //                      console.log(res.value);
  //                     var  fname = res.value.split(' ')[0];
  //                       console.log("fname"+fname);
  //                       var lname = res.value.split(' ')[1];

  //                   })
  //                   client.getText(locate + ' ' + 'td:nth-child(2) .email-id', function (res) {
  //                   var  email = res.value;

  //                   })
  //                   client.getText(locate + ' ' + 'td:nth-child(2) .cell-number', function (res) {
  //                   var   mobile = res.value;

  //                   })
                      
  //                 },

                










    