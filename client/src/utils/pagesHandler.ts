export default (data: any) => {
    const slicedArray = [];
    for (let i = 0; i < data.length + 8; i = i + 9) {
         slicedArray.push(data.slice(i - 9, i))      
      }

    return slicedArray.slice(1)
}