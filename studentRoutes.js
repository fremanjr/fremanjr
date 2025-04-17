import express from 'express';
import {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent
} from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getOneStudent);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
