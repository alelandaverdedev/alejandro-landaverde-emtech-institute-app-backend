const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Students = sequelize.define('Students', {
    name: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z\s]*$/,
                msg: 'El nombre solo puede contener letras y espacios',
            },
            len: {
                args: [1, 150],
                msg: "El nombre debe tener entre 1 y 150 caracteres"
            }
        }
    },
    last_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z\s]*$/,
                msg: 'El apellido solo puede contener letras y espacios',
            },
            len: {
                args: [1, 150],
                msg: "El apellido debe tener entre 1 y 150 caracteres"
            }
        }
    },
    identification_number: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Genera automáticamente un UUID v4.
        allowNull: false,
        validate: {
            isUUID: {
                args: 4,
                msg: 'El número de identificación debe ser un UUID v4 válido',
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Debe ser un correo electrónico válido'
            }
        }
    },
    current_course: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'El curso actual no puede estar vacío'
            }
        }
    },
    percentage_progress_course: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: 'El porcentaje de progreso debe ser un número entero'
            },
            min: {
                args: [0],
                msg: 'El porcentaje de progreso no puede ser menor que 0'
            },
            max: {
                args: [100],
                msg: 'El porcentaje de progreso no puede ser mayor que 100'
            }
        }
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0,
        validate: {
            isInt: {
                msg: 'El status de progreso debe ser un número entero'
            }
        }
    }
}, {
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'students',
});


module.exports = Students;