import type {HydratedDocument, Types} from 'mongoose';
import type {Favorite, FavoriteTemplate} from './model';
import FavoriteModel from './model';
import UserCollection from '../user/collection';
import FreetCollection from 'freet/collection';

/**
 * This files contains a class that has the functionality to explore freets
 * stored in MongoDB, including adding, finding, updating, and deleting freets.
 * Feel free to add additional operations in this file.
 *
 * Note: HydratedDocument<Favorite> is the output of the FavoriteModel() constructor,
 * and contains all the information in Favorite. https://mongoosejs.com/docs/typescript.html
 */
 class FavoriteCollection {
    /**
     * Find all favorites by freet.
     * 
     * @param {string} freetId - The id of the freet 
     * @return {Promise<HydratedDocument<Favorite>[]>} - An array of all the favorites
     */
    static async findAllByFreet(freetId: Types.ObjectId | string): Promise<Array<HydratedDocument<Favorite>>> {
        const freet = await FreetCollection.findOne(freetId);
        return FavoriteModel.find({freetId: freet._id}).populate('freetId');
    }

    /**
     * Find all favorites by user.
     * 
     * @param {string} userId - The id of the user 
     * @return {Promise<HydratedDocument<Favorite>[]>} - An array of all the favorites that user has given 
     */
         static async findAllByUser(freetId: Types.ObjectId | string): Promise<Array<HydratedDocument<Favorite>>> {
            const freet = await FreetCollection.findOne(freetId);
            return FavoriteModel.find({freetId: freet._id}).populate('freetId');
        }

    /**
     * Add a favorite to a freet 
     * 
     * @param {string} freetId - id of the freet 
     * @param {string} userId - id of the user favoriting the freet 
     * @return {Promise<HydratedDocument<Favorite>>}
     */
    static async updateOne(freetId: Types.ObjectId | string, userId: Types.ObjectId): Promise<HydratedDocument<Favorite>> {
        const favorite = await FavoriteModel.findOne({freetId: freetId});
        // const user = UserCollection.findOneByUserId(userId)
        favorite.userIds.push(userId)
        await favorite.save();
        return favorite.populate('authorId');
        }
 }
  
export default FavoriteCollection;
  