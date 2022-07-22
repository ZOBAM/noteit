import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';

function NoteDetails(props){
    let params = useParams();
    const note = props.notes.find(elem=>elem.id == params.id);
    return(
        <div>
            <h1 className='text-xl font-bold text-center p-2 mt-6'>{note.title}</h1>
            <p className='p-4 text-lg leading-8'>
                {note.note}
            </p>
            <div className='flex justify-center p-4 my-8'>
                <button className='p-2 px-6 text-xl border border-blue-400'>Edit</button>
                <button className='p-2 px-6 text-xl border border-red-400 ml-4'>Delete x</button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        notes: state
    }
}
export default connect(mapStateToProps)(NoteDetails);