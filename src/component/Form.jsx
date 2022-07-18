import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"

function Form() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstname: '',
            middlename: '',
            lastname: '',
            age: '',
            district:'',
            state:''

        },
        onSubmit: async values => {
            try {
                await axios.post("https://formbackk.herokuapp.com/create-form", values)
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        },
    });
    return (
        <div className='row'>
            <div className='col-12 mx-auto'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='col-lg-4 mx-auto mb-2'>
                        <label>First Name</label>
                        <input type="text" className="form-control" name='firstname' placeholder='Enter your Firstname' required
                            onChange={formik.handleChange}
                            value={formik.values.firstname} />
                    </div>
                    <div className='col-lg-4 mx-auto mb-2'>
                        <label>Middle Name</label>
                        <input type="text" className="form-control" name='middlename' placeholder='Enter your Middlename' required
                            onChange={formik.handleChange}
                            value={formik.values.middlename} />
                    </div>
                    <div className='col-lg-4 mx-auto mb-2'>
                        <label>Last Name</label>
                        <input type="text" className="form-control" name='lastname' placeholder='Enter your Lastname' required
                            onChange={formik.handleChange}
                            value={formik.values.lastname} />
                    </div>

                    <div className='col-lg-4 mx-auto mb-2'>
                        <label>Age</label>
                        <input type="number" className="form-control" name='age' placeholder='Enter your age' required
                            onChange={formik.handleChange}
                            value={formik.values.age} />
                    </div>
                    <div className='col-lg-4 mx-auto mb-2'>
                        <label>State:</label>
                        <select  name="state" className='form-control' required id='state'  onChange={formik.handleChange} value={formik.values.state}>
                            <option >---select---</option>
                            <option >Tamilnadu</option>
                            <option>Maharasta</option>
                            <option >Karnataka</option>
                        </select>
                    </div>
                    <div className='col-lg-4 mx-auto mb-2'>
                        <label>Distic:</label>
                        <select  name="district" className='form-control' required id='district'  onChange={formik.handleChange} value={formik.values.district}>
                            <option >---select---</option>
                            <option >Dharmapuri</option>
                            <option >salam</option>
                            <option >coimbatore </option>
                        </select>
                    </div>
                    <div className='col-lg-4 mx-auto d-flex justify-content-between'>
                        <button className='btn btn-primary mt-3 col-lg-4' type='submit'>Submit</button>
                        <Link to="/">
                            <button className='btn btn-danger mt-3 ' >Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Form
