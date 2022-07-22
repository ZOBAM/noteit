// import logo from './logo.svg';
import { Outlet} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from './state/actions';
import { useState } from 'react';
function App(props) {
  
  let notesPerPage = 5;
  const numOfNotes = props.notes.length;
  let numOfPage = Math.ceil(numOfNotes/notesPerPage);
  let [currentPage, setCurrentPage] = useState(1);
  let pagesLink = [];

  for(let i = 0; i < numOfPage; i++){
    pagesLink[i] = i+1;
  }
 
  let currentNotes = props.notes.slice((currentPage-1)*notesPerPage,currentPage * notesPerPage);
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
      <div className='bg-green-200 p-2 text-right'>
        <span className="p-2 font-mono">({numOfNotes} notes)</span>
      </div>
      <ol className='bg-white'>
        {currentNotes.map((note, ind) => {
          return (
            <li className='p-2 list-decimal' key={ind}>
              <h3 className='font-bold'>{note.title}</h3>
              {/* <p>{note.note}</p> */}
              <div className="flex justify-end pt-2">
                <button className="p-2 mx-2 border border-red-400">Edit {note.id}</button>
                <button className="p-2 mx-2 border border-red-400" onClick={()=>handleDelete(note.id)}>Delete {note.id}</button>
              </div>
            </li>
          )
        })}
      </ol>
      <div className="p-2 bg-gray-200 flex justify-around">
        {
          pagesLink.map(num=> <span key={num} onClick={()=>setCurrentPage(num)} className='p-2 px-4 border border-blue-400'>{num}</span>)
        }
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
  deleteNote
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
