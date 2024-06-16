var fs = require('fs');
    fs.readdir('Notes', function(err,data){
        if(err) console.log();
        else console.log(data)
    })  
    