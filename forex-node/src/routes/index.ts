import * as express from "express";

var router = express.Router();

/* GET home page. */
router.get('/', function(req: any, res: any, next: any) {
  res.json(
    {"forex-fun-api": 'v1'}
  )
});

export default router;
