import React, { useState } from "react";

const genders = [
  {
    id: 1,
    name: "Male"
  },
  {
    id: 2,
    name: "Female"
  }
];

const Form = () => {
  let [valueE, setEmail] = useState('');
  let [valueP, setPassword] = useState('');
  const [incorrect, check] = useState('');
  let classNameA = 'input';
  let classNameB = 'input';

  const onInputChangeE = (event) => {
    setEmail(event.target.value);
  }

  const onInputChangeP = (event) => {
    setPassword(event.target.value);
  }

  const whatIncorrect = (valueP, valueE) => {
    if (valueP.length < 6 && valueE.match(/^...+@..+\...+$/) == null) {
      return 'emailandpassword';
    } else if (valueE.match(/^...+@..+\...+$/) == null) {
      return 'email';
    } else if (valueP.length < 6) {
      return 'password';
    } else {
      return 'good';
    }
  }

  const validation = (valueP, valueE) => {
    check(whatIncorrect(valueP, valueE));
  }

  if (incorrect === 'emailandpassword') {
    classNameA += ' red';
    classNameB += ' red';
  } else if (incorrect === 'password') {
    classNameA += ' red';
  } else if (incorrect === 'email') {
    classNameB += ' red';
  } 

  return (
    <div className='box'>
      {
        incorrect === 'emailandpassword' ? (<p className='incorrect'>Incorrect email and password!</p>) :
          incorrect === 'email' ? <p className='incorrect'>Incorrect email!</p> :
            incorrect === 'password' ? <p className='incorrect'>Incorrect password!</p> :
              incorrect === 'good' ? <p className='success'>Success!</p> : null
      }
      <p>Email</p>
      <input className={classNameB} type='email' placeholder='example: aaa@aaa.aa' value={valueE} onChange={(event) => { onInputChangeE(event) }} />
      <br />
      <p>Password</p>
      <input className={classNameA} type='password' placeholder='min 6' value={valueP} onChange={(event) => { onInputChangeP(event) }} />
      <br />
      <p>Gender</p>
      <select className='select_gender'>
        {
          genders.map(el => {
            return (<option key={el.id}>{el.name}</option>);
          })
        }
      </select>
      <br />
      <button className='button' onClick={() => validation(valueP, valueE)}>REGISTER</button>
    </div>
  );
};

export { Form };
