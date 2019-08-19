//Common denominators
function convertFrac(array){
    let result = "";
      let data = [];
      array.forEach(x => data.push(x[1]));
      let commonDemom = data.sort((a,b) => a-b)[data.length - 1];
      
      function isMultiple(value){
          return commonDemom % value === 0;
      }
      while(!data.every(isMultiple)){
          commonDemom ++
      }
  
      for(let i = 0; i < array.length; i++){
          let factor = commonDemom / array[i][1];
          result += "(" + array[i][0] * factor + "," + array[i][1] * factor + ")"
      }
      return result;
  }