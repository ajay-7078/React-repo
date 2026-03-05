import { memo, useEffect, useState } from 'react';
//import { useLoaderData } from 'react-router-dom';

// const Github = () => {                              

 const Github = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/ajay-7078')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  }, []);

  return (
    <div>
      <h2 className='text-center m-4 bg-gray-600 p-4 text-3xl'>
        Github followers: {data.followers}
      </h2>

      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};

export default memo(Github);

// export const githubLoader = () => {
//   return fetch('https://api.github.com/users/ajay-7078')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       return data;
//     }   )
//     .catch(err => {
//       console.log(err)
//       return null;
//     })
// }
