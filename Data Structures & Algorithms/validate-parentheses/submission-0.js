class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (let char of s){
            if (char === '(' || char === '{' || char === '['){
                stack.push(char);
            }
            else {
                if (!stack.length){
                    return false;
                    }
                    let top = stack.pop();
                    if (char === ')' && top !== '(') {return false;}
                    if (char === '}' && top !== '{') {return false;}
                    if (char === ']' && top !== '[') {return false;}
                
            }
        }
        return stack.length === 0;
    }
}
