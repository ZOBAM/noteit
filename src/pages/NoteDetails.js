import {connect} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {deleteNote} from '../state/actions'

function NoteDetails(props){
    let params = useParams();
    let navigate = useNavigate();
    const note = props.notes.find(elem=>elem.id == params.id);

    const handleDelete = ()=>{
        let confirmDelete = window.confirm('Do you want to delete this note?');
        if(confirmDelete){
            props.deleteNote({id: note.id});
            navigate('/');
        }
    }
    return(
        <div>
            <h1 className='text-xl font-bold text-center p-2 mt-6'>{note.title}</h1>
            <p className='p-4 text-lg leading-8'>
                {note.note}
            </p>
            <div className="p-4 bg-gray-200 mt-3">
                <span className='py-2 px-4 text-white bg-gray-800 font-bold'>Tags:</span>
                <div className='font-bold p-3 border border-gray-800 rounded-md mt-1 bg-white'>
                    {note.tags}
                </div>
            </div>
            <div className='flex justify-center p-4 my-8'>
                <button onClick={()=>navigate(`/add-note?edit=${note.id}`)} className='p-2 px-6 text-xl border border-blue-400'>Edit</button>
                <button onClick={handleDelete} className='p-2 px-6 text-xl border border-red-400 ml-4'>Delete x</button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        notes: state
    }
}
const mapDispatchToProps={
  deleteNote
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);