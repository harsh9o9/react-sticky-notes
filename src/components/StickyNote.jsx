import { useDraggable } from '../hooks/useDraggable';

export const StickyNote = ({ label, defualtPosition }) => {
    // const handleDrag = useCallback(({ x, y }) => {
    //     return {
    //         x: Math.max(0, x),
    //         y: Math.max(0, y)
    //     };
    // }, []);

    const [ref, pressed] = useDraggable(defualtPosition);

    return (
        <p
            ref={ref}
            style={{
                transform: `translate(${defualtPosition?.x ? defualtPosition.x : '0'}px, ${defualtPosition?.y ? defualtPosition.y : '0'}px)`
            }}
            className={`all-notes__note ${pressed ? 'all-notes__note-press-styles' : ''}`}>
            {label}
        </p>
    );
};
