function firstToLast(str,c){
    //coding here..
    if (str.includes(c)){
      gap = str.lastIndexOf(c) - str.search(c)
      console.log(gap)
      return gap
    } else {
      return -1
    }
  
  }