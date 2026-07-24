const getPrivateRepos = async () => {
    try {
        const response = await fetch("https://github.com", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_BASE_KEY}`,
                "Accept": 'application/vnd.github+json'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to request API data. HTTP status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log("API could not fetch respository data. " + error);
    } 
};

export default getPrivateRepos;