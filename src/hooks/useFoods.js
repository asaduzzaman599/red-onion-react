import { useEffect, useState } from "react"

const useFoods = (item)=>{
    const [foods,setFoods] = useState([]);
    useEffect(() => {
        
        fetch('https://raw.githubusercontent.com/asaduzzaman599/red-onion-react/main/public/data/foodData.json')
            .then(res => res.json())
            .then(data => {
                setFoods(data[item])
            })
            
    }, [item])


    return [foods,setFoods]

}

export default useFoods