import {useState} from 'react';
const Navigation = () => {
  const [options , setOptions] = useState([
    { id: 0, name: 'Home' },
    { id: 1, name: 'Hot Deals'},
    { id: 2, name: 'Categories' },
    { id: 3, name: 'Laptops' },
    { id: 4, name: 'Smartphones' },
    { id: 5, name: 'Cameras' },
    { id: 6, name: 'Accessories' }
  ]);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <nav id="navigation">
      <div className="container">
        <div id="responsive-nav">
          <ul className="main-nav nav navbar-nav">
            {options.map((option) => (
              <li key={option.id} className={activeCategory === option.id ? 'active' : ''}>
                <a href="#" onClick={() => setActiveCategory(option.id)}>{option.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;