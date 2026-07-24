import { useState, useEffect } from "react"
import { getPublicRepos } from "../services/publicRepos"
import { getPrivateRepos } from "../services/privateRepos"

const useGetRepos = () => {
    const [allRepos, setAllRepos] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const loadAllRepos = async () => {
        try {
            const data = await getPrivateRepos();
            
            if (!data) {
                throw new Error("There is no data data to load.");
            } 

            setAllRepos(data);
        } catch (error) {
            console.log(error);
            setError("Failed to load repositories...");
        }
        setLoading(false);
    };

    useEffect(() => {
        loadAllRepos();
    }, [])

    return { allRepos, error, loading, loadAllRepos };
}