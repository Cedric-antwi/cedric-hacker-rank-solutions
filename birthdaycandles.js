function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 1
    let sorted = candles.sort(function(a, b){return b-a})
    for(let i=1; i < sorted.length; i++){
        if(sorted[i - 1] === sorted[i]){
            count++
            console.log(count)
        } else {
            continue
        }
    }
    return count
}