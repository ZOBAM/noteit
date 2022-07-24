// import logo from './logo.svg';
import { Link} from 'react-router-dom';
import './App.scss';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { deleteNote } from './state/actions';
import { formatDate } from './utilities/helpers';
function App(props) {
  
  let notesPerPage = 5;
  const numOfNotes = props.notes.length;
  let numOfPage = Math.ceil(numOfNotes/notesPerPage);
  let [currentPage, setCurrentPage] = useState(1);
  let [deletedID, setDeletedID] = useState(null);
  let pagesLink = [];

  for(let i = 0; i < numOfPage; i++){
    pagesLink[i] = i+1;
  }

  function getListClass(id=1){
    return +id === deletedID? "list-item" : '';
  }
 
  let currentNotes = props.notes.slice((currentPage-1)*notesPerPage,currentPage * notesPerPage);
  const handleDelete = (id)=>{
    const confirmDelete = window.confirm('Do you want to delete this note?');
    if(confirmDelete){
      setDeletedID(id);
      setTimeout(()=>{props.deleteNote({id});}, 1000)
    }
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
        {props.notes.length?
        <ul className=''>
          {currentNotes.map((note) => {
            return (
              <li className={`p-2 ml-1 ${getListClass(note.id)}`} key={note.id}>
                <div className="flex justify-between items-center mt-2 border p-2">
                  <h3 className='font-bold text-lg'>
                    <Link to={'notes/' + note.id}>{note.title}</Link> <br />
                    <span className='font-normal text-gray-500 text-sm'>
                      {formatDate(note)}
                    </span>
                  </h3>
                  <button className="p-2 mx-2 border border-red-400 rounded-md hover:bg-red-600 hover:text-white" onClick={() => handleDelete(note.id)}>Delete x</button>
                </div>
              </li>
            )
          })}
        </ul>
          :
          <div className='shadow-lg rounded-lg max-w-md m-auto p-8'>
            <span className="">
              <h3 className='text-2xl text-gray-600 font-bold text-center'>No Notes Yet</h3>
              <p className="my-5">
                Your Notes will be displayed here when you create them. <br />
              </p>
              <p className="">
                <Link 
                to='/add-note' 
                className='px-4 py-2 border-dotted border-2 border-green-300 hover:bg-green-600 hover:text-white rounded-2xl font-semibold'>
                  Create your first Note
                </Link>
              </p>
            </span>
          </div>
        }
      </div>
      <div className="p-2 bg-gray-200 w-full flex-wrap flex justify-around">
        {
          pagesLink.map(num=> <span key={num} onClick={()=>setCurrentPage(num)} className={`p-2 px-4 border border-blue-400 cursor-pointer ${num === currentPage? 'bg-green-400': ''}`}>{num}</span>)
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
