function twoSum(nums: number[], target: number): number[] {
    for(let k = 0; k < nums.length; k++) {
        for(let m = k + 1; m < nums.length; m++) {
            const num1 = nums[k];
            const num2 = nums[m];
            const targetFound = num1 + num2 === target;
            if (targetFound) {
                return [k, m];
            }
        }
    }
    return [];
};
