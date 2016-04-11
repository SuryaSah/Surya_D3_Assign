var readline= require('readline');
var fs=require('fs');
var count=0;
var header;
//var obj={};
var result=[];


var r1=readline.createInterface({
  input:fs.createReadStream('CSV/WDI_Data.csv')
});

r1.on('line',function(line){
  count++;

  if(count==1) {
      header=line.split(",");
  }
  else {
    var aggregate = {};

    // var obj={};
    var curline=line.split(",");

    if(curline[2]=="Arable land (% of land area)"){
      if (continents[curline[0]]!=undefined ) {
        aggregate[header[0]] = curline[0];
          aggregate[header[54]] = Number(curline[54]);
          result.push(aggregate);

      }

    }


  }
}).on('close',function(){

  fs.writeFile('out.json',JSON.stringify(result),function(err){
    if(err){
      console.log(err);
    }
    else{
      console.log("data saved");
    }
  });
});

var continents = {
    /* AFRICA */
    'Algeria' : 'AFRICA',
    'Angola' : 'AFRICA',
    'Benin' : 'AFRICA',
    'Botswana' : 'AFRICA',
    'Burkina' : 'AFRICA',
    'Burundi' : 'AFRICA',
    'Cameroon' : 'AFRICA',
    'Cape Verde' : 'AFRICA',
    'Central African Republic' : 'AFRICA',
    'Chad' : 'AFRICA',
    'Comoros' : 'AFRICA',
    'Congo' : 'AFRICA',
    'Democratic Republic of' : 'AFRICA',
    'Djibouti' : 'AFRICA',
    'Egypt' : 'AFRICA',
    'Equatorial Guinea' : 'AFRICA',
    'Eritrea' : 'AFRICA',
    'Ethiopia' : 'AFRICA',
    'Gabon' : 'AFRICA',
    'Gambia' : 'AFRICA',
    'Ghana' : 'AFRICA',
    'Guinea' : 'AFRICA',
    'Guinea-Bissau' : 'AFRICA',
    'Ivory Coast' : 'AFRICA',
    'Kenya' : 'AFRICA',
    'Lesotho' : 'AFRICA',
    'Liberia' : 'AFRICA',
    'Libya' : 'AFRICA',
    'Madagascar' : 'AFRICA',
    'Malawi' : 'AFRICA',
    'Mali' : 'AFRICA',
    'Mauritania' : 'AFRICA',
    'Mauritius' : 'AFRICA',
    'Morocco' : 'AFRICA',
    'Mozambique' : 'AFRICA',
    'Namibia' : 'AFRICA',
    'Niger' : 'AFRICA',
    'Nigeria' : 'AFRICA',
    'Rwanda' : 'AFRICA',
    'Sao Tome and Principe' : 'AFRICA',
    'Senegal' : 'AFRICA',
    'Seychelles' : 'AFRICA',
    'Sierra Leone' : 'AFRICA',
    'Somalia' : 'AFRICA',
    'South Africa' : 'AFRICA',
    'South Sudan' : 'AFRICA',
    'Sudan' : 'AFRICA',
    'Swaziland' : 'AFRICA',
    'Tanzania' : 'AFRICA',
    'Togo' : 'AFRICA',
    'Tunisia' : 'AFRICA',
    'Uganda' : 'AFRICA',
    'Zambia' : 'AFRICA',
    'Zimbabwe' : 'AFRICA'

  }
