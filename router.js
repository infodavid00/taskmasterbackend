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
      convertNumbers: "GET http://localhost:10000/convertNumbers?value=864933",
      countUniqueValues:
        "GET http://localhost:10000/countUniqueValues?value=helloworld",
      findOddEven: "GET http://localhost:10000/findOddEven?value=2,3",
      idGenerator: "GET http://localhost:10000/idGenerator?value=20",
      letterCount: "GET http://localhost:10000/letterCount?value=helloworld",
      manualStringReverser:
        "GET http://localhost:10000/manualStringReverser?value=helloworld",
      otpGenerator: "GET http://localhost:10000/otpGenerator",
      passwordGenerator:
        "GET http://localhost:10000/passwordGenerator?value=hard",
      sortNumbers:
        "GET http://localhost:10000/sortNumbers?value=39,76,55,115,63,2,5,21",
      wordCount: "GET http://localhost:10000/wordCount?value=hello world",
      randomNumber: "GET http://localhost:10000/randomNumber?value=300",
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
