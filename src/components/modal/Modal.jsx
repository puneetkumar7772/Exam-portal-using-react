import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#2E374A",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  handleClose,
  formData,
  updateCategory,
  handleUpdatdata
}) {
  console.log("!!!!!", formData.id);
  console.log("7777777",formData.category)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ borderRadius: "15px", border: "none" }}>
          <form>
            <lable style={{ color: "#fff" }}>Category</lable>

            <input
              type="text"
              placeholder="Enter Category Name"
              name="category"
              value={formData.category}
              onChange={handleUpdatdata}
            />
            <lable style={{ color: "#fff" }}>Description</lable>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleUpdatdata}
              required
            ></textarea>
            <Button
              style={{ borderRadius: "10px" }}
              variant="contained"
              onClick={()=>updateCategory(formData.id)}
            >
              Update Category
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
