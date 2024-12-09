const fetchData =()=>{
    return new Promise((delay)=>
        setTimeout(()=>{
            delay ({data:"fetching data from API"},1000)
        }))
}

const awaitCall = async()=>{
  try{
    const res = await fetchData()
    console.log(res.data)

  }
  catch(err){
    console.error("error in fetching data",err)
  }
}

awaitCall()