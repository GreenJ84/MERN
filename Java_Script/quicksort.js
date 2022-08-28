
const partition = (arrayPass) => {

let array = arrayPass;
let half = Math.round((array.length-1)/2);
let pivot = (array[half]);
console.log("pivot is" + pivot);

let times = 1;
let i;
let j;

while (times >= 0){
    console.log("running");
i = 0;
j = array.length-1;

while (i < half){
    console.log("i is" + array[i] );

    if (array[i] > pivot){
        console.log("i stopped");
        let temp = null;
        while (j > half){
            console.log("j is" + array[j] );

            if (array[j] < pivot){
                console.log("swtiching "+array[i]+ " for "+ array[j]);
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                break;
                }

            if (j == i && i == half && j == half){
                console.log(array);
                return j;
                }
            j--;
            }
        if (temp == null){
        console.log("switching left for pivot");
        array[half] = array[i];
        array[i] = pivot;
        pivot = array[half];
        console.log("swtiching the half:"+ pivot + " for "+ array[i]);
        console.log("pivot is" + pivot);
        }

        j = array.length-1;
        }
    i++;
    }

if (j != half){
    console.log("closing right side: "+j +"-"+half);
    while (j > half){
        console.log("j is"+ array[j]);

        if (array[j] < pivot){

            array[half] = array[j];
            array[j] = pivot;
            pivot = array[half];
            console.log("swtiching the half:"+ pivot + " for "+ array[j]);
            console.log("pivot is" + pivot);
        }
        j--;
        }
    }
    times--;
}
    console.log(array);
    console.log(j +"-" + array[j]);
    return j;
}

const quicksort = (array) => {
    console.log(array);
    if(array.length > 2){
    let mid = partition(array);

    let front = array.slice(0, mid);
    quicksort(front);


    let back = array.slice(mid, array.length+1);
    quicksort(back);

    }
    console.log(array);
}


quicksort([5, 4, 33, 8, 3, 12, 1 , 7, 14, 11 ,84, 27]);
