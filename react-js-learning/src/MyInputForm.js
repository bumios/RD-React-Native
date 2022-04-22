

const MyInputForm = (props) => {
    return (
        <form className="form-container">
        <input type="text" placeholder="Your name" onChange={ event => props.setName(event.target.value) } value={ props.inputedName } />
        <input type="text" placeholder="Your age" onChange={ event => props.setAge(event.target.value) } value={ props.inputedAge } />
        { props.editingId == null ? <button type="button" className="primary-button" onClick={ props.handleAddNew }>Add</button> : <button type="button" className="primary-button" onClick={ props.handleUpdate }>Update</button>}
      </form>
    );
}

export default MyInputForm;