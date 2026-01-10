import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    // if (theme === 'light') {
    //   setTheme('dark');
    //   document.documentElement.classList.add('dark');
    //   localStorage.setItem('theme', 'dark');
    // } else {
    //   setTheme('light');
    //   document.documentElement.classList.remove('dark');
    //   localStorage.setItem('theme', 'light');
    // }


};
     localStorage.setItem('theme', 'dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return { theme, toggleTheme };
};

export default useTheme;
