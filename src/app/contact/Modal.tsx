import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you for your message!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
I have received your message and will get back to you as soon as possible. Thank you for reaching out! - Marissa 
          </Typography>
        </Box>
      </Modal>
  );
}

