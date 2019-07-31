function stocList(listOfArt, listOfCat){
	var obj = {};
	for (var i = 0; i < listOfCat.length; i++) {
		var sum = 0;
		for (var j = 0; j < listOfArt.length; j++){
			if (listOfCat[i] === listOfArt[j][0]){
				if (listOfArt[j].length === 8){
					sum += parseInt(listOfArt[j][5] + listOfArt[j][6] + listOfArt[j][7]);
				}else {
					sum += parseInt(listOfArt[j][5] + listOfArt[j][6]);
				}
			}
		}
		obj[listOfCat[i]] = sum
	}
	var str = "";
	for(var key in obj){
	  if (str.length > 0) {
      str += ( ' - ' + '(' + key + ' : ' + obj[key] + ')');
    } else {
      str += ('(' + key + ' : ' + obj[key] + ')');
    }
	}
	return str;
}