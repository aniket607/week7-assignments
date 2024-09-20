import React, { useEffect, useState } from 'react'
import axios from 'axios'
function GitCard() {

    const [gitData, setGitData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(
                "https://api.github.com/users/aniket607"
              );
              console.log(response.data);
              setGitData(response.data);
            } catch {
              console.log("error");
            }
          };
          fetchData();
    }, [])

    if (!gitData) {
        return <div>Loading...</div>;
      }

  return (
    <div className="flex items-center justify-center ">
      <div className="w-1/2 min-h-60 bg-zinc-500 text-white flex items-center justify-between m-9  rounded-lg">
        <div>
          <img
            className="w-28 h-28 rounded-md mt-8 mx-20"
            src={gitData.avatar_url}
            alt=""
          />
          <div className="mx-20 my-2">
            <div className="p-1">followers: {gitData.followers}</div>
            <div className="p-1">followings: {gitData.following}</div>
          </div>
        </div>

        <div className="my-9 mx-24 ">
          <div className="p-1">username: {gitData.login}</div>
          <div className="p-1">bio: {gitData.bio}</div>
          <div className="p-1">email: {gitData.email}</div>
          <div className="p-1">public repo: {gitData.public_repos}</div>
          <div className="p-1">type: {gitData.type}</div>
          <div>Created At: {gitData.created_at}</div>
        </div>
      </div>
    </div>
  );
};



export default GitCard