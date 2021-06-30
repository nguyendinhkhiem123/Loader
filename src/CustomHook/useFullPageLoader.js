import React, { useState } from 'react';
import Loader from './Loader';
function useFullPageLoader(props) {
    const [loading  ,setLoading] =  useState(false);
    return (
      [ loading ? <Loader></Loader> : null , () => setLoading(true) , () => setLoading(false)]
    );
}

export default useFullPageLoader;