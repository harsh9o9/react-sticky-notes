import { useCallback, useEffect, useRef, useState } from 'react';
import { throttleWithRaf } from './throttleWithRaf';

export const useDraggable = (defualtPosition = { x: 0, y: 0 }) => {
    const [pressed, setPressed] = useState(false);
    const ref = useRef();
    const positon = useRef(defualtPosition);

    const callbackRef = useCallback((elem) => {
        if (!elem) return;

        if (!ref.current) {
            ref.current = elem;
        }

        const handleMouseDown = (e) => {
            e.target.style.userSelect = 'none';
            setPressed(true);
        };
        elem.addEventListener('mousedown', handleMouseDown);
    }, []);

    useEffect(() => {
        if (!pressed) return;

        const handleMouseMove = throttleWithRaf((evt) => {
            if (!ref.current || !positon.current) return;
            positon.current = {
                x: positon.current.x + evt.movementX,
                y: positon.current.y + evt.movementY
            };
            ref.current.style.transform = `translate(${positon.current.x}px, ${positon.current.y}px)`;
        });
        const handleMouseUp = (e) => {
            e.target.style.userSelect = 'auto';
            setPressed(false);
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            handleMouseMove.cancel();
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [pressed]);

    return [callbackRef, pressed];
};
