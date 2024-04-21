
function sumNumber(nums: number[]): number {
    return nums.reduce((prev, curr) => {
        return prev + curr;
    }, 0)
}