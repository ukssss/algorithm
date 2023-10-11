function solution(nums) {
    let hash = new Set(nums);
    if (hash.size >= nums.length / 2) return nums.length / 2;
    else return hash.size;
}