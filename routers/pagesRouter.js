import { Router } from "express";

import {
  weekOnePage,
  weekTwoPage,
  weekThreePage,
  weekFourPage,
  weekFivePage,
  weekSixPage,
  weekSevenPage,
  indexPage,
} from "../util/pagesUtil.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(indexPage);
});

router.get("/weekone", (req, res) => {
  res.send(weekOnePage);
});

router.get("/weektwo", (req, res) => {
  res.send(weekTwoPage);
});

router.get("/weekthree", (req, res) => {
  res.send(weekThreePage);
});

router.get("/weekfour", (req, res) => {
  res.send(weekFourPage);
});

router.get("/weekfive", (req, res) => {
  res.send(weekFivePage);
});

router.get("/weeksix", (req, res) => {
  res.send(weekSixPage);
});

router.get("/weekseven", (req, res) => {
  res.send(weekSevenPage);
});

export default router;
