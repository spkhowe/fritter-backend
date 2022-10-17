import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';

export type Profile = {
    _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
    userIds: [Types.ObjectId];
    profileName: String;
    profileHandle: String;
    bio: String;
    followingIds: [Types.ObjectId];
    followerIds: [Types.ObjectId]
  };


export type PopulatedProfile = {
    _id: Types.ObjectId;
    userIds: [User];
    profileName: String;
    profileHandle: String;
    bio:  String;
    followingIds: [PopulatedProfile]; // Is this bad practice?
    followerIds: [User]
}

const ProfileSchema = new Schema<Profile>({
    // The author userId
    userIds: {
      // Use Types.ObjectId outside of the schema
      type: [Schema.Types.ObjectId],
      required: true,
      ref: 'User' // is this right?
    },
    // The name to be displayed on the profile
    profileName: {
      type: String,
      required: true
    },
    // Profile handle
    profileHandle: {
      type: String,
      required: true
    },
    // Optional information about the profile
    bio: {
      type: String,
      required: false
    },
    followingIds: {
        type: [Schema.Types.ObjectId],
        required: false,
        ref: 'Profile' // Is this right?
    },
    followerIds: {
        type: [Schema.Types.ObjectId],
        required: false,
        ref: 'User' // Is this right?
    }
  });
  
  const ProfileModel = model<Profile>('Profile', ProfileSchema);
  export default ProfileModel;
  