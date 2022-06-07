exports.picker = function(prices) {
    const dumpArray = [];
    let count = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++){
            if (prices[i] >= prices[j]) {
                continue
            } else {
                if (prices[j] - prices[i] > count) {
                    count = prices[j] - prices[i]
                    dumpArray.pop()
                    dumpArray.push([i, j])
                }
            }
        }
    }
    return dumpArray.flat()
}
