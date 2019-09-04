let arr =  [9, 5, 4, 3, 7, 6, 0, 2, 8, 1, 15, 12, 18, 12];

function findPermutation(array) {
    let counter = 0;//setting a counter variable to be undated everytime the array is swapped
    
    array.sort(function(a, b){//function collecting two elements in an array at a time
        counter +=1;//updating array by 1 everytime it swaps
        return a-b;
    });

    return counter;
};

console.log(findPermutation(arr));//logging function to web browers console