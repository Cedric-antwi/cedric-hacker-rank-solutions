function giveMeFive(obj){
    //coding here
    let keyValueArray = []
      for(let key in obj){
        if(key.length === 5){
          keyValueArray.push(key)
        }
        if(obj[key].length === 5){
          keyValueArray.push(obj[key])
        }
      }
    return keyValueArray
  }