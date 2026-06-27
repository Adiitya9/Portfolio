import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    // Cache the offsets to prevent layout thrashing on scroll
    const sectionOffsets = new Map<string, number>();
    
    const updateOffsets = () => {
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) sectionOffsets.set(id, el.offsetTop);
      });
    };
    
    // Initial calculation
    updateOffsets();
    
    // Recalculate on resize
    window.addEventListener('resize', updateOffsets);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY + offset;

          let currentActiveId = sectionIds[0];
          for (let i = 0; i < sectionIds.length; i++) {
            const id = sectionIds[i];
            const sectionOffset = sectionOffsets.get(id);
            if (sectionOffset !== undefined && sectionOffset <= scrollY) {
              currentActiveId = id;
            }
          }
          setActiveId(currentActiveId);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger once on load
    setTimeout(updateOffsets, 100);
    setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener('resize', updateOffsets);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
