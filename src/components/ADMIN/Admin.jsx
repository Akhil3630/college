import React from 'react';
import './Admin.css'
import { Outlet,Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
const Admin = () => {
    return (
        <div className='admin'>
            <div className="admin-sidebar bg-danger">
                <h3 className='text-light mt-4 text-center'>EMERGENCY NOW</h3>
                <div className="contents">
                    <Link to="/admin/user" className='btn bg-danger text-light  mt-5'>User</Link><br />
                    <Link to="/admin/service" className='btn bg-danger text-light mt-1'>Service</Link><br />
                    <Link to="/admin/mail" className='btn bg-danger text-light mt-1'>Mails</Link><br />
                    <Link to="/admin/trash" className='btn bg-danger text-light mt-1'>Trash</Link><br />
                    <Link to="/admin/password" className='btn bg-danger text-light mt-1'>Password</Link><br />
                    <Link to="/" className='btn bg-danger text-light mt-1'>Logout</Link><br />
                </div>
            </div>
            <div className="admin-page"> 
                <div className="admin-topbar">
                    <div className="admin-topbar-divs">
                        <Icon className='text-danger admin-topbar-icons' icon="bxs:user" />
                    </div>
                    <div className="admin-topbar-divs">
                        <Icon className='text-danger admin-topbar-icons' icon="fa6-solid:screwdriver-wrench" />
                    </div>
                    <div className="admin-topbar-divs">

                    </div>
                </div>
                <div className="outlet">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Admin;
