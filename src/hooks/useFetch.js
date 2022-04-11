import {useState, useEffect} from 'react'

const useFetch = (URL) => {
    const [data, setData] = useState({results: null, loading: true, error: null})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL)
                const results  = await response.json()
               
                setData({results, loading: false, error: null})
            } catch (error) {
                setData({results: null, loading: false, error})
            }
        }
        
        fetchData()
    },[URL])
    
    return data
}

export default useFetch
