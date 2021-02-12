function myFunction() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getRange("D:D").getValues();
  for(let i = 1; i <= 13100; i++) {
    for (let m = 1; m <= 13100; m++) {
      if(i !== m ){
        // Logger.log(gnu[m]);
        // Logger.log(value[i]);
        if (values[i][0] === values[m][0]){
          // Logger.log(values[i][0]);
          Logger.log(values[m]);
          // Logger.log("Pass");
          sheet.getRange(`D${m}`).clear();
        }
      }
    }
  } 
}

