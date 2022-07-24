import { useState } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../state/actions'
import './added-note.scss';

function About(props){
    let [addedCount, setAddedCount] = useState(0);
    let [addedNote, setAddedNote] = useState(false);
    
    // console.log('length of notes: ', props.notes.length);
    const handleAddNote = ()=>{
        props.addNote({
                id: 3,
                title: 'Keep it real',
                note: "Don't pretend to be who you are not just to impress people around you. At the end, you will only prove one point, and that is \"Your real self is too insignificant that you are so ashamed to identify with it\".",
                tags: 'be real, no pretense, original'
        });
        setAddedNote(true);
        setAddedCount((count)=>count + 1)
        setTimeout(() => {
            setAddedNote(false);
        }, 1800);
    }
    return(
        <section className='max-w-3xl m-auto shadow-xl text-xl'>
            <h1 className='text-center my-6 font-black underline underline-offset-4 decoration-green-400/50'>
                <span className="text-green-800">About</span>  NOTE IT
            </h1>
            <p className='p-2 mb-6 leading-8'>
                This app is for recording notes as they come to you so that you don't lose out on important thoughts and moments.
            </p>
            <p className='p-2 mb-6 leading-8'>
                Maybe you are like me who will often want to captures ideas as quickly as they come without losing out on them because they may never return (exactly as they came earlier).
            </p>
            <p className='p-2 mb-6 leading-8'>
                If you have ever felt like Note taking should be as simple or close to as simple as just writing on a paper without the clusters of so many interfaces, then this app is for you.
            </p>
            <p className='p-2 mb-6 leading-8'>
                It is simple, intuitive, and does just one thing: Take NOTE!
            </p>
            <p>
                
            </p>
            <p className="p-2 mb-6 mt-12 leading-8 relative border-2 border-green-800 rounded-xl w-[94%] m-auto">
                <span className="p-3 font-bold block text-center absolute w-full -top-8">
                    <span className='py-2 px-4 border-2 border-green-800 rounded-xl bg-white'>Quick Try</span> 
                </span>
                <span className='p-8 md:p-12 inline-block'>
                    If you just want to check out the app to see how it works without having to fill out the form several times, don't worry. I thought about that and created the button below for you. <br /><br />
                    Just click the button as many times as you want and that many notes will be added for you (NOTE: <span className='italic'>The same note will be added for those many times. Also note that for now, your notes are saved in your browser and will be lost if you clear browser storage.</span>).
                </span>
                <span className="p-4 flex justify-center relative w-full">
                    <button onClick={handleAddNote} className="py-2 px-4 text-bold border-2 border-green-500">Add Note(s)</button>
                    
                    {addedNote &&
                        <span id='added-btn' className="absolute text-white bg-black p-2 right-0">{addedCount} notes added</span>
                    }
                </span>
            </p>
            <p className='p-2 mb-6 mt-12 bg-gray-300'>
                This app was designed and developed by <span className='font-bold border-b-2 border-blue-400'>Chizoba Ugwuoke</span>  (A full-stack developer) and a passionate lover of technology. <span className='italic'>(Stack used HTML, SCSS, React JS)</span>
            </p>
        </section>
    )
}
function mapStateToProps(state){
    return {notes: state};
  }

const mapDispatchToProps = {
    addNote
}

export default connect(mapStateToProps, mapDispatchToProps)(About);