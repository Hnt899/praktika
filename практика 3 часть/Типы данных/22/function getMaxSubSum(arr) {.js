function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    
    for (let num of arr) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }
    
    return maxSum;
}

// Примеры:
alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([2, -1, 2, 3, -9])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0