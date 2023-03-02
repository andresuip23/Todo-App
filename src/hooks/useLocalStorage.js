import React, { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const[error,setError]=useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try{
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
    }catch(error){
        setError(error);
    }
    }, 1500);


  },[]);

  const saveItem = (newItem) => {
    try{
    console.log("save");
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyItem);
    setItem(newItem);
    }catch(error){
        setError(error);
    }
  };

  return {item, saveItem,loading,error};
}

export default useLocalStorage;
