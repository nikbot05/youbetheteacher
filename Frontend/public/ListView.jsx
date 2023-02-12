import React from 'react';

import { Card, CardHeader, CardBody, CardFooter, Heading, Box, Stack, StackDivider, Text } from '@chakra-ui/react';

export default function ListView({ title, tasks, courseName }) {

  const taskItems = tasks.map((task) =>
    <Box>
      <Heading size='s' textTransform='uppercase'>
        {task.title}
      </Heading>
      <Text pt='2' fontSize='md'>
        {task.description}
      </Text>
    </Box>
  )

  return (

    <Card>
      <CardHeader>
        <Heading size='lg'>{title}</Heading>
      </CardHeader>
    
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {taskItems}
        </Stack>
      </CardBody>
    </Card>
    
  )
  
}