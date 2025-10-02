import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://art-app24/portal-iro/api/infrastructure/getDashboard', {
        method: 'GET',
        credentials: 'include'
      })
        .then(res => {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.json();
        })
        .then(json => {
          setData(json);
          setError(null);
          setLoading(false);
          // console.log(json)
        })
        .catch(() => {
          // RETRY
          setTimeout(() => {
            fetch('/api/myroute')
              .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
              })
              .then(json => {
                setData(json);
                setError(null);
                setLoading(false);
              })
              .catch(err => {
                setError(err);
                setLoading(false);
              });
          }, 10000);
        });
    };


    fetchData();
    const intervalId = setInterval(fetchData, 60000); // fetch every 1 min

    return () => clearInterval(intervalId);
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}
