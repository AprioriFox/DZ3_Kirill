const twoMass = (arr1,arr2) => {
    if (arr1.length > arr2.length){
        console.log("Первый массив больше второго");
    }
    else if (arr1.length < arr2.length){
        console.log("Второй массив больше первого");
    }
    else {
        console.log("Массивы равны");
    }
}
const arr1 = [1,2,3,4,5,6,7];
const arr2 = [1,2,3,4,5];

twoMass(arr1, arr2);