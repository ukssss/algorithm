function solution(nums) {
    let cnt = 0;
    nums.forEach((num, idx) => {
        for(let i = idx + 1; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                const tmp = num + nums[i] + nums[j];
                let check = true;
                for(let k = 2; k < tmp; k++) {
                    if(tmp % k === 0) {
                        check = false;
                        break;
                    }
                }
                if(check) cnt++;
            }
        }
    })
    return cnt;
}