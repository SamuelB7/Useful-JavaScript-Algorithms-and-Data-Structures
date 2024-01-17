function isValid(s) {
    let hash = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hash) {
            if (stack.length > 0 && hash[s[i]] === stack.pop()) {
                continue;
            }
        }
        stack.push(s[i]);
    }
    return stack.length === 0;
};