//Exercise 2 (Part 1)
let watchedSeries = ["black mirror", "money heist", "the big bang theory"]
let watchedSeriesLength = watchedSeries.length
let myWatchedSeries = watchedSeries[1]
console.log ("I watched " + watchedSeriesLength + " series: " + watchedSeries.slice(0 , 2) + " and " + watchedSeries[2])

//Exercise 2 (Part 2)
watchedSeries.splice(2,1,"friends")
watchedSeries.push("mr.robot")
watchedSeries.unshift("vikings")
watchedSeries.splice(1,1)
/*let output = watchedSeries.find(Element=>Element="money heist")*/
let outputSeries = watchedSeries[2]
console.log(watchedSeries[1].charAt(2))
console.log(watchedSeries)