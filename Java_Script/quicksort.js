
const partition = (arrayPasss, start, end) => {

let arrayPass = arrayPasss;
let half = Math.round((arrayPass.slice(start, end+1).length-1)/2+start);
let pivot = (arrayPass[half]);
// console.log("half is " + half);
// console.log("pivot is" + pivot);

let times = 1;
// let i;
// let j;
let i;
let j;

while (times >= 0){
    // console.log("running");
    i = start;
    j = end;
    // console.log(i);
while (i < half){
    // console.log("i is" + arrayPass[i] );

    if (arrayPass[i] > pivot){
        // console.log("i stopped");
        let temp = null;
        while (j > half){
            // console.log("j is" + arrayPass[j] );

            if (arrayPass[j] < pivot){
                // console.log("swtiching "+arrayPass[i]+ " for "+ arrayPass[j]);
                temp = arrayPass[i];
                arrayPass[i] = arrayPass[j];
                arrayPass[j] = temp;
                i = start;
                j = end;
                break;
                }

            if (j == i && i == half && j == half){
                // console.log(arrayPass);
                return j;
                }
            j--;
            }
        if (temp == null){
        // console.log("switching left for pivot");
        arrayPass[half] = arrayPass[i];
        arrayPass[i] = pivot;
        pivot = arrayPass[half];
        // console.log("swtiching the half:"+ pivot + " for "+ arrayPass[i]);
        // console.log("pivot is" + pivot);
        i = start-1;
        }

        j = arrayPass.length-1;
        }
    i++;
    }

if (j != half){
    // console.log("closing right side: "+j +"-"+half);
    while (j > half){
        // console.log("j is"+ arrayPass[j]);

        if (arrayPass[j] < pivot){

            arrayPass[half] = arrayPass[j];
            arrayPass[j] = pivot;
            pivot = arrayPass[half];
            // console.log("swtiching the half:"+ pivot + " for "+ arrayPass[j]);
            // console.log("pivot is" + pivot);
            j = end+1;
        }
        j--;
        }
    }
    i = start;
    while (i < half){
        // console.log("i is" + arrayPass[i] );
    
        if (arrayPass[i] > pivot){
            arrayPass[half] = arrayPass[i];
            arrayPass[i] = pivot;
            pivot = arrayPass[half];
            // console.log("swtiching the half:"+ pivot + " for "+ arrayPass[i]);
            // console.log("pivot is" + pivot);
            i = start-1;
        }
        i++;
    }
    times--;
}
//     console.log(arrayPass);
//     console.log(j +"-" + arrayPass[j]);
    return j;
}

const quicksort = (array) => {
    let mid = partition(array, 0, array.length-1);
    // console.log("Mid is "+mid);

    let frontMid = partition(array, 0, mid-1);
    // console.log(frontMid+"where are you front");
    while (frontMid > 2 ){
        // console.log(array);
        // console.log(frontMid);
        let rando = partition(array, 0, frontMid-1);
        frontMid = rando;
    }

    let backMid = partition(array, mid+1, array.length-1);
    // console.log(backMid+"where are you back");
    while(backMid < array.length-3){
        // console.log(array);

        let rando = partition(array, backMid+1, array.length-1);
        frontMid = rando;
    }
    if (array[0] > array[1]){
        let x = array[0];
        array[0] = array[1];
        array[1] = x;
    }
    if (array[array.length-1] < array[array.length-2]){
        let x = array[array.length-1];
        array[array.length-1] = array[array.length-2];
        array[array.length-2] = x;
    }
    console.log(array);
    // console.log(array[1]);

}



quicksort([5, 4, 33, 8, 3, 12, 1 , 7, 14, 11 ,44, 27]);
quicksort([9,8,7,6,5,4,3,2,1,0]);
quicksort([101,24,50,82,19,20,48,68,382,94]);
