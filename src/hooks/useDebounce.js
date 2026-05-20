import { useState, useEffect } from 'react';

/**
 * useDebounce
 * Delays updating the returned value until `delay` ms after the last change.
 * Use this to avoid firing API calls or expensive filters on every keystroke.
 *
 * @param {*} value - The value to debounce (string, object, etc.)
 * @param {number} delay - Debounce delay in milliseconds (default: 300)
 * @returns {*} The debounced value
 *
 * @example
 * const debouncedSearch = useDebounce(searchTerm, 400);
 * useEffect(() => { fetchResults(debouncedSearch); }, [debouncedSearch]);
 */
const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if the value changes before the delay expires
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
