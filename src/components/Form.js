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
  const [valueE, setEmail] = useState('');
  const [valueP, setPassword] = useState('');
  const [allGood, good] = useState(true);

  const onInputChangeE = (event) => {
    setEmail(event.target.value);
  }

  const onInputChangeP = (event) => {
    setPassword(event.target.value);
  }

  const validation = (valueP, valueE) => {
    if (valueP.length < 6 || valueE.match(/^...+@..+\...+$/) == null) {
      good(false);
    } else {
      good(true);
    }
  }

  return (
    <div className='box'>
      {
        allGood ? null : (<p className='incorrect'>Incorrect email or password!</p>)
      }
      <p>Email</p>
      <input className='input' type='email' placeholder='example: aaa@aaa.aa' value={valueE} onChange={(event) => onInputChangeE(event)} />
      <br />
      <p>Password</p>
      <input className='input' type='password' placeholder='min 6' value={valueP} onChange={(event) => onInputChangeP(event)} />
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
