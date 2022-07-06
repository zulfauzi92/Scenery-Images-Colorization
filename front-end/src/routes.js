import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardUser from './pages/DashboardUser';
import About from './pages/About';
import AboutUser from './pages/AboutUser';
import AboutOwner from './pages/AboutOwner';
import MyBooking from './pages/MyBooking';
import PendingList from './pages/PendingList';
import ApprovedList from './pages/ApprovedList';
import DeclinedList from './pages/DeclinedList';
import DeclinedRoom from './pages/DeclinedRoom';
import ApprovedRoom from './pages/ApprovedRoom';
import RoomDetail from './pages/RoomDetail';
import RoomList from './pages/RoomList';
import RoomListUser from './pages/RoomListUser';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingApproval from './pages/BookingApproval';
import CreateNewOffice from './pages/CreateNewOffice';
import RoomListOwner from './pages/RoomListOwner';
import Invoice from './pages/Invoice';
import CobaDetail from './pages/CobaDetail';
import Coba from './pages/Coba';
import DetailOwner from './pages/OwnerDetail';

function routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/invoice' exact component={Invoice}/>
                <Route path='/user' exact component={DashboardUser}/>
                <Route path='/roomlistuser' component={RoomListUser}/>
                <Route path='/about' component={About}/>
                <Route path='/aboutuser' component={AboutUser}/>
                <Route path='/aboutowner' component={AboutOwner}/>
                <Route path='/mybooking' component={MyBooking}/>
                <Route path='/pendinglist' component={PendingList}/>
                <Route path='/approvedlist' component={ApprovedList}/>
                <Route path='/declinedlist' component={DeclinedList}/>
                <Route path='/ownerdetail' component={DetailOwner}/>
                <Route path='/roomdetail' component={RoomDetail}/>
                <Route path='/roomlist' component={RoomList}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route path='/bookingapprove' component={BookingApproval}/>
                <Route path='/approvedroom' component={ApprovedRoom}/>
                <Route path='/declinedroom' component={DeclinedRoom}/>
                <Route path='/createoffice' component={CreateNewOffice}/>
                <Route path='/ownersroom' component={RoomListOwner}/>
                <Route path='/sign-in' exact component={Login}/>
                <Route path='/sign-up' exact component={Register}/>
                <Route path='/coba' component={Coba}/>
                <Route path='/cobadetail:room_id' component={CobaDetail}/>
            </Switch>
        </Router>
    );
}

export default routes;