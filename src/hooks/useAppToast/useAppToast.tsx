import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
  VStack,
} from '@gluestack-ui/themed';
import { InterfaceToastProps } from './types';

type toastParam = string | InterfaceToastProps;

const useAppToast = () => {
  const toast = useToast();

  const toastError = (param: toastParam) => {
    if (typeof param === 'string') {
      toast.show({
        placement: 'top',
        render: ({ id }) => {
          const toastId = 'toast-' + id;
          return (
            <Toast nativeID={toastId} action="error" variant="solid">
              <VStack>
                <ToastTitle>Error</ToastTitle>
                <ToastDescription>{param}</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    } else toast.show(param);
  };

  return { toastError };
};

export default useAppToast;
