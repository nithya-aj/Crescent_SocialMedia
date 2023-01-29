import * as React from 'react';
import Box from '@mui/material/Box';
import User from './User';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllUser } from '../../api/UserRequest';

export default function Users() {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [persons, setPersons] = useState([])
  // console.log(length,'length of persons');

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser()
      setPersons(data)
      console.log(data, 'data from users.jsx in friends page');
    }
    fetchPersons()
  }, [])

  return (
    <Box p={2}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
    
        {persons.map((person, id) => {
          if (person._id !== user._id) {
            return <User key={id} person={person} />
          }
        })}

      </Box>
    </Box>
  );
}
