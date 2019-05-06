var chromedriver=require('chromedriver');
module.exports={
    before:function(done){
        chromedriver.start();
        done();
},
after:function(done){
    chromedriver.stop();
    done();
},
pageTimeOut:200000,
"waitForConditionTimeout":200000
};