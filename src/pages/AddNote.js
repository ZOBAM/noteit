import { connect } from 'react-redux';
import { addNote, saveEdit } from '../state/actions';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function AddNote(props){
    let [note, setNote] = useState({id:'', title:'', note:'', tags:''});
    let navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();
    let [noteAdded, setNoteAdded] = useState(false);
    let [editing, setEditing] = useState(false);

    const handleChange = (e)=>{
        setNote({...note, [`${e.target.name}`]: e.target.value})
        // console.log(note);
      }
      const clearNote = ()=>{
        setNote({id:'', title:'', note:'', tags:''});
        
      }
      const handleSubmit = (e)=>{
        e.preventDefault();
        if (!editing) {
          let newID = props.notes.length + 1;
          let newNote = { ...note, id: newID }
          setNote(newNote);
          props.addNote(newNote);
        }else{
          props.saveEdit(note);
        }
        // setNotes([...notes, newNote]);
        clearNote();
        setNoteAdded(true);
        setTimeout(()=>{navigate('/')}, 1500);
      } 
    useEffect(()=>{
      const noteID = searchParams.get('edit');
      if(noteID){
        let note = props.notes.find(elem=>elem.id == noteID);
        setEditing(true);
        setNote(note);
      }
    }, [])  
    return(
        <div>
        <h2 className="text-center text-white bg-green-500 mt-6 p-2 font-bold">
          { editing? 'Editing' : 'Add New' } Note
        </h2>
        {
        !noteAdded
        &&
        <form className="p-4" >
          <div className="">
            <label htmlFor="title" className="min-w-[5rem] text-right pr-2 font-semibold">Title</label><br />
            <input className='border-2 border-gray-300 p-2 rounded-xl my-2 w-full' type="text" onChange={handleChange} value={note.title} name="title" id="" /> <br />
          </div>

          <div className="my-4">
            <label htmlFor="note" className="min-w-[5rem] text-right pr-2 font-semibold">Note</label><br />
            <textarea onChange={handleChange} value={note.note} name="note" id="" cols="30" rows="10" className="border-2 border-gray-300 p-2 rounded-xl my-2 w-full"></textarea>
          </div>
          <div className="">
            <label htmlFor="tags" className="min-w-[5rem] pr-2 font-semibold block">Tags</label>
            <input className='border-2 border-gray-300 p-2 rounded-xl my-2 w-full' type="text" onChange={handleChange} value={note.tags} name="tags" id="" /> <br />
          </div>

          <input type="submit" value={editing? "Save Change" : "Add Note"} onClick={handleSubmit} className="p-2 border-2 border-green-600 block m-auto my-3" />
        </form>
        }
        {
        noteAdded 
        && 
        <div className='w-full h-72 bg-gray-200 flex justify-center items-center'>
              <p className='w-36 h-36 rounded-full bg-green-500 text-white p-4 text-center flex justify-center items-center'>
                <span className='text-xl font-extrabold'>
                  {editing? "Note Updated" : "New Note Added"}!
                </span>
              </p>
        </div>
        }
      </div>
    )
}

function mapStateToProps(state){
    return {
      notes: state
    }
  }
  const mapDispatchToProps={
    addNote, saveEdit
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(AddNote);