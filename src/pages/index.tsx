import { Flex, Text, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail Obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha Obrigatória')
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(values);
  }

  return (
    <Flex 
      w='100vw' 
      h='100vh' 
      alignItems="center" 
      justifyContent="center"
    >
      <Flex as="form" 
        w="100%" 
        maxWidth={360} 
        bg="gray.800" 
        p="8" 
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing='4'>
            <Text fontSize='3xl' textAlign="center">Login DASHGO</Text>  
            <Input 
              name="email" 
              label="E-mail"
              error={errors.email} 
              type="email"
              {...register('email')}
            />
            
            <Input 
              name="password" 
              label="Senha"
              error={errors.password}  
              type="password"
              {...register('password')}
            />
          </Stack>
          
          <Button 
            type="submit" 
            mt="12" 
            colorScheme="pink"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
      </Flex>
    </Flex>
  )
}
