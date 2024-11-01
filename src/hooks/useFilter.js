function useFilter(data,filter,callback) {
    return ( 
        data.filter((el)=>{
        return callback(el).includes(filter)
        
    }
))
}

export default useFilter;