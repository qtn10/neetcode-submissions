class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;

        let seen = new Array(26).fill(0);
        for (let i: number = 0; i < s.length; i++) {
            seen[s.charCodeAt(i) - 97]++;
            seen[t.charCodeAt(i) - 97]--;
        }

        for(const c of seen) {
            if (c != 0) return false;
        }

        return true;
    }
}
