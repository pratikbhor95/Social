import React , { useEffect, useState }  from 'react'

const Logo = () => {
  const letters = ['B', 'H', 'O', 'R', 'S']
  const [visibleCount, setVisibleCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < letters.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 100); // 300ms delay between each letter

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);
  
  return (
    
    <div className="flex gap-2 text-3xl sm:text-4xl lg:text-5xl p-6">
      {letters.slice(0, visibleCount).map((letter, index) => (
        <span key={index} className="animate-fade-in text-neutral-800 dark:text-neutral-200">
          {letter}
        </span>
      ))}
    </div>
  )
}

export default Logo