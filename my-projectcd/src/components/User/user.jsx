import { memo} from 'react';
import { useParams } from 'react-router-dom';


const User = () => {

  const { userid } = useParams();

  return (
    <div>
      <h2 className='text-center m-4 bg-gray-600 p-4 text-3xl'>User:{userid} </h2>
    </div>
  );
};

export default memo(User);