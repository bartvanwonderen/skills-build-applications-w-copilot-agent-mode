import { Router } from 'express';
import type { Model } from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models/index.js';

const router = Router();

function createResourceRouter<T>(resource: Model<T>) {
  const resourceRouter = Router();

  resourceRouter.get('/', async (_request, response) => {
    response.json(await resource.find().lean());
  });

  resourceRouter.get('/:id', async (request, response) => {
    const record = await resource.findById(request.params.id).lean();
    if (!record) {
      response.status(404).json({ error: 'Record not found' });
      return;
    }
    response.json(record);
  });

  resourceRouter.post('/', async (request, response) => {
    const record = await resource.create(request.body);
    response.status(201).json(record);
  });

  return resourceRouter;
}

router.use('/users', createResourceRouter(User));
router.use('/teams', createResourceRouter(Team));
router.use('/activities', createResourceRouter(Activity));
router.use('/leaderboard', createResourceRouter(LeaderboardEntry));
router.use('/workouts', createResourceRouter(Workout));

export default router;