import { useEffect, useState } from "react"

const useFoods = (item) => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const url = `http://localhost:4000/foods/${item}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
            })

    }, [item])


    return [foods, setFoods]

}

export default useFoods