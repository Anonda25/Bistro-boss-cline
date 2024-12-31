import { useEffect, useState } from "react"

const useMenu = ()=>{

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(false)
            })
    }, [])
return [items,loading]
}


export default useMenu;