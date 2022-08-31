
function quicksort( array: number[], i: number = 0, j: number = array.length-1 ){

    if (i >= j){ return array; }

    let p: number = selectPivot(array, i , j);

    while( i < j){
        if( array[i] < array[p]){
            i++
        }
    }
}


function selectPivot(array: number[], start: number, end: number){



    return ;
}