import React from 'react'

const ContactForm = ({ firstName, lastName, phone }) => {
  return (
    <div>
      <h3>Nuevo Contacto</h3>
      <div className="form-group row">
        <div className="col col-3">
          <label htmlFor="firstName">Nombre</label>
        </div>
        <div className="col col-9">
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col col-3">
          <label htmlFor="lastName">Apellido</label>
        </div>
        <div className="col col-9">
          <input id="lastName" name="lastName" type="text" value={lastName} />
        </div>
      </div>
      <div className="form-group row">
        <div className="col col-3">
          <label htmlFor="phone">Teléfono</label>
        </div>
        <div className="col col-9">
          <input id="phone" name="phone" type="text" value={phone} />
        </div>
      </div>
      <div className="form-group text-center">
        <button className="btn btn-primary">Guardar</button>
      </div>
    </div>
  )
}

export default ContactForm
