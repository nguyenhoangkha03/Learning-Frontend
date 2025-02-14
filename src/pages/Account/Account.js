import { useEffect, useState } from 'react'
import { getAccounts } from '../../services/AccountService'
function Account(){
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        async function fetchData(){
            const data = await getAccounts()
            setAccounts(data)
        }
        fetchData()
    }, [])

    return (
        <h1>{data}</h1>
    )
}

export default Account