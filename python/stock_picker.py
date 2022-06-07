def picker(prices):
    ans_list = []
    count = 0
    for i, num in enumerate(prices):
        for x in range(1, len(prices), 1):
            if num > prices[x]:
                pass
            elif num < prices[x] and i < x:
                if prices[x] - num > count:
                    count = prices[x] - num
                    if ans_list:
                        ans_list.append([i,x])
                        ans_list.pop(0)
                    else:
                        ans_list.append([i,x])
    return ans_list[0]
