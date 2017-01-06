let find_sum_of_two = function(A, val) {
    let i = 0;
    let j = A.length -1;
    while(i < j) {
        let s = A[i] + A [j];
        if(s === val) {
            return true;
        }
        if (s < val) {
            i++;
        } else {
            j--;
        }
    }
    return false;
};