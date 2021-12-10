
function average(numbers) {
    
  for(var i=0;i<numbers.length;i++){
      if(isNaN(numbers[i])){
          numbers.splice(i,1);
      }
  }
return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
