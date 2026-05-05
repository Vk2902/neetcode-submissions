class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;

        let anagramMap = new Map();
        for(let ch of s){
            anagramMap.set(ch, (anagramMap.get(ch)||0)+1);
        }
        for(let ch of t){
            if(!anagramMap.has(ch)) return false;
            anagramMap.set(ch, anagramMap.get(ch)-1);
            if(anagramMap.get(ch)===0) anagramMap.delete(ch);
        }
        return anagramMap.size === 0;
    }
}
