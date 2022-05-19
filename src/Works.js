import { Link, Outlet } from 'react-router-dom';

const Works = () => {
  return (
    <div>
      <p>
        ### Au fil des années, nous avons pu accompagner les meilleurs.

        Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
      </p>
      <nav className='works'>
        <ul> 
          <li><Link to="/works/platon">Platon</Link></li>
          <li><Link to="/works/Solane">Solane</Link></li>
          <li><Link to="/works/Sedal">Sedal</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>

  );
}
 
export default Works;