import {useContext} from 'react'
import "./Profile.css"
import Context from '../../context/Context'

function Profile() {

    const usrdata = useContext(Context);

  return (
    <div>
        
        <div className="container">
    <div className="main-body">
    
    
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={usrdata.currentuser.avatar} alt="Admin" className="rounded-circle" width="150"/>
                    <div className="mt-3">
                      <h4>{usrdata.currentuser.first_name} {usrdata.currentuser.last_name}</h4>
                      <p className="text-secondary mb-1">{usrdata.currentuser.email}</p>
                      <button className="btn btn-primary">E d i t</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {usrdata.currentuser.first_name} {usrdata.currentuser.last_name}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {usrdata.currentuser.email}
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
    </div>


    </div>
  )
}

export default Profile