import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from '../components/Particle';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState, useEffect } from 'react';
import { ToggleButton } from 'react-bootstrap';

function NavBar() {
  // const initialStateValue =  ()=>{   window.localStorage.setItem('radioValue', radioValue)};
  const initialStateValue = () => window.localStorage.getItem('radioValue') || '1';
  const initialParticleState = () => window.localStorage.getItem('particleEnable') || true;
  const initialParticleState2 = () => window.localStorage.getItem('particleEnable2') || "block";

  const [radioValue, setRadioValue] = useState(initialStateValue);

  const [showElement, setShowElement] = useState(initialParticleState);
  const [showElement2, setShowElement2] = useState(initialParticleState2);

  const radios = [
    { name: 'Enable', value: '1' },
    { name: 'Disable', value: '2' }
  ];

  useEffect(() => {
    window.localStorage.setItem('radioValue', radioValue);
    window.localStorage.setItem('particleEnable', showElement);
    window.localStorage.setItem('particleEnable2', showElement2);
    
  }, [radioValue, showElement, showElement2]);


  const toggleMode = () => {
    if (radioValue === '2') {
      
      setShowElement(true);
      setShowElement2("block");
    } else {
      setShowElement(false);
      setShowElement2("none");
    }

  };
  const toggleColor =()=>{
    if(radioValue === '2'){
      return 'outline-danger';
    }
    else if(radioValue === '1'){
      return 'outline-success';
    }
  }



  return (
    <>

      <Navbar bg="dark" variant="dark" className='nav-bar'>
        <Container>
          <Navbar.Brand>
            Cookie Clicker
          </Navbar.Brand>
          <Navbar.Brand>
            Particles: &nbsp;
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => {
                    setRadioValue(e.currentTarget.value);

                    toggleMode();
                  }}
                >

                  {radio.name}

                </ToggleButton>
              ))}
            </ButtonGroup>

          </Navbar.Brand>
        </Container>
      </Navbar>
      <span>
        {showElement && (
          <span style={{ display: showElement2}}><Particle></Particle></span>
        )}
      </span>

    </>
  );
}

export default NavBar;