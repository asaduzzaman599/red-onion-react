import { useEffect, useState } from "react"

const useFoods = (item) => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const url = `https://red-onion-asaduzzaman599.herokuapp.com/foods/${item}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })

    }, [item])


    return [foods, setFoods]

}

export default useFoods