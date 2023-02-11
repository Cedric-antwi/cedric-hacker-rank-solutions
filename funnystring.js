function funnyString(s) {
    // Write your code here
    let split = s.split('')
    let reordered = split.slice().reverse()
    console.log(reordered)
    
    for(let i=1; i< split.length; i++){
        if (s.charCodeAt(i) - s.charCodeAt(i - 1) === reordered.charCodeAt(i) - reordered.charCodeAt(i - 1) ){
            return "Funny"
        } else {
            return "Not Funny"
        }
    }
}