import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { LoaderComponent, LoaderProps } from "./LoaderComponent";
import { SuccessComponent } from "./SuccessComponent";
import {
  ECollectionProgress,
  ProgressStatus,
} from "views/CreateCollection/CreateCollection.state";
import { ErrorComponent } from "./ErrorComponent";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes";

export interface Props extends LoaderProps {
  isOpen: boolean;
  status: ProgressStatus;
  onClose: () => void;
  updateProgress: (payload: ECollectionProgress | null) => Promise<void>;
  collectionId?: string;
}

export const Progress: FC<Props> = ({
  isOpen,
  status,
  title,
  noteIcon,
  noteText,
  subtitle,
  updateProgress,
  collectionId,
}) => {
  const navigate = useNavigate();

  const getComponent = () => {
    switch (status) {
      case ProgressStatus.Success:
        return (
          <SuccessComponent
            {...{
              title,
              noteIcon,
              noteText,
              subtitle,
            }}
          />
        );
      case ProgressStatus.Error:
      case ProgressStatus.ErrorRetry:
        return (
          <ErrorComponent
            {...{
              title,
              noteIcon,
              noteText,
              subtitle,
              status,
              updateProgress,
              collectionId,
            }}
          />
        );
      default:
        return <LoaderComponent {...{ title, noteIcon, noteText, subtitle }} />;
    }
  };

  const onCloseLocal = useCallback(() => {
    navigate(ROUTES.home());
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseLocal}
      size={"lg"}
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        {status !== ProgressStatus.Default && <ModalCloseButton />}
        <ModalBody py={6} display="flex" flexDirection="column">
          {getComponent()}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
