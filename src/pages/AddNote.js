export default function AddNote(props){
        
    return(
        <div>
            <h2 className="text-center text-white bg-green-500">Add New Note</h2>
            <form className="p-4" >
                <div className="flex">
                    <label htmlFor="title" className="min-w-[5rem] text-right pr-2">Note Title</label>
                    <input type="text" onChange={props.handleChange} value={props.note.title} name="title" id="" /> <br />
                </div>

                <div className="flex">
                    <label htmlFor="note" className="min-w-[5rem] text-right pr-2">Note</label>
                    <textarea onChange={props.handleChange} value={props.note.note} name="note" id="" cols="30" rows="10" className="my-1"></textarea>
                </div>
                <div className="flex">
                    <label htmlFor="tags" className="min-w-[5rem] text-right pr-2">Tags</label>
                    <input type="text" onChange={props.handleChange} value={props.note.tags} name="tags" id="" /> <br />
                </div>
                
                <input type="submit" value="Add Note" onClick={props.handleSubmit} className="p-2 border-2 border-green-600 block m-auto" />
            </form>
        </div>
    )
}