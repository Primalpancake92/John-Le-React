const publicRepoKey = import.meta.env.VITE_PUBLIC_REPO_KEY

const getPublicRepos = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/${publicRepoKey}/repos`);

        if (!response.ok) {
            throw new Error(`GitHub API returned status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log("Failed to fetch repositories:" + error);
    }
};

export default getPublicRepos;