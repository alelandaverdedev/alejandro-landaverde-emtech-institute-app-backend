const Student = require('../models/Students');
const {v4: uuidv4} = require("uuid");
const { Sequelize, col} = require('sequelize');

module.exports = {
    list: async (req, res) => {
        const students = await Student.findAll();

        if (students.length === 0) {
            return res
                .status(404)
                .json({ message: 'There are no students available at this time.' });
        }

        return res.status(200).json({ message: 'Available students', students });
    },
    student: async (req, res) => {
        const { studentId } = req.params;

        const student = await Student.findByPk(studentId);

        if (!student) {
            return res
                .status(404)
                .json({ message: 'The entered student does not exist.' });
        }

        return res.status(200).json({ message: 'Student', student: student });
    },
    create: async (req, res) => {
        try {
            let { identification_number } = uuidv4();
            const { name, last_name, email, current_course, percentage_progress_course, status } = req.body;

            const newStudent = await Student.create({
                name,
                last_name,
                identification_number,
                email,
                current_course,
                percentage_progress_course,
                status
            });

            return res.status(201).json({ message: 'Student created successfully', student: newStudent });
        } catch (error) {
            return res.status(500).json({
                message: 'Error creating student',
                error: error.message,
            });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            const updateData = req.body;

            const student = await Student.findByPk(id);
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }

            let isModified = false;
            for (const key in updateData) {
                if (updateData[key] !== undefined && key in student) {
                    student[key] = updateData[key];
                    isModified = true;
                }
            }

            if (isModified) {
                await student.save();
                return res.status(200).json({ message: 'Successfully updated student', student });
            } else {
                return res.status(400).json({ message: 'No valid fields provided for update' });
            }
        } catch (error) {
            return res.status(500).json({
                message: 'Error updating student',
                error: error.message,
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            const student = await Student.findByPk(id);
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }

            await student.destroy();

            return res.status(200).json({ message: 'Student deleted successfully' });
        } catch (error) {
            return res.status(500).json({
                message: 'Error deleting student',
                error: error.message,
            });
        }
    },
    listCoursesWithStudentCounts : async (req, res) => {
        try {
            const coursesWithCounts = await Student.findAll({
                attributes: [
                    'current_course',
                    [Sequelize.fn('COUNT', col('current_course')), 'student_count']
                ],
                group: ['current_course'],
                where: {
                    status: 1,
                }
            });

            return res.status(200).json(coursesWithCounts);
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener la lista de cursos', error });
        }
    },
    getCoursesWithProgress : async (req, res) => {
        try {
            const courseProgress = await Student.findAll({
                attributes: [
                    'current_course',
                    [Sequelize.fn('COUNT', Sequelize.col('id')), 'student_count'],
                    [Sequelize.fn('AVG', Sequelize.col('percentage_progress_course')), 'average_progress']
                ],
                where: {
                    status: 1 // Estudiantes activos
                },
                group: 'current_course',
                raw: true
            });

            courseProgress.forEach(course => {
                course.average_progress = parseFloat(course.average_progress).toFixed(2);
            });

            return res.status(200).json(courseProgress);
        } catch (error) {
            return res.status(500).json({ message: 'Error al obtener la lista de cursos', error: error.message });
        }
    }

};