const App = () => {
    return (
      <>
     <div className="logo">
      <img src="logo.png" alt="Logo" />
      </div>
      <nav className="navbar">
          <ul>
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>Product</li>
            <li><a href="#"></a>Company</li>
            <li><a href="#"></a>Contact</li>
          </ul>
      </nav>
      <div className="header">Header image</div>
     <div className="cards">
         <div className="card">
            <h2>About</h2><br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse enim quisquam temporibus quasi id commodi libero fuga deserunt perferendis rerum adipisci quam, tempore asperiores. Explicabo in unde quibusdam delectus vitae?</p>
         </div>
         <div className="card">
            <h2>Company</h2><br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse enim quisquam temporibus quasi id commodi libero fuga deserunt perferendis rerum adipisci quam, tempore asperiores. Explicabo in unde quibusdam delectus vitae?</p>
         </div>
         <div className="card">
            <h2>Services</h2><br />
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse enim quisquam temporibus quasi id commodi libero fuga deserunt perferendis rerum adipisci quam, tempore asperiores. Explicabo in unde quibusdam delectus vitae?</p>
         </div>
      </div>
        <div className="container">
           <div className="text-block">
               <h3>Content</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic ipsam pariatur atque cum, porro, fugiat incidunt inventore voluptates vitae maxime nam laborum.</p><br/>
              <h5>Sub header</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi soluta illo ipsa, amet rerum deserunt aut quibusdam accusamus inventore laboriosam quae similique nostrum odit corrupti eligendi delectus maxime hic.</p>
           <div className="navigation-box">
              <h4>Navigation</h4>
              <div className="navigation-menu">
                 <ul>
                    <li>Home</li><br />
                     <li>Product</li><br />
                     <li>Company</li><br />
                    <li>Contact</li><br />
                 </ul>
               </div>
           </div>
         </div>
      </div>
      </>
    );
  };

  ReactDOM.createRoot(document.getElementById('app')).render(<App />);