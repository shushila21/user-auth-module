export {};
// import { useEffect, useState } from 'react';
// import { Button, ButtonProps } from '@Components/RadixComponents/Button';
// import Icon from '@Components/RadixComponents/Icon';
// import { IFormState } from '@Schemas/interfaces';
// import Spinner from '@Components/common/Spinner';
//
// interface ISubmitButtonProps extends ButtonProps, IFormState {
//   disableTillValid?: boolean;
//   onSuccess?: () => any;
// }
//
// export default function SubmitButton({
//   children,
//   error,
//   isError,
//   isSubmitting,
//   isSuccess,
//   onSuccess,
//   ...props
// }: ISubmitButtonProps) {
//   const [tickIsVisible, setTickIsVisible] = useState(false);
//   useEffect(() => {
//     let timeoutInstance: any;
//     if (isSuccess) {
//       setTickIsVisible(true);
//       if (onSuccess) onSuccess();
//       timeoutInstance = setTimeout(() => {
//         setTickIsVisible(false);
//       }, 3000);
//     }
//
//     return () => clearTimeout(timeoutInstance);
//   }, [isSuccess, onSuccess]);
//
//   return (
//     <div className="naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-gap-3 ">
//       <Button
//         {...props}
//         type="submit"
//         className="naxatw-flex naxatw-overflow-hidden naxatw-w-full naxatw-px-4 naxatw-transition-all naxatw-duration-500 naxatw-ease-in-out"
//       >
//         {tickIsVisible ? 'Success' : children}&nbsp;
//         {isSubmitting ? (
//           <Spinner className="naxatw-fill-primary-700" />
//         ) : (
//           'Sign In'
//         )}
//         {tickIsVisible ? <Icon name="check" /> : null}
//       </Button>
//     </div>
//   );
// }
