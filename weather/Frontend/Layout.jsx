import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li> <Link to="/Weather">Weather</Link></li>
          <li><Link to="/Profile">Profile</Link></li>


        </ul>
      </nav>
      <Outlet />
    </>
  );
}
// import React from 'react';
// import { Outlet, Link } from 'react-router-dom';
//  import './App.css'; // make sure this matches your CSS file name/path

// export default function Layout() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/register">Register</Link></li>
//           <li><Link to="/Weather">Weather</Link></li>
//           <li><Link to="/Profile">Profile</Link></li>
//         </ul>
//       </nav>

//       <div style={{ textAlign: 'center', marginTop: '30px' }}>
//         <h2 style={{ color: '#87cefa' }}>Welcome to Weather Info ⛅</h2>
//         <p style={{ color: '#ffcc70', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
//           Get real-time weather updates using your city or location. Stay informed, stay safe, and explore the skies with us! 🌤️
//         </p>
//       </div>

//       <Outlet />
//     </>
//   );
// }
