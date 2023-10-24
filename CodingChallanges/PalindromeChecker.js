function PalindromeChecker(string) {
    string.toLowerCase();
    let format = string.replace(/[^a-z0-9]/gi, "")
    let formatLowerCase = format.toLowerCase();
    let result = '';
    for (let i = formatLowerCase.length - 1; i >= 0; i--) {
        result += formatLowerCase[i]
    }
    if (result === formatLowerCase) {
        return true;
    }
    return false;
}