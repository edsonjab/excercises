// https://www.geeksforgeeks.org/array-rotation/

const rotate = (arrayRotate, d) => {
    const rotate = arrayRotate.splice(0, d);
    arrayRotate = [...arrayRotate, ...rotate];
    // rotate.forEach(element => {
    //     arrayRotate.push(element);
    // });
    return arrayRotate;
}

const arrayRotate = [1,2,3,4,5,6,7];
const d = 4;

const finalArray = rotate(arrayRotate, d);
console.log(finalArray);