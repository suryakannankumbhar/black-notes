import { MdDeleteForever } from 'react-icons/md';
const Note = ({ id, text, date, handleDeleteNote }) => {
    var colors = [
        '#F7DBF0',
        '#CDF0EA',
        '#B5CDA3',
        '#D8B384',
        '#F6DFEB',
        '#A7D0CD',
        '#A2B29F',
        '#E4BAD4',
        '#F39189',
        '#FF7171',
        '#BFB051',
        '#EFF0B6',
        '#FCD1D1',
        '#BEE5D3',
        '#AEE1E1',
        '#D6B0B1',
        '#FDFFBC',
        '#FFC1B6',
        '#D4E2D4',
        '#A7C5EB',
        '#949CDF',
        '#CD5D7D',
        '#70AF85',
    ];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div
            className='note'
            id='note'
            style={{ backgroundColor: randomColor }}
        >
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
                <MdDeleteForever
                    onClick={() => handleDeleteNote(id)}
                    className='delete-icon'
                    size='1.5em'
                />
            </div>
        </div>
    );
};

export default Note;
