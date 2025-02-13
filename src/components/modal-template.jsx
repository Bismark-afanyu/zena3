import { Modal, Box } from '@mui/material';
import Image from 'next/image';
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io';

const ReusableModal = ({ showModal, setShowModal, onClose, onRestart, onContinue, children }) => {
  return (
    <Modal
      open={showModal}
    >
      <div className=" text-gray-600 box bg-red-600 z-[4000]">
        <Box
          className="box-container z-[3000]"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            overflow: 'auto',
            // p: 4,
            paddingX: 3,
            paddingY: 2,
            zIndex: 3000
            // '& .box-container': {
            //   width: '80%'
            // },
          }}
        >
          <div className='flex flex-col gap-[20px] z-[3000]'>
            <div className="flex items-center justify-end">
              <IoMdClose
                size={24}
                onClick={() => setShowModal(false)}
                className="cursor-pointer"
              />
            </div>
            {children}
          </div>
        </Box>
      </div>
    </Modal>
  );
}

export default ReusableModal;