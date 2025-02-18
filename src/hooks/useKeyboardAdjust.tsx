import { useEffect } from 'react';

export const useKeyboardAdjust = (divRef: React.RefObject<HTMLDivElement>, inputRef: React.RefObject<HTMLInputElement>, isFirstQuestion: boolean) => {
  useEffect(() => {
    // 첫 번째 질문이 아닐 경우 키보드 조정을 하지 않음
    if (!isFirstQuestion) return;

    const inputElement = inputRef.current;
    const visualViewport = window.visualViewport;

    const handleVisualViewPortResize = () => {
      const currentVisualViewport = Number(visualViewport?.height);
      if (divRef.current) {
        divRef.current.style.minHeight = `${currentVisualViewport}px`;
      }
    };

    const handleFocus = () => {
      setTimeout(() => {
        if (inputElement) {
          const elementPosition = inputElement.getBoundingClientRect().top;
          const offset = 100;
          window.scrollTo({
            top: window.scrollY + elementPosition - offset,
            behavior: 'smooth',
          });
        }
      }, 300);
    };

    if (visualViewport) {
      visualViewport.addEventListener('resize', handleVisualViewPortResize);
    }

    inputElement?.addEventListener('focus', handleFocus);

    return () => {
      if (visualViewport) {
        visualViewport.removeEventListener('resize', handleVisualViewPortResize);
      }
      inputElement?.removeEventListener('focus', handleFocus);
    };
  }, [divRef, inputRef, isFirstQuestion]);
};
