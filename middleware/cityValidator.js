const { body, validationResult } = require('express-validator');

// Validation rules
exports.validateCity = [
  body('name').isString().withMessage('Name must be a string').trim().notEmpty().withMessage('Name is required'),
  body('population').isNumeric().withMessage('Population must be a number').isInt({ min: 0 }).withMessage('Population must be a positive number'),
  body('country').isString().withMessage('Country must be a string').trim().notEmpty().withMessage('Country is required'),
  body('latitude').isNumeric().withMessage('Latitude must be a number').notEmpty().withMessage('Latitude is required'),
  body('longitude').isNumeric().withMessage('Longitude must be a number').notEmpty().withMessage('Longitude is required'),
];

// Handle validation errors
exports.handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
