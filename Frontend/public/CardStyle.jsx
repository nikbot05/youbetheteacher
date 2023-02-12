import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Image, Divider, ButtonGroup, Button, Text, Progress, Flex, Spacer, Box } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export default function CardStyle({ headingText, buttonText, description, subtext, imgLink, altText, buttonColor, urlPath }) {

  return (

    <Card maxW='lg' size="md" >
      <CardBody>
        <Image
          src={imgLink}
          alt={altText}
          borderRadius='lg'
          htmlWidth="500"
          htmlHeight="500"
        />
        <Stack mt='6' spacing='5'>
          <Flex direction="column">
            <Box>
              <Heading size='md'>{headingText}</Heading>
              <Text>
                {description}
              </Text>
            </Box>
            <Spacer />
            
          </Flex>
          
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Link to={urlPath}>
            <Button variant='solid' colorScheme={buttonColor}>
              { buttonText }
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
    
  )
  
}