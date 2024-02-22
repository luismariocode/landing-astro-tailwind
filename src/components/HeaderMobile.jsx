import React ,  {useState} from 'react';


const HeaderMobile = () => { 

    const [menuOpen, setMenuOpen] = useState(false);

    const buttonStyle = {
        backgroundColor: '#4f4f4f',
        border: 'none',
        borderRadius: '50%',
        padding: '1rem',
        margin: '0 , 0.5rem',
        maxHeigth: '100%',
    }
    	
    const itemListStyle = {
        listStyle: 'none',
        padding: '1rem 0',
        width: '100%',
        fontWeight: '400',
        letterSpacing: '.1rem',
        borderBottom: '1px solid gray',

        transition: 'background-color 0.3s ease', // Agregar una transición suave para el cambio de color de fondo
    

        ':active': {
            backgroundColor: 'lightgray', // Puedes ajustar el color como desees
        }
     
    }

    const effectGlassStyle = {
        background: 'rgba( 0, 0, 0, 0.95 )',
        // boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropfilter: 'blur( 5.5px )',
        webkitBackdropFilter: 'blur( 5.5px )',
        // borderRadius: '2px',
        // border: '1px solid rgba( 255, 255, 255, 0.18 )'
    }

    const toggleMenu = () => {
        console.log('click');       
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='sm:hidden fixed top-0 z-40 m-0 my-5'>
           

            <div className='w-screen h-auto top-full left-0 right-0 bg-cod-gray-900'>
                <button style={buttonStyle} className='z-50 absolute right-3 top-2' onClick={toggleMenu}>
                {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
                <nav  className={`p-5 my-12 text-white  ${menuOpen ? '' : 'hidden'}`}>
                    <ul style={effectGlassStyle} className='p-5'>
                        <li>
                            <div>Notaria 1</div>
                        </li>
                        <li style={itemListStyle} >
                            <a href="#home" onClick={toggleMenu}>Inicio</a >
                        </li>
                        <li style={itemListStyle}>
                            <a href="#servicios" onClick={toggleMenu}>Servicios</a>
                        </li>
                        <li style={itemListStyle}>
                            <a href="#" onClick={toggleMenu}>Historia</a>
                        </li>
                        <li style={itemListStyle}>
                            <a href="#" onClick={toggleMenu}>Profesionistas</a>
                        </li>
                        <li style={itemListStyle}>
                            <a href="#" onClick={toggleMenu}>Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )


}

export default HeaderMobile;     