// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const useMenu = () => {
    const AxiosPublice = UseAxiosPublic()
    // const [items, setItems] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setItems(data)
    //             setLoading(false)
    //         })
    // }, [])

    const { data: items = [], isLoading: loading, refetch } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await AxiosPublice.get('/menu');

            return res.data
        }
    })
    return [items, loading, refetch]
}


export default useMenu;