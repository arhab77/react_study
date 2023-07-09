import { useCallback, useEffect, useState } from "react";

const Identify = () => {
    const fetchUser = useCallback(() => ['Wawan', 'Uno', 'Siti'],[]);
    let [user,setUser] = useState([]);

    useEffect(() => {
        const data = fetchUser();
        setUser(data);
    },[fetchUser])

    return(
        <div>
            <ul>
                {
                    user.map(u => <li key={u}>{u}</li>)
                }
            </ul>
        </div>
    )
}

export default Identify;