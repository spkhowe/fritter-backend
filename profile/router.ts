import type {NextFunction, Request, Response} from 'express';
import express from 'express';
import { Types } from 'mongoose';
import * as ProfileUtil from './util';
import ProfileCollection from './collection';
import UserCollection  from 'user/collection';
import { userRouter } from 'user/router';

const router = express.Router();

// GET one profile by profile id
// GET all profiles by a specific user 
// POST a new profile. When new user is created, generate a profile 
// DELETE a profile 
// PUT update a profiles information 

/**
 * Create a new profile.
 *
 * @name POST /api/profiles
 *
 * @param {string} user - The user to initiate the profile with 
 * @param {string} profileName - the name to display the profile as
 * @param {string} profileHandle - the handle of the profile 
 * @param {string} bio - bio of the profile (optional)
 * @param {boolean} personal - whether this is a personal profile or not
 * @return {ProfileResponse} - The created profile
 * @throws {403} - If the user is not logged in
 * @throws {400} - If the freet content is empty or a stream of empty spaces
 * @throws {413} - If the freet content is more than 140 characters long
 */
 router.post(
    '/',
    [
        // middleware checks
        // users cant be empty
        // all users must be valid
        // personal cant be empty 
        // profile handle cant be empty 
        // account type check. if personal cant have > 1 users. if group, user must be logged in 
    ],
    async (req: Request, res: Response) => {
        const userId = req.session.userId as string || "";
        const user = UserCollection.findOneByUserId(userId);
        const profile = await ProfileCollection.addOne(userId, req.body.profileName, req.body.profileHandle, req.body.bio, req.body.personal)
        res.status(201).json({
            message: 'Your freet was created successfully.',
            freet: ProfileUtil.constructProfileResponse(profile)
      });
    }
  );