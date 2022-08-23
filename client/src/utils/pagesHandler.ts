export default (data: any) => {
    const slicedArray = [];
    for (let i = 0; i < data.length + 8; i = i + 6) {
         slicedArray.push(data.slice(i - 6, i))      
      }

    return slicedArray.slice(1)
}