// https://www.geeksforgeeks.org/array-rotation/

const rotate = (arrayRotate, d, n) => {
    const result = [];
    let flag = 0;
    for(let i = d; flag < n; i++,flag++) {
        if(i===n)
            i = 0;
        result.push(arrayRotate[i]);
    }
    // const rotate = arrayRotate.splice(0, d);
    // arrayRotate = [...arrayRotate, ...rotate];
    // rotate.forEach(element => {
    //     arrayRotate.push(element);
    // });
    return result;
}

const arrayRotate = [1,2,3,4,5,6,7];
const d = 4;
const n = 7;

const finalArray = rotate(arrayRotate, d, n);
console.log(finalArray);