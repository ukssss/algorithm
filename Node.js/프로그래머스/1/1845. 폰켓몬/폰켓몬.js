function solution(nums) {
    const hash = new Set(nums);
    const max = nums.length / 2;
    const size = hash.size;

    return size > max ? max : size;
}