import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';
import type {Freet} from '../freet/model';


export type FavoriteTemplate = {
    _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
    freetId: Types.ObjectId; // Freet that was liked
    userIds: [Types.ObjectId]; // Users that liked the freet 
  };

export type Favorite = {
    _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
    freetId: Freet; // Freet that was liked
    userIds: [User]; // Users that liked the freet }
}

const FavoriteSchema = new Schema<FavoriteTemplate>({
    freetId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Freet'
    },
    userIds: {
        type: [Schema.Types.ObjectId],
        required: true,
        ref: 'User'
    }
})

const FavoriteModel = model<FavoriteTemplate>('Favorite', FavoriteSchema);
export default FavoriteModel;
