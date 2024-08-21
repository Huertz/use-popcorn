import { useEffect } from 'react';
import { useState } from 'react';

export function useLocalStorageState(initialState, key) {
  //! local storage
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem('watched', JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
