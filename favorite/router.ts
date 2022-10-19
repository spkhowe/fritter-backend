import type {NextFunction, Request, Response} from 'express';
import express from 'express';
import * as userValidator from '../user/middleware';
import * as freetValidator from '../freet/middleware';
import FavoriteCollection from './collection';
import { Types } from 'mongoose';

const router = express.Router();

// get user favorites by freet
// get favorites by user 
// post new favorite 
// delete favorite 

// find all by freet
// find all by user 
// addOne 
// delete one 

/**
 * Get all favorites by freet 
 * // FIX URL NAME?
 * @name GET /api/favorites?freetId=id 
 *
 * @return {FavoriteResponse[]} - A list of all the favorites for this particular freet
 * @throws {400} - If freetId is not given
 * @throws {404} - If no freet has given freetId 
 *                      
 */
router.get(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        // Check to see that freet id was specified and that the freet exists   
        if (req.query.freet !== undefined) {
            next();
            return;
          }
    },
    [
        freetValidator.isFreetExists
    ],
    // async (req: Request, res: Response) => {
    //     const authorFreets = await FreetCollection.findAllByUsername(req.query.author as string);
    //     const response = authorFreets.map(util.constructFreetResponse);
    //     res.status(200).json(response);
    //   }
    async (req: Request, res: Response) => {
        const freetFavorites = await FavoriteCollection.findAllByFreet(req.query._id as string)

    }
)

/**
 * Get favorites by user
 * FIX URL?
 * @name GET /api/favorites?userId=id
 *
 * @return {FavoriteResponse[]} - An array of freets created by user with given id 
 * @throws {400} - If userId is not given
 * @throws {404} - If no user has given userId 
 *
 */
 router.get(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        // Check to see that freet id was specified and that the freet exists   
        if (req.query.freet !== undefined) {
            next();
            return;
          }
    },
    [
        freetValidator.isFreetExists
    ],
    async (req: Request, res: Response) => {
        const freetFavorites = await FavoriteCollection.findAllByFreet(req.query.id as string);
        // res.status(200).json(freetFavorites);
        res.status(200).json({
            message: 'Your favorites were retreived successfully.',
            favorites:  freetFavorites
          });

    }
)

/**
 * Add a favorite to a freet by a user 
 * FIX URL?
 * @name PUT /api/favorites?userId=userid&freetId=freetid
 *
 * @return {FavoriteResponse} - The update favorite 
 * @throws {400} - If userId or freetId is not given 
 * @throws {404} - If no user has given userId or no freet has the given freetId
 *
 */
 router.put(
    '/',
    async (req: Request, res: Response, next: NextFunction) => {
        // Check to see that freet id was specified and that the freet exists   
        if (req.query.freet !== undefined) {
            next();
            return;
          }
    },
    [
        freetValidator.isFreetExists
    ],
    async (req: Request, res: Response) => {
        const freetFavorites = await FavoriteCollection.findAllByFreet(req.query.id as string);
        // res.status(200).json(freetFavorites);
        res.status(200).json({
            message: 'Your favorites were retreived successfully.',
            favorites:  freetFavorites
          });

    }
)