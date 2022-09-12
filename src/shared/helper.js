
export const sum=(data)=>{
  let ans =data.filter((item)=> item.name !== "Drawing").reduce((accum,item) => accum + Number(item.Overall), 0)
  return ans
}

export const percentage=(data)=>{
    let totalNumber = data.filter((item)=> item.name !== "Drawing").length * 100;
    // console.log(totalNumber)
    return (((sum(data)*100)/totalNumber).toFixed(2))
}