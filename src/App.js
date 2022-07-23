// import logo from './logo.svg';
import { Link} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from './state/actions';
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
    document.title = "Note App";
  }, []);
  return (
    <div className='max-w-3xl bg-gray-300 m-auto min-h-screen p-2'>
      <div className='bg-green-400 border-b-2 p-2 text-right'>
        <span className="p-2 font-mono text-white">({numOfNotes} notes)</span>
      </div>
      <div className='bg-white min-h-[70vh]'>
        <ol className=''>
          {currentNotes.map((note, ind) => {
            return (
              <li className='p-2 ml-6 list-decimal' key={ind}>
                <div className="flex justify-between items-center mt-2 border p-2">
                  <h3 className='font-bold'>
                    <Link to={'notes/' + note.id}>{note.title}</Link>
                  </h3>
                  <button className="p-2 mx-2 border border-red-400" onClick={() => handleDelete(note.id)}>Delete x</button>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
      <div className="p-2 bg-gray-200 flex justify-around">
        {
          pagesLink.map(num=> <span key={num} onClick={()=>setCurrentPage(num)} className='p-2 px-4 border border-blue-400'>{num}</span>)
        }
      </div>
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
