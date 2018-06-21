function sqInRect(l, w){
  if(l === w){return null}
    let arr = [];
    while(l != w){
      if(l > w){
        arr.push(w);
        l -= w;
      }else {
        arr.push(l);
        w -= l;
      }
    }
    arr.push(arr[arr.length-1])
    return arr;
}