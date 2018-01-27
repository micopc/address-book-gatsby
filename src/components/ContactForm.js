import React from 'react'

import ContactInput from './ContactInput'

const ContactForm = ({
  firstName,
  lastName,
  phone,
  onChange,
  onBlur,
  onSubmit
}) => {
  return (
    <div>
      <h3>Nuevo Contacto</h3>
      <div className="form-group row">
        <div className="col col-3">
          <label htmlFor="firstName">Nombre</label>
        </div>
        <div className="col col-9">
          <ContactInput
            id="firstName"
            name="firstName"
            type="text"
            value={firstName.value}
            error={firstName.error}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col col-3">
          <label htmlFor="lastName">Apellido</label>
        </div>
        <div className="col col-9">
          <ContactInput
            id="lastName"
            name="lastName"
            type="text"
            value={lastName.value}
            error={lastName.error}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col col-3">
          <label htmlFor="phone">Teléfono</label>
        </div>
        <div className="col col-9">
          <ContactInput
            id="phone"
            name="phone"
            type="phone"
            value={phone.value}
            error={phone.error}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </div>
      <div className="form-group text-center">
        <button className="btn btn-primary" onClick={onSubmit}>
          Guardar
        </button>
      </div>
    </div>
  )
}

export default ContactForm
