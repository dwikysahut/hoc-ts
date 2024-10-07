import axios from 'axios';
import React, { useEffect, useState } from 'react';

function withLoader(Component: React.FC, url: string) {
  return function WrappedComponent(props: any) {
    const [isLoading, setIsLoading] = useState(true); // Start with true since data is not yet loaded
    const [data, setData] = useState(null); // Initialize as null since no data is loaded yet

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true)
        try {
          const response = await axios.get('https://restaurant-api.dicoding.dev/list'); // Fetch data from the provided URL
          console.log(response)
          setData(response.data?.data?.restaurant); // Set the response data
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false); // Ensure loading is false whether successful or not
        }
      };

      fetchData();
    }, [url]); // Trigger effect when the URL changes

    if (isLoading) {
      return <p>Loading...</p>; // Show loading indicator while fetching data
    }

    return <Component {...props} data={data} />; // Pass fetched data to the wrapped component
  };
}
export default withLoader; //