class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mp = new Map();
        for(let num of nums){
            if(mp.has(num)){
            return true;
            }else{
            mp.set(num || 0)+1;
        }
        }
        return false;
    }
}
