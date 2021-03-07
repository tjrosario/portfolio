
import ReactPlayer from 'react-player';
import { BASE_PATH } from '../constants';
import {
  AspectRatio,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from './shared';

export default function WorkModal({ isOpen, onClose, work }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={'5xl'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{work.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <AspectRatio ratio={2}>
            <ReactPlayer
              controls
              url={`${BASE_PATH}/${work.src}`}
              height={'100%'}
              width={'100%'}
            />
          </AspectRatio>
          <Text mt={5}>{work.description}</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme={'blue'}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
