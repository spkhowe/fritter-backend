import type {HydratedDocument, Types} from 'mongoose';
import type {Profile} from './model';
import ProfileModel from './model';
import UserCollection from '../user/collection';
import UserModel from '../user/model';

class ProfileCollection {
    /**
    * Add a Profile to the collection
    *
    * @param {string} user - The user to initiate the profile with (username)
    * @param {string} profileName - the name to display the profile as
    * @param {string} username - the handle of the profile 
    * @param {string} bio - bio of the profile (optional)
    * @param {boolean} personal - whether this is a personal profile or not
    * @return {Promise<HydratedDocument<Profile>>} - The newly created profile
    */
    static async addOne(user: Types.ObjectId | string, username: string, personal:boolean, profileName?: string,  bio?: string): Promise<HydratedDocument<Profile>> {
        const userobj = await UserCollection.findOneByUserId(user);
        const profile = new ProfileModel({
            users: userobj.username,
            profileName: profileName,
            profileHandle: username,
            bio: bio,
            personal: personal,
            followerIds: []
        });
        await profile.save(); // Saves profile to MongoDB
        return profile;
        // return profile.populate('users');
    }

    static async addUserToProfile(username: string, profileHandle:string): Promise<HydratedDocument<Profile>> {
        const profile = await ProfileModel.findOne({profileHandle: profileHandle});
        // const user = await UserModel.findOne({username: username});
        profile.users.push(username);
        await profile.save();
        return profile.populate('users');
    }

    static async findOneByUsername(profileHandle: string): Promise<HydratedDocument<Profile>> {
        return ProfileModel.findOne({profileHandle: profileHandle});
    }

    static async findAllByUser(username: string): Promise<Array<HydratedDocument<Profile>>> {
        const abc = await ProfileModel.find({users : username})
        return ProfileModel.find({ users: username }); // Find all profiles that a user belongs to
    }

    static async deleteAllByUsername(profileHandle:string): Promise<void> {
        await ProfileModel.deleteMany({profileHandle: profileHandle});
    }
}

export default ProfileCollection; 