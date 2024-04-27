import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { StickyNote } from './components/StickyNote';

function App() {
    const [noteText, setNoteText] = useState('');
    const [notes, setNotes] = useState([]);

    let handleNoteTextInput = useCallback((evt) => {
        setNoteText(evt?.target?.value);
    }, []);
    let handleNoteSubmit = useCallback(
        (evt) => {
            evt.preventDefault();
            setNotes([...notes, { label: noteText, id: uuidv4() }]);
        },
        [noteText, notes]
    );

    let getPositionFromIndex = (index) => {
        let outputPosition = {
            x: 0,
            y: 0
        };

        if (index) {
            const numericIndex = Number(index);
            outputPosition.y = numericIndex * 15;
        }

        return outputPosition;
    };

    return (
        <>
            <form className="notes__form" onSubmit={handleNoteSubmit}>
                <input
                    className="note__input"
                    placeholder="Enter text"
                    value={noteText}
                    onChange={handleNoteTextInput}
                />
                <button className="note__submit" type="submit">
                    Create Note
                </button>
            </form>
            <div className="all-notes-section">
                {[...notes].map((note, index) => (
                    <StickyNote
                        key={note.id}
                        label={note.label}
                        defualtPosition={getPositionFromIndex(index)}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
