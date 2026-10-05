import {useEffect} from 'react';

// This site has no home page of its own; the home page is on Wix.
export default function Home() {
  useEffect(() => {
    window.location.replace('https://www.navigationgames.org/');
  }, []);
  return null;
}
