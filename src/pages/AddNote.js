import { connect } from 'react-redux';
import { addNote } from '../state/actions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNote(props){
    let [note, setNote] = useState({id:'', title:'', note:'', tags:''});
    let navigate = useNavigate();
    let [noteAdded, setNoteAdded] = useState(false);

    const handleChange = (e)=>{
        setNote({...note, [`${e.target.name}`]: e.target.value})
        // console.log(note);
      }
      const clearNote = ()=>{
        setNote({id:'', title:'', note:'', tags:''});
        
      }
      const handleSubmit = (e)=>{
        e.preventDefault();
        let newID = props.notes.length + 1;
        let newNote = {...note, id: newID}
        setNote(newNote);
        // setNotes([...notes, newNote]);
        props.addNote(newNote);
        clearNote();
        setNoteAdded(true);
        setTimeout(()=>{navigate('/')}, 1500);
      }   
    return(
        <div>
        <h2 className="text-center text-white bg-green-500">Add New Note</h2>
        {
        !noteAdded
        &&
        <form className="p-4" >
          <div className="">
            <label htmlFor="title" className="min-w-[5rem] text-right pr-2">Note Title</label><br />
            <input className='border-2 w-full' type="text" onChange={handleChange} value={note.title} name="title" id="" /> <br />
          </div>

          <div className="my-4">
            <label htmlFor="note" className="min-w-[5rem] text-right pr-2">Note</label><br />
            <textarea onChange={handleChange} value={note.note} name="note" id="" cols="30" rows="10" className="my-1 border-2 w-full"></textarea>
          </div>
          <div className="">
            <label htmlFor="tags" className="min-w-[5rem] pr-2 block">Tags</label>
            <input className='border-2 w-full' type="text" onChange={handleChange} value={note.tags} name="tags" id="" /> <br />
          </div>

          <input type="submit" value="Add Note" onClick={handleSubmit} className="p-2 border-2 border-green-600 block m-auto my-3" />
        </form>
        }
        {
        noteAdded 
        && 
        <div className='w-full h-72 bg-gray-200 flex justify-center items-center'>
            <p className='w-36 h-36 rounded-full bg-green-500 text-white p-4 text-center flex justify-center items-center'>
                <span className='text-xl font-extrabold'>New Note Added!</span> 
            </p>
        </div>}
      </div>
    )
}

function mapStateToProps(state){
    return {
      notes: state
    }
  }
  const mapDispatchToProps={
    addNote
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(AddNote);