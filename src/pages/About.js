import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNote } from '../state/actions'

function About(props){
    
    console.log('length of notes: ', props.notes.length);
    const handleAddNote = ()=>{
        props.addNote({
                id: 3,
                title: 'Keep it real',
                note: "Don't pretend to be who you are not just to impress people around you. At the end, you will only prove one point, and that is \"Your real self is too insignificant that you are so ashamed to identify with it\".",
                tags: 'be real, no pretense, original'
        });
    }
    return(
        <>
            <p>
                This app is for recording notes as they come to you so that you don't lose out on important thoughts and moments.
            </p>
            <p>
                <Link to='/'>Go Home</Link>
                <button onClick={handleAddNote} className="p-2 text-bold border-2 border-red-500">Add Note</button>
            </p>
        </>
    )
}
function mapStateToProps(state){
    return {notes: state};
  }

const mapDispatchToProps = {
    addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(About);