// import logo from './logo.svg';
import { useState } from 'react';
import {Link, Outlet} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {addNote, deleteNote} from './state/actions'

function App(props) {
  
  let [note, setNote] = useState({id:'', title:'', note:'', tags:''});
  
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
  }
  const handleDelete = (id)=>{
    const confirmDelete = window.confirm('Do you want to delete this note?');
    if(confirmDelete)
      props.deleteNote({id});
  }
  useEffect(()=>{
    console.log('about to save notes')
    let savedNote = localStorage.setItem('notes', JSON.stringify(props.notes));
    console.log('saved the notes', savedNote);
  }, [props.notes]);
  return (
    <div className='max-w-3xl bg-gray-300 m-auto min-h-screen p-2'>
      <header className='flex justify-around p-2'>
        <Link to='/about'>About Note App</Link>
      </header>
      <h1 className='bg-red-400 text-center p-3'>Note Taking App with React</h1>
      <ol className='bg-white'>
        {props.notes.map((note, ind) => {
          return (
            <li className='p-2 list-decimal' key={ind}>
              <h3 className='font-bold'>{note.title}</h3>
              <p>{note.note}</p>
              <div className="flex justify-end pt-2">
                <button className="p-2 mx-2 border border-red-400">Edit {note.id}</button>
                <button className="p-2 mx-2 border border-red-400" onClick={()=>handleDelete(note.id)}>Delete {note.id}</button>
              </div>
            </li>
          )
        })}
      </ol>
      <div>
        <h2 className="text-center text-white bg-green-500">Add New Note</h2>
        <form className="p-4" >
          <div className="flex">
            <label htmlFor="title" className="min-w-[5rem] text-right pr-2">Note Title</label>
            <input type="text" onChange={handleChange} value={note.title} name="title" id="" /> <br />
          </div>

          <div className="flex">
            <label htmlFor="note" className="min-w-[5rem] text-right pr-2">Note</label>
            <textarea onChange={handleChange} value={note.note} name="note" id="" cols="30" rows="10" className="my-1"></textarea>
          </div>
          <div className="flex">
            <label htmlFor="tags" className="min-w-[5rem] text-right pr-2">Tags</label>
            <input type="text" onChange={handleChange} value={note.tags} name="tags" id="" /> <br />
          </div>

          <input type="submit" value="Add Note" onClick={handleSubmit} className="p-2 border-2 border-green-600 block m-auto" />
        </form>
      </div>
      <Outlet />
    </div>
  );
}
function mapStateToProps(state){
  return {
    notes: state
  }
}
const mapDispatchToProps={
  addNote, deleteNote
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
