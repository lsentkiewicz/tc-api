import { Schema } from 'mongoose';

export default new Schema({

  _lastUpdate: Date,
  _isComplete: Boolean,

  _id: Number,
  challengeType: String,
  challengeName: String,
  forumId: Number,
  reviewType: String,
  numberOfCheckpointsPrizes: Number,
  registrationEndDate: Date,
  checkpointSubmissionEndDate: Date,
  submissionEndDate: Date,
  currentPhaseEndDate: Date,
  currentPhaseRemainingTime: Number,
  currentPhaseName: String,
  digitalRunPoints: Number,
  platforms: [String],
  reliabilityBonus: Number,
  challengeCommunity: String,

  projectId: Number,
  detailedRequirements: String,
  finalSubmissionGuidelines: String,
  screeningScorecardId: Number,
  reviewScorecardId: Number,
  postingDate: Date,
  forumLink: String,
  appealsEndDate: Date,
  finalFixEndDate: Date,
  currentStatus: String,
  directUrl: String,
  technology: [String],
  prize: [Number],
  event: {
    id: Number,
    description: String,
    shortDescription: String,
  },
  registrants: [
    new Schema({
      handle: String,
      reliability: String,
      registrationDate: Date,
      submissionDate: Date,
      rating: String,
      colorStyle: String,
    }),
  ],
  phases: [
    new Schema({
      type: String,
      status: String,
      scheduledStartTime: Date,
      actualStartTime: Date,
      scheduledEndTime: Date,
      actualendTime: Date,
    }),
  ],
  submissions: [
    new Schema({
      handle: String,
      placement: Number,
      screeningScore: Number,
      initialScore: Number,
      finalScore: Number,
      points: Number,
      submissionStatus: String,
      submissionDate: Date,
    }),
  ],
  numberOfRegistrants: Number,
  numberOfSubmissions: Number,
  numberOfCheckpointSubmissions: Number,
});