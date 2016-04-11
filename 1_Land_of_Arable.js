var readline= require('readline');
var fs=require('fs');
var count=0;
var header;
//var obj={};
var result=[];
var result1=[];
var result2=[];

var r1=readline.createInterface({
  input:fs.createReadStream('CSV/WDI_Data.csv')
});

r1.on('line',function(line){
  count++;

  if(count==1) {
      header=line.split(",");
  }
  else {
    //var obj={};

    var curline=line.split(",");

    if(curline[0]=="India" && curline[2]=="Arable land (% of land area)") {
      for(var i=4;i<header.length;i++){
        var obj={
          'Year':{},
          'Value':{}
        };
        obj['Year']=header[i];
        obj['Value']=Number(curline[i]);
        result.push(obj);

      }



    }
  }

});

r1.on('line',function(line){
  count++;

  if(count==1) {
      header=line.split(",");
  }
  else {
    //var obj={};

    var curline=line.split(",");

    if(curline[0]=="India" && curline[2]=="Arable land (hectares per person)") {
      for(var i=4;i<header.length;i++){
        var obj={
          'Year':{},
          'Value':{}
        };
        obj['Year']=header[i];
        obj['Value']=Number(curline[i]);
        result1.push(obj);

      }



    }
  }

});

r1.on('line',function(line){
  count++;

  if(count==1) {
      header=line.split(",");
  }
  else {
    //var obj={};

    var curline=line.split(",");

    if(curline[0]=="India" && curline[2]=="Arable land (hectares)") {
      for(var i=4;i<header.length;i++){
        var obj={
          'Year':{},
          'Value':{}
        };
        obj['Year']=header[i];
        obj['Value']=Number(curline[i]);
        result2.push(obj);

      }



    }
  }

});

r1.on('close',function(err){
    fs.writeFile('Write2.json',JSON.stringify(result),function(err){
      if(err)
        console.log(err);
    });
    console.log("Data is completed");
});

r1.on('close',function(err){
    fs.writeFile('Write.json',JSON.stringify(result1),function(err){
      if(err)
        console.log(err);
    });
    console.log("Data is completed");
});

r1.on('close',function(err){
    fs.writeFile('Write1.json',JSON.stringify(result2),function(err){
      if(err)
        console.log(err);
    });
    console.log("Data is completed");
});
