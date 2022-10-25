import type {HydratedDocument, Types} from 'mongoose';
import type {Profile} from './model';
import ProfileModel from './model';
import UserCollection from 'user/collection';

class ProfileCollection {
    /**
    * Add a Profile to the collection
    *
    * @param {string} user - The user to initiate the profile with (username)
    * @param {string} profileName - the name to display the profile as
    * @param {string} profileHandle - the handle of the profile 
    * @param {string} bio - bio of the profile (optional)
    * @param {boolean} personal - whether this is a personal profile or not
    * @return {Promise<HydratedDocument<Profile>>} - The newly created profile
    */
    static async addOne(user: Types.ObjectId | string, profileHandle: string, personal:boolean, profileName?: string,  bio?: string): Promise<HydratedDocument<Profile>> {
        const userobj = await UserCollection.findOneByUserId(user);
        const username = userobj.username
        const profile = new ProfileModel({
            users: [username],
            profileName: profileName,
            profileHandle: profileHandle,
            bio: bio,
            personal: personal,
            followerIds: []
        });
        await profile.save(); // Saves profile to MongoDB
        return profile.populate('users');
  }

}

export default ProfileCollection; 