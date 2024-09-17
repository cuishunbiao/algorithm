
function isPalindrome(s: string): boolean {
    let sFilter: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let left = 0, right = sFilter.length - 1
    while (left < right) {
        if (sFilter[left] !== sFilter[right]) return false
        left++;
        right--;
    }
    return true
};

const character = "A man, a plan, a canal: Panama"
console.log(isPalindrome(character));

