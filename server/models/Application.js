import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  personalInfo: {
    ssn: { type: String, required: true },
    fullName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  financialInfo: {
    taxReturnData: {
      adjustedGrossIncome: { type: Number, required: true },
      taxableIncome: { type: Number, required: true }
    },
    estimatedFamilyContribution: { type: Number, required: true }
  },
  educationalInfo: {
    schoolCodes: [{ type: String, required: true }],
    enrollmentStatus: { type: String, enum: ['full-time', 'part-time'], required: true }
  },
  status: {
    type: String,
    enum: ['draft', 'submitted', 'under-review', 'approved', 'denied'],
    default: 'draft'
  },
  submissionDate: { type: Date },
  reviewerNotes: { type: String },
  approverNotes: { type: String }
}, {
  timestamps: true
});

export default mongoose.model('Application', applicationSchema);