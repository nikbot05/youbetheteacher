import React from 'react';

import { Textarea, VStack, Button } from '@chakra-ui/react';



export default function Input({ onChange, value, onClick, isLoading }) {
  

  return (

    <VStack spacing={8} align="left">

      <Textarea resize={'none'} placeholder={"Start typing..."} maxH={400} onChange={onChange} value={value} size='lg'/>
      <Button colorScheme='blue' size="lg" onClick={onClick} isLoading={isLoading}>Submit</Button>
    </VStack>
    
  )
  
}