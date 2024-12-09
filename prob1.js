const timer =(ms)=>{
    return new Promise((delay)=>setTimeout(delay, ms))
}

const iterateWithAsyncAwait = async(arr)=>{
    for ( const value of arr){
        console.log(value)
        await timer(2000)
    }
}

iterateWithAsyncAwait (["yassine","oussayma","hedi","amine"])