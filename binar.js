const arr = [1, 2, 3, 3, 3, 3, 4, 5, 7, 8, 8, 10, 10, 10,10,10];

// function for searching index (or indexes) of an integer number in a sorted array
const indexFinder = (number, arrayForFindNumber) => {

// checking here if entered values are integer number and arrays or not
    if (!Number.isInteger(number)) {
        console.log('Please enter integer number');
        return
    };

    if (!Array.isArray(arrayForFindNumber)) {
        console.log("Please enter an array where you want to search");
        return
    };

// variables for the search
    let workArrayForSearching = arrayForFindNumber;
    let lengthOfSearchingArray = workArrayForSearching.length;
    let findIndex = null;
    const foundIndexes = []; 

// create logic
    while (lengthOfSearchingArray >= 1) {
// searching number(middleValue) in the middle of the array 
        const middleIndex = Math.floor(lengthOfSearchingArray / 2);
        const middleValue = workArrayForSearching[middleIndex];

        if (middleValue === number) {
            const index = findIndex !== null ? findIndex + middleIndex : middleIndex;
            foundIndexes.push(index);
       
// logic for finding indexes if in the array more then one number 
            let rigthIndex = index + 1;
            while (rigthIndex < arrayForFindNumber.length && arrayForFindNumber[rigthIndex] === number) {
            foundIndexes.push(rigthIndex);
            rigthIndex += 1;
            };
            
            let leftIndex = index - 1;
            while (leftIndex >= 0 && arrayForFindNumber[leftIndex] === number) {
            foundIndexes.push(leftIndex);
            leftIndex -= 1;
            };  
            
            if (foundIndexes.length > 1) {
                foundIndexes.sort((a, b) => a - b);
                console.log(`The number you are looking for has such indexes :`, foundIndexes.join(', '));
                return foundIndexes
            }
            else( console.log(`Number has index :`, foundIndexes.join(' '))) 
                foundIndexes.sort((a, b) => a - b);
            return foundIndexes;
        }
// do if our number in the right side of an array
        else if (middleValue < number) {
            workArrayForSearching = workArrayForSearching.slice(middleIndex + 1);
            findIndex = findIndex !== null ? findIndex + middleIndex + 1 : middleIndex + 1;
            }
// do if our number in the left side of an array
        else {
            workArrayForSearching = workArrayForSearching.slice(0, middleIndex);
            }

        lengthOfSearchingArray = workArrayForSearching.length;
    };
// answer if an array doesnt have number
        console.log('There is no such number in this array');
        return -1; 
}

// checking
// const index = indexFinder(10 ,arr);
// console.log(indexFinder('10' ,arr));
module.exports = indexFinder;
