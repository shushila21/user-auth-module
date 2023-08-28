import { useLocation } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
import { initDomToCode } from 'dom-to-code';
import { ToastContainer } from 'react-toastify';
import { useTypedDispatch, useTypedSelector } from '@Store/hooks';
import generateRoutes from '@Routes/generateRoutes';
import appRoutes from '@Routes/appRoutes';
import testRoutes from '@Routes/testRoutes';
// import { getPalikaProfile } from '@Services/common';
import {
  // setCommonState,
  setModalContent,
  setPromptDialogContent,
  toggleModal,
  togglePromptDialog,
} from '@Store/actions/common';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@Components/common/Modal';
import PromptDialog from '@Components/common/PromptDialog';
import {
  getModalContent,
  getPromptDialogContent,
} from '@Constants/modalContents';

export default function App() {
  const { pathname } = useLocation();
  const dispatch = useTypedDispatch();
  const showModal = useTypedSelector(state => state.common.showModal);
  const modalContent = useTypedSelector(state => state.common.modalContent);
  const showPromptDialog = useTypedSelector(
    state => state.common.showPromptDialog,
  );
  const promptDialogContent = useTypedSelector(
    state => state.common.promptDialogContent,
  );

  const routesWithoutSidebar = [
    '/login',
    '/sign-up',
    '/forgot-passowrd',
    '/public-page',
  ];

  const hideSideBar = routesWithoutSidebar.some(url => pathname.includes(url));

  // fetch palika profile and store in common store
  // useQuery({
  //   queryKey: ['palika-profile'],
  //   queryFn: getPalikaProfile,
  //   onSuccess: res => {
  //     dispatch(
  //       setCommonState({
  //         palikaProfile: res.data,
  //       }),
  //     );
  //   },
  // });

  const handleModalClose = () => {
    dispatch(toggleModal());
    setTimeout(() => {
      dispatch(setModalContent(null));
    }, 150);
  };

  const handlePromptDialogClose = () => {
    dispatch(togglePromptDialog());
    setTimeout(() => {
      dispatch(setPromptDialogContent(null));
    }, 150);
  };

  return (
    <>
      {process.env.NODE_ENV !== 'production' &&
        !process.env.DISABLE_DOM_TO_CODE &&
        initDomToCode()}
      <div
        className={`${
          hideSideBar
            ? 'naxatw-ml-0'
            : `naxatw-ml-0 naxatw-flex md:naxatw-ml-[80px]`
        }`}
      >
        <ToastContainer />

        <Modal
          show={showModal}
          className={getModalContent(modalContent)?.className || ''}
          // headerContent={getHeaderContent(modalContent)}
          title={getModalContent(modalContent)?.title}
          // subtitle={getModalContent(modalContent)?.subtitle}
          onClose={handleModalClose}
          hideCloseButton={!!getModalContent(modalContent)?.hideCloseButton}
        >
          {getModalContent(modalContent)?.content}
        </Modal>

        <PromptDialog
          show={showPromptDialog}
          title={getPromptDialogContent(promptDialogContent)?.title}
          onClose={handlePromptDialogClose}
        >
          {getPromptDialogContent(promptDialogContent)?.content}
        </PromptDialog>

        {process.env.NODE_ENV !== 'production'
          ? generateRoutes({ routes: [...testRoutes, ...appRoutes] })
          : generateRoutes({ routes: appRoutes })}
      </div>
    </>
  );
}
