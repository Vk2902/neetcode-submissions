class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = [];
        let suff = [];
        let res = [];
        let n = nums.length;
        pre[0] =  1;
        for(let i = 1; i< n;i++){
            
            pre[i] = pre[i-1]*nums[i-1];
        }
        suff[n-1]=1;
        for(let i = n - 2; i>=0;i--){
            suff[i] = suff[i+1] * nums[i+1];
        }
        console.log(pre , suff)
        for(let i = 0; i< n;i++){
            res[i] = pre[i]*suff[i];
        }
        return res;
    }
}
