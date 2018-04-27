import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [{ firstName: '', lastName: ''}],
      newName: '',
      newLastName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ newName: event.target.value })
    // alert(this.state.newTask)
  }

  handleLastName(event) {
    this.setState({ newLastName: event.target.value })
    // alert(this.state.newTask)
  }

  handleSubmit(event) {
      this.setState({
        names: this.state.names.concat({ firstName: this.state.newName, lastName: this.state.newLastName }),
        newName: '',
        newLastName: ''
      });

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.newName} onChange={this.handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.newLastName} onChange={this.handleLastName} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.names.map((name, i) =>
                  (name.firstName !== '' || name.lastName !== '') &&
                    <tr key={i}>
                      <td>{name.firstName}</td>
                      <td>{name.lastName}</td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
