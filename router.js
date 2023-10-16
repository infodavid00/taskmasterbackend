import express from "express";
import {
  manualStringReverser,
  letterCount,
  countUniqueValues,
  findOddEven,
  idGenerator,
  otpGenerator,
  passwordGenerator,
  randomNumber,
  sortNumbers,
  wordCount,
  numFormatAlg,
} from "./functions/function.js";

const router = express.Router();

router.get("/", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    useage: {
      convertNumbers: "GET /convertNumbers?value=864933",
      countUniqueValues: "GET /countUniqueValues?value=helloworld",
      findOddEven: "GET /findOddEven?value=2,3",
      idGenerator: "GET /idGenerator?value=20",
      letterCount: "GET /letterCount?value=helloworld",
      manualStringReverser: "GET /manualStringReverser?value=helloworld",
      otpGenerator: "GET /otpGenerator",
      passwordGenerator: "GET /passwordGenerator?value=hard",
      sortNumbers: "GET /sortNumbers?value=39,76,55,115,63,2,5,21",
      wordCount: "GET /wordCount?value=hello world",
      randomNumber: "GET /randomNumber?value=300",
    },
  })
);

router.get("/convertNumbers", (rq, rs) =>
  rs
    .status(200)
    .json({ acknowleged: true, response: numFormatAlg(Number(rq.query.value)) })
);
//convertnumbers

router.get("/countUniqueValues", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    response: countUniqueValues(rq.query.value),
  })
);
//countUniqueValues

router.get("/findOddEven", (rq, rs) => {
  let valarr = [];
  const val = rq.query.value;
  console.log(val);
  val.split(",").forEach((current) => valarr.push(Number(current)));

  rs.status(200).json({
    acknowleged: true,
    response: findOddEven(valarr),
  });
});
// findOddEven

router.get("/idGenerator", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    response: idGenerator(rq.query.value),
  })
);
// idGenerator

router.get("/letterCount", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    response: letterCount(rq.query.value),
  })
);
// letterCount

router.get("/manualStringReverser", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    response: manualStringReverser(rq.query.value),
  })
);
// manualStringReverser

router.get("/otpGenerator", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    response: otpGenerator(),
  })
);
// otpGenerator

router.get("/passwordGenerator", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    response: passwordGenerator(rq.query.value),
  })
);
// passwordGenerator

router.get("/sortNumbers", (rq, rs) => {
  let valarr = [];
  const val = rq.query.value;
  console.log(val);
  val.split(",").forEach((current) => valarr.push(Number(current)));

  rs.status(200).json({
    acknowleged: true,
    response: sortNumbers(valarr),
  });
});
// sortNumbers

router.get("/wordCount", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    response: wordCount(rq.query.value),
  })
);
// wordCount

router.get("/randomNumber", (rq, rs) =>
  rs.status(200).json({
    acknowleged: true,
    response: randomNumber(Number(rq.query.value)),
  })
);
// randomNumber

export default router;
