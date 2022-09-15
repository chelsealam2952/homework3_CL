let time = prompt("Time as three values: hours, minutes, seconds");
  if (time != null)
  {  
    let res = time.replace(/h|m|s/gi,":")
    let res1 = res.split(":");
    let carry=0;
    
    if((parseInt(res1[2])+1)===60)
    {
      res1[2]=0;
      carry=1;
    }
    else
    {
      res1[2]=parseInt(res1[2])+1;
      carry=0;
    }
    if((parseInt(res1[1])+carry)===60)
    {
      res1[1]=0;
      carry=1;
    }
    else
    {
      res1[1]=parseInt(res1[1])+carry;
      carry=0;
    }
    if((parseInt(res1[0])+carry)===24)
    {
      res1[0]=0;
      carry=1;
     }
    else
    {
      res1[0]=parseInt(res1[0])+carry;
      carry=0;
   }
   console.log("Time input (0h00m0s): "+time);
    console.log("One second later: " + res1[0]+"h"+res1[1]+"m"+res1[2]+"s")
  }
