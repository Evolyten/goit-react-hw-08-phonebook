import { createStandaloneToast } from '@chakra-ui/react';
const { toast } = createStandaloneToast();

export function ToastSuccess() {
  return toast({
    title: 'Account created.',
    description: "We've created your account for you.",
    status: 'success',
    duration: 3000,
    isClosable: true,
  });
}

export function ToastFailed() {
  return toast({
    title: 'Something going wrong...',
    description: `Incorrect Login or password. Pls try one more time`,
    status: 'error',
    duration: 3000,
    isClosable: true,
  });
}

export function ToastFailedRegistration() {
  return toast({
    title: 'Something going wrong...',
    description: `Pls try one more time`,
    status: 'error',
    duration: 3000,
    isClosable: true,
  });
}
