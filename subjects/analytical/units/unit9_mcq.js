// subjects/analytical/units/unit9_mcq.js
// Unit 9 – Compound Interest
// 45 MCQs — enriched format for AI Learning Agents
// hint = shortcut/trick · tutor = step-by-step solution

window.unit9_mcq = [
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Compound Interest",
    "type": "Self Assessment Based",
    "question": "What would be the compound interest on Rs. 8000 at 15% per annum for 3 years?",
    "options": [
      "Rs. 4051",
      "Rs. 4167",
      "Rs. 4283",
      "Rs. 4325"
    ],
    "correctIndex": 1,
    "hint": "CI = P[(1 + R/100)^n - 1].",
    "tutor": "Amount = 8000 × (1 + 15/100)^3 = 8000 × 1.15^3 = Rs. 12167. Compound Interest = 12167 - 8000 = Rs. 4167.",
    "optionExplanations": [
      "Not correct — \"Rs. 4051\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Amount = 8000 × (1 + 15/100)^3 = 8000 × 1.15^3 = Rs. 12167. Compound Interest = 12167 - 8000 = Rs. 4167.",
      "\"Rs. 4283\" is a distractor; recheck your steps — the correct working leads to \"Rs. 4167\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "What would be the compound interest on Rs. 8000 at 15% per annum for 3 years? → Rs. 4167  [Trick: CI = P[(1 + R/100)^n - 1].]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Money Multiplication",
    "type": "Self Assessment Based",
    "question": "A sum of money placed at compound interest doubles itself in 5 years. It will become eight times itself in:",
    "options": [
      "10 years",
      "20 years",
      "12 years",
      "15 years"
    ],
    "correctIndex": 3,
    "hint": "If money doubles in T years, it becomes 2^m times in mT years.",
    "tutor": "The sum doubles in 5 years. Eight times means 2 × 2 × 2 = 2^3, so it needs 3 doubling periods. Time = 3 × 5 = 15 years.",
    "optionExplanations": [
      "Not correct — \"10 years\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"20 years\" is a distractor; recheck your steps — the correct working leads to \"15 years\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above.",
      "Correct. The sum doubles in 5 years. Eight times means 2 × 2 × 2 = 2^3, so it needs 3 doubling periods. Time = 3 × 5 = 15 years."
    ],
    "revisionNote": "A sum of money placed at compound interest doubles itself in 5 years. It will become eigh… → 15 years  [Trick: If money doubles in T years, it becomes 2^m times in mT years.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Fractional Time",
    "type": "Self Assessment Based",
    "question": "Find the compound interest on Rs. 2800 for 18 months at 10% per annum, compounded yearly.",
    "options": [
      "Rs. 420",
      "Rs. 434",
      "Rs. 436.75",
      "Rs. 441.35"
    ],
    "correctIndex": 1,
    "hint": "For 1.5 years: multiply by (1+R/100) and then by (1+R/200).",
    "tutor": "18 months = 1.5 years. Amount = 2800 × 1.10 × 1.05 = Rs. 3234. CI = 3234 - 2800 = Rs. 434.",
    "optionExplanations": [
      "Not correct — \"Rs. 420\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. 18 months = 1.5 years. Amount = 2800 × 1.10 × 1.05 = Rs. 3234. CI = 3234 - 2800 = Rs. 434.",
      "\"Rs. 436.75\" is a distractor; recheck your steps — the correct working leads to \"Rs. 434\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 2800 for 18 months at 10% per annum, compounded yearly. → Rs. 434  [Trick: For 1.5 years: multiply by (1+R/100) and then by (1+R/200).]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Present Worth",
    "type": "Self Assessment Based",
    "question": "Find the present worth of Rs. 9261 due 3 years hence at 5% per annum compounded yearly.",
    "options": [
      "Rs. 7000",
      "Rs. 8000",
      "Rs. 9000",
      "Rs. 1000"
    ],
    "correctIndex": 1,
    "hint": "Present Worth = Amount / (1+R/100)^n.",
    "tutor": "Present worth = 9261 / (1.05)^3 = 9261 / 1.157625 = Rs. 8000.",
    "optionExplanations": [
      "Not correct — \"Rs. 7000\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Present worth = 9261 / (1.05)^3 = 9261 / 1.157625 = Rs. 8000.",
      "\"Rs. 9000\" is a distractor; recheck your steps — the correct working leads to \"Rs. 8000\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the present worth of Rs. 9261 due 3 years hence at 5% per annum compounded yearly. → Rs. 8000  [Trick: Present Worth = Amount / (1+R/100)^n.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Yearly Savings",
    "type": "Self Assessment Based",
    "question": "A man saves Rs. 200 at the beginning of each year and lends the money at 5% compound interest. How much will it become at the end of 3 years?",
    "options": [
      "Rs. 565.25",
      "Rs. 635",
      "Rs. 662.02",
      "Rs. 666.50"
    ],
    "correctIndex": 2,
    "hint": "For yearly deposits, compound each deposit for its own time period.",
    "tutor": "Amount = 200(1.05)^3 + 200(1.05)^2 + 200(1.05) = 231.525 + 220.5 + 210 = Rs. 662.025 ≈ Rs. 662.02.",
    "optionExplanations": [
      "Not correct — \"Rs. 565.25\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 635\" is a distractor; recheck your steps — the correct working leads to \"Rs. 662.02\".",
      "Correct. Amount = 200(1.05)^3 + 200(1.05)^2 + 200(1.05) = 231.525 + 220.5 + 210 = Rs. 662.025 ≈ Rs. 662.02.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A man saves Rs. 200 at the beginning of each year and lends the money at 5% compound inte… → Rs. 662.02  [Trick: For yearly deposits, compound each deposit for its own time period.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Half-Yearly Compounding",
    "type": "Self Assessment Based",
    "question": "A sum at 4% compound interest payable half-yearly amounts to Rs. 6632.55 in 1.5 years. Find the principal.",
    "options": [
      "Rs. 6530",
      "Rs. 6250",
      "Rs. 6470",
      "Rs. 6523"
    ],
    "correctIndex": 1,
    "hint": "Half-yearly: rate becomes R/2 and time periods become 2n.",
    "tutor": "Half-yearly rate = 4/2 = 2%. Time = 1.5 years = 3 half-years. Principal = 6632.55 / (1.02)^3 = Rs. 6250.",
    "optionExplanations": [
      "Not correct — \"Rs. 6530\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Half-yearly rate = 4/2 = 2%. Time = 1.5 years = 3 half-years. Principal = 6632.55 / (1.02)^3 = Rs. 6250.",
      "\"Rs. 6470\" is a distractor; recheck your steps — the correct working leads to \"Rs. 6250\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A sum at 4% compound interest payable half-yearly amounts to Rs. 6632.55 in 1.5 years. Fi… → Rs. 6250  [Trick: Half-yearly: rate becomes R/2 and time periods become 2n.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Half-Yearly Compounding",
    "type": "Self Assessment Based",
    "question": "What will be the compound interest on Rs. 10000 at 20% per annum for 2 years if interest is compounded half-yearly?",
    "options": [
      "Rs. 4400",
      "Rs. 4600",
      "Rs. 4641",
      "Rs. 4680"
    ],
    "correctIndex": 2,
    "hint": "Half-yearly compounding: A = P(1 + R/200)^(2n).",
    "tutor": "Half-yearly rate = 10%, number of periods = 4. Amount = 10000 × (1.10)^4 = Rs. 14641. CI = 14641 - 10000 = Rs. 4641.",
    "optionExplanations": [
      "Not correct — \"Rs. 4400\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 4600\" is a distractor; recheck your steps — the correct working leads to \"Rs. 4641\".",
      "Correct. Half-yearly rate = 10%, number of periods = 4. Amount = 10000 × (1.10)^4 = Rs. 14641. CI = 14641 - 10000 = Rs. 4641.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "What will be the compound interest on Rs. 10000 at 20% per annum for 2 years if interest… → Rs. 4641  [Trick: Half-yearly compounding: A = P(1 + R/200)^(2n).]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Compounding Frequency",
    "type": "Self Assessment Based",
    "question": "The difference between compound interest on Rs. 800 for 1 year at 20% per annum when compounded half-yearly and quarterly is:",
    "options": [
      "Rs. 4.40",
      "Rs. 3.40",
      "Rs. 6.40",
      "Rs. 5.40"
    ],
    "correctIndex": 0,
    "hint": "For comparing compounding, calculate final amounts; principal cancels in the difference.",
    "tutor": "Half-yearly amount = 800(1.10)^2 = Rs. 968. Quarterly amount = 800(1.05)^4 = Rs. 972.40. Difference in CI = 972.40 - 968 = Rs. 4.40.",
    "optionExplanations": [
      "Correct. Half-yearly amount = 800(1.10)^2 = Rs. 968. Quarterly amount = 800(1.05)^4 = Rs. 972.40. Difference in CI = 972.40 - 968 = Rs. 4.40.",
      "Not correct — \"Rs. 3.40\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 6.40\" is a distractor; recheck your steps — the correct working leads to \"Rs. 4.40\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "The difference between compound interest on Rs. 800 for 1 year at 20% per annum when comp… → Rs. 4.40  [Trick: For comparing compounding, calculate final amounts; principal cancels in the difference.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Quarterly Compounding",
    "type": "Self Assessment Based",
    "question": "Find the compound interest on Rs. 15625 for 9 months at 16% per annum compounded quarterly.",
    "options": [
      "Rs. 1851",
      "Rs. 1941",
      "Rs. 1951",
      "Rs. 1961"
    ],
    "correctIndex": 2,
    "hint": "Quarterly: rate = R/4 and number of periods = quarters.",
    "tutor": "Quarterly rate = 16/4 = 4%. 9 months = 3 quarters. Amount = 15625 × (1.04)^3 = Rs. 17576. CI = 17576 - 15625 = Rs. 1951.",
    "optionExplanations": [
      "Not correct — \"Rs. 1851\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 1941\" is a distractor; recheck your steps — the correct working leads to \"Rs. 1951\".",
      "Correct. Quarterly rate = 16/4 = 4%. 9 months = 3 quarters. Amount = 15625 × (1.04)^3 = Rs. 17576. CI = 17576 - 15625 = Rs. 1951.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 15625 for 9 months at 16% per annum compounded quarterl… → Rs. 1951  [Trick: Quarterly: rate = R/4 and number of periods = quarters.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Time Computation",
    "type": "Self Assessment Based",
    "question": "Rs. 800 at 5% per annum compound interest amounts to Rs. 882 in:",
    "options": [
      "6 years",
      "2 years",
      "4 years",
      "5 years"
    ],
    "correctIndex": 1,
    "hint": "Compare A/P with powers of (1+R/100).",
    "tutor": "800(1.05)^n = 882. So (1.05)^n = 882/800 = 1.1025 = (1.05)^2. Hence n = 2 years.",
    "optionExplanations": [
      "Not correct — \"6 years\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. 800(1.05)^n = 882. So (1.05)^n = 882/800 = 1.1025 = (1.05)^2. Hence n = 2 years.",
      "\"4 years\" is a distractor; recheck your steps — the correct working leads to \"2 years\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Rs. 800 at 5% per annum compound interest amounts to Rs. 882 in: → 2 years  [Trick: Compare A/P with powers of (1+R/100).]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Relation Between SI and CI",
    "type": "Self Assessment Based",
    "question": "The simple interest on Rs. 20000 at the end of 3 years is Rs. 7200. What would be the compound interest on the same amount at the same rate for the same period?",
    "options": [
      "Rs. 8098.56",
      "Rs. 8112.86",
      "Rs. 8246.16",
      "Rs. 8342.36"
    ],
    "correctIndex": 0,
    "hint": "Find rate from SI first, then apply compound interest formula.",
    "tutor": "Rate = (7200 × 100)/(20000 × 3) = 12%. CI = 20000[(1.12)^3 - 1] = 20000(0.404928) = Rs. 8098.56.",
    "optionExplanations": [
      "Correct. Rate = (7200 × 100)/(20000 × 3) = 12%. CI = 20000[(1.12)^3 - 1] = 20000(0.404928) = Rs. 8098.56.",
      "Not correct — \"Rs. 8112.86\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 8246.16\" is a distractor; recheck your steps — the correct working leads to \"Rs. 8098.56\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "The simple interest on Rs. 20000 at the end of 3 years is Rs. 7200. What would be the com… → Rs. 8098.56  [Trick: Find rate from SI first, then apply compound interest formula.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Different Yearly Rates",
    "type": "Self Assessment Based",
    "question": "What will be the amount if Rs. 5000 is placed at compound interest for 3 years at 2%, 3% and 4% for the first, second and third years respectively?",
    "options": [
      "Rs. 5643.12",
      "Rs. 5463.12",
      "Rs. 6413.12",
      "Rs. 6553.22"
    ],
    "correctIndex": 1,
    "hint": "Different rates: multiply each yearly factor separately.",
    "tutor": "Amount = 5000 × 1.02 × 1.03 × 1.04 = Rs. 5463.12.",
    "optionExplanations": [
      "Not correct — \"Rs. 5643.12\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Amount = 5000 × 1.02 × 1.03 × 1.04 = Rs. 5463.12.",
      "\"Rs. 6413.12\" is a distractor; recheck your steps — the correct working leads to \"Rs. 5463.12\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "What will be the amount if Rs. 5000 is placed at compound interest for 3 years at 2%, 3%… → Rs. 5463.12  [Trick: Different rates: multiply each yearly factor separately.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Principal Computation",
    "type": "Self Assessment Based",
    "question": "A certain sum amounts to Rs. 12100 in 2 years at 10% compound interest compounded annually. Find the sum.",
    "options": [
      "Rs. 12000",
      "Rs. 6000",
      "Rs. 8000",
      "Rs. 10000"
    ],
    "correctIndex": 3,
    "hint": "P = A / (1+R/100)^n.",
    "tutor": "Principal = 12100 / (1.10)^2 = 12100 / 1.21 = Rs. 10000.",
    "optionExplanations": [
      "Not correct — \"Rs. 12000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 6000\" is a distractor; recheck your steps — the correct working leads to \"Rs. 10000\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above.",
      "Correct. Principal = 12100 / (1.10)^2 = 12100 / 1.21 = Rs. 10000."
    ],
    "revisionNote": "A certain sum amounts to Rs. 12100 in 2 years at 10% compound interest compounded annuall… → Rs. 10000  [Trick: P = A / (1+R/100)^n.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Compound Interest",
    "type": "Self Assessment Based",
    "question": "Find the compound interest on Rs. 2000 at 5% per annum, compounded yearly, for 2 years.",
    "options": [
      "Rs. 315",
      "Rs. 425",
      "Rs. 205",
      "Rs. 334"
    ],
    "correctIndex": 2,
    "hint": "For 2 years, CI = P[(1+R/100)^2 - 1].",
    "tutor": "Amount = 2000 × (1.05)^2 = Rs. 2205. CI = 2205 - 2000 = Rs. 205.",
    "optionExplanations": [
      "Not correct — \"Rs. 315\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 425\" is a distractor; recheck your steps — the correct working leads to \"Rs. 205\".",
      "Correct. Amount = 2000 × (1.05)^2 = Rs. 2205. CI = 2205 - 2000 = Rs. 205.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 2000 at 5% per annum, compounded yearly, for 2 years. → Rs. 205  [Trick: For 2 years, CI = P[(1+R/100)^2 - 1].]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Borrowing and Lending",
    "type": "Self Assessment Based",
    "question": "A man borrows money at 3% per annum interest payable yearly and lends it immediately at 5% compound interest payable half-yearly. He gains Rs. 330 at the end of the year. Find the sum borrowed.",
    "options": [
      "Rs. 17000",
      "Rs. 16500",
      "Rs. 15000",
      "Rs. 16000"
    ],
    "correctIndex": 3,
    "hint": "Find gain per Rs. 100, then scale to total gain.",
    "tutor": "On Rs. 100, amount paid = Rs. 103. Amount received = 100(1.025)^2 = Rs. 105.0625. Gain per Rs. 100 = 2.0625. Required sum = 330 × 100 / 2.0625 = Rs. 16000.",
    "optionExplanations": [
      "Not correct — \"Rs. 17000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 16500\" is a distractor; recheck your steps — the correct working leads to \"Rs. 16000\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above.",
      "Correct. On Rs. 100, amount paid = Rs. 103. Amount received = 100(1.025)^2 = Rs. 105.0625. Gain per Rs. 100 = 2.0625. Required sum = 330 × 100 / 2.0625 = Rs. 16000."
    ],
    "revisionNote": "A man borrows money at 3% per annum interest payable yearly and lends it immediately at 5… → Rs. 16000  [Trick: Find gain per Rs. 100, then scale to total gain.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Compound Interest",
    "type": "Concept MCQ",
    "question": "Find the compound interest on Rs. 5000 for 2 years at 4% per annum compounded annually.",
    "options": [
      "Rs. 400",
      "Rs. 408",
      "Rs. 416",
      "Rs. 420"
    ],
    "correctIndex": 1,
    "hint": "CI for 2 years = P[(1+R/100)^2 - 1].",
    "tutor": "Amount = 5000(1.04)^2 = Rs. 5408. CI = 5408 - 5000 = Rs. 408.",
    "optionExplanations": [
      "Not correct — \"Rs. 400\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Amount = 5000(1.04)^2 = Rs. 5408. CI = 5408 - 5000 = Rs. 408.",
      "\"Rs. 416\" is a distractor; recheck your steps — the correct working leads to \"Rs. 408\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 5000 for 2 years at 4% per annum compounded annually. → Rs. 408  [Trick: CI for 2 years = P[(1+R/100)^2 - 1].]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Rate Computation",
    "type": "Concept MCQ",
    "question": "At what rate of compound interest per annum will Rs. 1200 become Rs. 1348.32 in 2 years?",
    "options": [
      "4%",
      "5%",
      "6%",
      "8%"
    ],
    "correctIndex": 2,
    "hint": "A/P = (1+R/100)^n.",
    "tutor": "1348.32/1200 = 1.1236 = (1.06)^2. Therefore, the rate is 6% per annum.",
    "optionExplanations": [
      "Not correct — \"4%\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"5%\" is a distractor; recheck your steps — the correct working leads to \"6%\".",
      "Correct. 1348.32/1200 = 1.1236 = (1.06)^2. Therefore, the rate is 6% per annum.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "At what rate of compound interest per annum will Rs. 1200 become Rs. 1348.32 in 2 years? → 6%  [Trick: A/P = (1+R/100)^n.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Present Worth",
    "type": "Concept MCQ",
    "question": "Find the present worth of Rs. 2420 due after 2 years at 10% compound interest.",
    "options": [
      "Rs. 1800",
      "Rs. 1900",
      "Rs. 2000",
      "Rs. 2200"
    ],
    "correctIndex": 2,
    "hint": "Present worth = Future amount divided by compound factor.",
    "tutor": "Present worth = 2420/(1.10)^2 = 2420/1.21 = Rs. 2000.",
    "optionExplanations": [
      "Not correct — \"Rs. 1800\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 1900\" is a distractor; recheck your steps — the correct working leads to \"Rs. 2000\".",
      "Correct. Present worth = 2420/(1.10)^2 = 2420/1.21 = Rs. 2000.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the present worth of Rs. 2420 due after 2 years at 10% compound interest. → Rs. 2000  [Trick: Present worth = Future amount divided by compound factor.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Quarterly Compounding",
    "type": "Concept MCQ",
    "question": "Find the compound interest on Rs. 1000 at 40% per annum compounded quarterly for 1 year.",
    "options": [
      "Rs. 400",
      "Rs. 440",
      "Rs. 464.10",
      "Rs. 500"
    ],
    "correctIndex": 2,
    "hint": "Quarterly compounding: A = P(1+R/400)^4 for 1 year.",
    "tutor": "Quarterly rate = 10%, periods = 4. Amount = 1000(1.10)^4 = Rs. 1464.10. CI = Rs. 464.10.",
    "optionExplanations": [
      "Not correct — \"Rs. 400\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 440\" is a distractor; recheck your steps — the correct working leads to \"Rs. 464.10\".",
      "Correct. Quarterly rate = 10%, periods = 4. Amount = 1000(1.10)^4 = Rs. 1464.10. CI = Rs. 464.10.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 1000 at 40% per annum compounded quarterly for 1 year. → Rs. 464.10  [Trick: Quarterly compounding: A = P(1+R/400)^4 for 1 year.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Monthly Compounding",
    "type": "Concept MCQ",
    "question": "Find the compound interest on Rs. 4000 at 24% per annum for 3 months, compounded monthly.",
    "options": [
      "Rs. 240",
      "Rs. 244.83",
      "Rs. 250.25",
      "Rs. 260"
    ],
    "correctIndex": 1,
    "hint": "Monthly: rate = R/12 and number of periods = months.",
    "tutor": "Monthly rate = 24/12 = 2%. Periods = 3. Amount = 4000(1.02)^3 = Rs. 4244.83. CI = Rs. 244.83.",
    "optionExplanations": [
      "Not correct — \"Rs. 240\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Monthly rate = 24/12 = 2%. Periods = 3. Amount = 4000(1.02)^3 = Rs. 4244.83. CI = Rs. 244.83.",
      "\"Rs. 250.25\" is a distractor; recheck your steps — the correct working leads to \"Rs. 244.83\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 4000 at 24% per annum for 3 months, compounded monthly. → Rs. 244.83  [Trick: Monthly: rate = R/12 and number of periods = months.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Relation Between SI and CI",
    "type": "Concept MCQ",
    "question": "The compound interest on a sum for 3 years at 5% is Rs. 1324.05. What is the simple interest on the same sum for the same time and rate?",
    "options": [
      "Rs. 1200",
      "Rs. 1260",
      "Rs. 1320",
      "Rs. 1350"
    ],
    "correctIndex": 1,
    "hint": "First find principal from CI factor, then calculate SI.",
    "tutor": "CI factor for 3 years at 5% = 1.157625 - 1 = 0.157625. Principal = 1324.05/0.157625 = Rs. 8400. SI = 8400 × 5 × 3 / 100 = Rs. 1260.",
    "optionExplanations": [
      "Not correct — \"Rs. 1200\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. CI factor for 3 years at 5% = 1.157625 - 1 = 0.157625. Principal = 1324.05/0.157625 = Rs. 8400. SI = 8400 × 5 × 3 / 100 = Rs. 1260.",
      "\"Rs. 1320\" is a distractor; recheck your steps — the correct working leads to \"Rs. 1260\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "The compound interest on a sum for 3 years at 5% is Rs. 1324.05. What is the simple inter… → Rs. 1260  [Trick: First find principal from CI factor, then calculate SI.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Money Multiplication",
    "type": "Concept MCQ",
    "question": "A sum of money at compound interest doubles in 3 years. In how many years will it become four times?",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "9 years"
    ],
    "correctIndex": 2,
    "hint": "If money doubles in T years, four times takes 2T years.",
    "tutor": "Four times = 2^2. Since one doubling takes 3 years, two doublings take 2 × 3 = 6 years.",
    "optionExplanations": [
      "Not correct — \"4 years\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"5 years\" is a distractor; recheck your steps — the correct working leads to \"6 years\".",
      "Correct. Four times = 2^2. Since one doubling takes 3 years, two doublings take 2 × 3 = 6 years.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A sum of money at compound interest doubles in 3 years. In how many years will it become… → 6 years  [Trick: If money doubles in T years, four times takes 2T years.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "CI and SI Difference",
    "type": "Concept MCQ",
    "question": "If the difference between compound interest and simple interest for 3 years at 10% is Rs. 186, find the principal.",
    "options": [
      "Rs. 5000",
      "Rs. 6000",
      "Rs. 7000",
      "Rs. 8000"
    ],
    "correctIndex": 1,
    "hint": "For 3 years: CI-SI = P[(1+R/100)^3 - 1 - 3R/100].",
    "tutor": "For 3 years at 10%, CI - SI = P[(1.1)^3 - 1 - 0.3] = P(0.031). So P = 186/0.031 = Rs. 6000.",
    "optionExplanations": [
      "Not correct — \"Rs. 5000\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. For 3 years at 10%, CI - SI = P[(1.1)^3 - 1 - 0.3] = P(0.031). So P = 186/0.031 = Rs. 6000.",
      "\"Rs. 7000\" is a distractor; recheck your steps — the correct working leads to \"Rs. 6000\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If the difference between compound interest and simple interest for 3 years at 10% is Rs.… → Rs. 6000  [Trick: For 3 years: CI-SI = P[(1+R/100)^3 - 1 - 3R/100].]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Rate Computation",
    "type": "Concept MCQ",
    "question": "A sum amounts to Rs. 4050 in 1 year and Rs. 4723.92 in 3 years at compound interest. Find the rate.",
    "options": [
      "6%",
      "8%",
      "10%",
      "12%"
    ],
    "correctIndex": 1,
    "hint": "Use ratio of amounts over the time gap.",
    "tutor": "The amount grows from Rs. 4050 to Rs. 4723.92 in the next 2 years. So (1+R/100)^2 = 4723.92/4050 = 1.1664 = (1.08)^2. Hence R = 8%.",
    "optionExplanations": [
      "Not correct — \"6%\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. The amount grows from Rs. 4050 to Rs. 4723.92 in the next 2 years. So (1+R/100)^2 = 4723.92/4050 = 1.1664 = (1.08)^2. Hence R = 8%.",
      "\"10%\" is a distractor; recheck your steps — the correct working leads to \"8%\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A sum amounts to Rs. 4050 in 1 year and Rs. 4723.92 in 3 years at compound interest. Find… → 8%  [Trick: Use ratio of amounts over the time gap.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Amount Computation",
    "type": "Concept MCQ",
    "question": "Mehak invested Rs. 18000 at 4% compound interest per annum for 3 years. What amount will she receive?",
    "options": [
      "Rs. 20247.55",
      "Rs. 20000",
      "Rs. 20480",
      "Rs. 21000"
    ],
    "correctIndex": 0,
    "hint": "Amount = P(1+R/100)^n.",
    "tutor": "Amount = 18000(1.04)^3 = 18000 × 1.124864 = Rs. 20247.55.",
    "optionExplanations": [
      "Correct. Amount = 18000(1.04)^3 = 18000 × 1.124864 = Rs. 20247.55.",
      "Not correct — \"Rs. 20000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 20480\" is a distractor; recheck your steps — the correct working leads to \"Rs. 20247.55\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Mehak invested Rs. 18000 at 4% compound interest per annum for 3 years. What amount will… → Rs. 20247.55  [Trick: Amount = P(1+R/100)^n.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Half-Yearly Compounding",
    "type": "Concept MCQ",
    "question": "Find the compound interest on Rs. 20000 at 12% per annum for 1 year, compounded half-yearly.",
    "options": [
      "Rs. 2400",
      "Rs. 2472",
      "Rs. 2500",
      "Rs. 2600"
    ],
    "correctIndex": 1,
    "hint": "Half-yearly for 1 year means two periods.",
    "tutor": "Half-yearly rate = 6%, periods = 2. Amount = 20000(1.06)^2 = Rs. 22472. CI = Rs. 2472.",
    "optionExplanations": [
      "Not correct — \"Rs. 2400\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Half-yearly rate = 6%, periods = 2. Amount = 20000(1.06)^2 = Rs. 22472. CI = Rs. 2472.",
      "\"Rs. 2500\" is a distractor; recheck your steps — the correct working leads to \"Rs. 2472\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 20000 at 12% per annum for 1 year, compounded half-year… → Rs. 2472  [Trick: Half-yearly for 1 year means two periods.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Quarterly Compounding",
    "type": "Concept MCQ",
    "question": "Find the compound interest on Rs. 16000 at 8% per annum for 1 year compounded quarterly.",
    "options": [
      "Rs. 1280",
      "Rs. 1318.59",
      "Rs. 1360",
      "Rs. 1400"
    ],
    "correctIndex": 1,
    "hint": "Quarterly compounding: four periods in one year.",
    "tutor": "Quarterly rate = 2%, periods = 4. Amount = 16000(1.02)^4 = Rs. 17318.59. CI = Rs. 1318.59.",
    "optionExplanations": [
      "Not correct — \"Rs. 1280\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Quarterly rate = 2%, periods = 4. Amount = 16000(1.02)^4 = Rs. 17318.59. CI = Rs. 1318.59.",
      "\"Rs. 1360\" is a distractor; recheck your steps — the correct working leads to \"Rs. 1318.59\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 16000 at 8% per annum for 1 year compounded quarterly. → Rs. 1318.59  [Trick: Quarterly compounding: four periods in one year.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Different Yearly Rates",
    "type": "Concept MCQ",
    "question": "Find the amount on Rs. 10000 for 3 years if the rates are 5%, 6% and 7% respectively.",
    "options": [
      "Rs. 11790.30",
      "Rs. 11907.30",
      "Rs. 12000.30",
      "Rs. 12107.30"
    ],
    "correctIndex": 1,
    "hint": "For different rates, multiply each annual factor separately.",
    "tutor": "Amount = 10000 × 1.05 × 1.06 × 1.07 = Rs. 11907.30.",
    "optionExplanations": [
      "Not correct — \"Rs. 11790.30\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Amount = 10000 × 1.05 × 1.06 × 1.07 = Rs. 11907.30.",
      "\"Rs. 12000.30\" is a distractor; recheck your steps — the correct working leads to \"Rs. 11907.30\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the amount on Rs. 10000 for 3 years if the rates are 5%, 6% and 7% respectively. → Rs. 11907.30  [Trick: For different rates, multiply each annual factor separately.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Population Growth",
    "type": "Concept MCQ",
    "question": "A town has population 50000. It increases by 10% annually. What will be the population after 2 years?",
    "options": [
      "55000",
      "60000",
      "60500",
      "61000"
    ],
    "correctIndex": 2,
    "hint": "Population growth uses the same formula as compound interest.",
    "tutor": "Population after 2 years = 50000(1.10)^2 = 50000 × 1.21 = 60500.",
    "optionExplanations": [
      "Not correct — \"55000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"60000\" is a distractor; recheck your steps — the correct working leads to \"60500\".",
      "Correct. Population after 2 years = 50000(1.10)^2 = 50000 × 1.21 = 60500.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A town has population 50000. It increases by 10% annually. What will be the population af… → 60500  [Trick: Population growth uses the same formula as compound interest.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Depreciation",
    "type": "Concept MCQ",
    "question": "A machine worth Rs. 100000 depreciates by 20% per year. What is its value after 2 years?",
    "options": [
      "Rs. 80000",
      "Rs. 70000",
      "Rs. 64000",
      "Rs. 60000"
    ],
    "correctIndex": 2,
    "hint": "Depreciation factor = 1 - R/100.",
    "tutor": "Value after depreciation = 100000(1 - 20/100)^2 = 100000(0.8)^2 = Rs. 64000.",
    "optionExplanations": [
      "Not correct — \"Rs. 80000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 70000\" is a distractor; recheck your steps — the correct working leads to \"Rs. 64000\".",
      "Correct. Value after depreciation = 100000(1 - 20/100)^2 = 100000(0.8)^2 = Rs. 64000.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A machine worth Rs. 100000 depreciates by 20% per year. What is its value after 2 years? → Rs. 64000  [Trick: Depreciation factor = 1 - R/100.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Present Worth",
    "type": "Concept MCQ",
    "question": "Find the present worth of Rs. 13310 due after 3 years at 10% compound interest.",
    "options": [
      "Rs. 9000",
      "Rs. 9500",
      "Rs. 10000",
      "Rs. 11000"
    ],
    "correctIndex": 2,
    "hint": "P = A/(1+R/100)^n.",
    "tutor": "Present worth = 13310/(1.10)^3 = 13310/1.331 = Rs. 10000.",
    "optionExplanations": [
      "Not correct — \"Rs. 9000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 9500\" is a distractor; recheck your steps — the correct working leads to \"Rs. 10000\".",
      "Correct. Present worth = 13310/(1.10)^3 = 13310/1.331 = Rs. 10000.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the present worth of Rs. 13310 due after 3 years at 10% compound interest. → Rs. 10000  [Trick: P = A/(1+R/100)^n.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "CI and SI Difference",
    "type": "Concept MCQ",
    "question": "Find the difference between compound interest and simple interest on Rs. 10000 for 2 years at 10% per annum.",
    "options": [
      "Rs. 50",
      "Rs. 100",
      "Rs. 150",
      "Rs. 200"
    ],
    "correctIndex": 1,
    "hint": "For 2 years: CI - SI = P(R/100)^2.",
    "tutor": "For 2 years, CI - SI = P(R/100)^2 = 10000(10/100)^2 = Rs. 100.",
    "optionExplanations": [
      "Not correct — \"Rs. 50\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. For 2 years, CI - SI = P(R/100)^2 = 10000(10/100)^2 = Rs. 100.",
      "\"Rs. 150\" is a distractor; recheck your steps — the correct working leads to \"Rs. 100\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the difference between compound interest and simple interest on Rs. 10000 for 2 year… → Rs. 100  [Trick: For 2 years: CI - SI = P(R/100)^2.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Principal from Difference",
    "type": "Concept MCQ",
    "question": "If the difference between CI and SI for 2 years at 5% per annum is Rs. 25, find the principal.",
    "options": [
      "Rs. 8000",
      "Rs. 9000",
      "Rs. 10000",
      "Rs. 12000"
    ],
    "correctIndex": 2,
    "hint": "P = Difference / (R/100)^2.",
    "tutor": "For 2 years, CI - SI = P(R/100)^2. So 25 = P(5/100)^2 = P(0.0025). Therefore P = Rs. 10000.",
    "optionExplanations": [
      "Not correct — \"Rs. 8000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 9000\" is a distractor; recheck your steps — the correct working leads to \"Rs. 10000\".",
      "Correct. For 2 years, CI - SI = P(R/100)^2. So 25 = P(5/100)^2 = P(0.0025). Therefore P = Rs. 10000.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If the difference between CI and SI for 2 years at 5% per annum is Rs. 25, find the princ… → Rs. 10000  [Trick: P = Difference / (R/100)^2.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Effective Rate",
    "type": "Concept MCQ",
    "question": "What is the effective annual rate of 10% per annum compounded half-yearly?",
    "options": [
      "10%",
      "10.25%",
      "10.50%",
      "11%"
    ],
    "correctIndex": 1,
    "hint": "Effective rate = (1 + R/200)^2 - 1.",
    "tutor": "Half-yearly rate = 5%. Effective annual rate = (1.05)^2 - 1 = 0.1025 = 10.25%.",
    "optionExplanations": [
      "Not correct — \"10%\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Half-yearly rate = 5%. Effective annual rate = (1.05)^2 - 1 = 0.1025 = 10.25%.",
      "\"10.50%\" is a distractor; recheck your steps — the correct working leads to \"10.25%\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "What is the effective annual rate of 10% per annum compounded half-yearly? → 10.25%  [Trick: Effective rate = (1 + R/200)^2 - 1.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Amount Computation",
    "type": "Concept MCQ",
    "question": "Find the amount on Rs. 5000 at 20% compound interest for 2 years.",
    "options": [
      "Rs. 6000",
      "Rs. 7000",
      "Rs. 7200",
      "Rs. 7500"
    ],
    "correctIndex": 2,
    "hint": "At 20% for 2 years, multiply principal by 1.44.",
    "tutor": "Amount = 5000(1.20)^2 = 5000 × 1.44 = Rs. 7200.",
    "optionExplanations": [
      "Not correct — \"Rs. 6000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 7000\" is a distractor; recheck your steps — the correct working leads to \"Rs. 7200\".",
      "Correct. Amount = 5000(1.20)^2 = 5000 × 1.44 = Rs. 7200.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the amount on Rs. 5000 at 20% compound interest for 2 years. → Rs. 7200  [Trick: At 20% for 2 years, multiply principal by 1.44.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Compound Interest",
    "type": "Tricky Exam MCQ",
    "question": "Find the compound interest on Rs. 64000 at 5% per annum for 2 years, compounded annually.",
    "options": [
      "Rs. 6400",
      "Rs. 6560",
      "Rs. 6600",
      "Rs. 6720"
    ],
    "correctIndex": 1,
    "hint": "For 2 years at 5%, CI factor = 10.25%.",
    "tutor": "Amount = 64000(1.05)^2 = Rs. 70560. CI = 70560 - 64000 = Rs. 6560.",
    "optionExplanations": [
      "Not correct — \"Rs. 6400\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Amount = 64000(1.05)^2 = Rs. 70560. CI = 70560 - 64000 = Rs. 6560.",
      "\"Rs. 6600\" is a distractor; recheck your steps — the correct working leads to \"Rs. 6560\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the compound interest on Rs. 64000 at 5% per annum for 2 years, compounded annually. → Rs. 6560  [Trick: For 2 years at 5%, CI factor = 10.25%.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Money Multiplication",
    "type": "Tricky Exam MCQ",
    "question": "A sum doubles itself in 5 years at compound interest. In how many years will it become 16 times?",
    "options": [
      "15 years",
      "20 years",
      "25 years",
      "30 years"
    ],
    "correctIndex": 1,
    "hint": "16 = 2^4, so required time = 4 × doubling time.",
    "tutor": "16 times = 2^4. One doubling takes 5 years, so four doublings take 4 × 5 = 20 years.",
    "optionExplanations": [
      "Not correct — \"15 years\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. 16 times = 2^4. One doubling takes 5 years, so four doublings take 4 × 5 = 20 years.",
      "\"25 years\" is a distractor; recheck your steps — the correct working leads to \"20 years\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A sum doubles itself in 5 years at compound interest. In how many years will it become 16… → 20 years  [Trick: 16 = 2^4, so required time = 4 × doubling time.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "CI and SI Relation",
    "type": "Tricky Exam MCQ",
    "question": "The compound interest on a sum for 2 years at 10% is Rs. 420. Find the simple interest for the same sum, rate and time.",
    "options": [
      "Rs. 380",
      "Rs. 400",
      "Rs. 410",
      "Rs. 420"
    ],
    "correctIndex": 1,
    "hint": "For 2 years at 10%, CI = 21% of principal.",
    "tutor": "At 10% for 2 years, CI factor = 21%. So principal = 420/0.21 = Rs. 2000. SI = 2000 × 10 × 2 / 100 = Rs. 400.",
    "optionExplanations": [
      "Not correct — \"Rs. 380\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. At 10% for 2 years, CI factor = 21%. So principal = 420/0.21 = Rs. 2000. SI = 2000 × 10 × 2 / 100 = Rs. 400.",
      "\"Rs. 410\" is a distractor; recheck your steps — the correct working leads to \"Rs. 400\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "The compound interest on a sum for 2 years at 10% is Rs. 420. Find the simple interest fo… → Rs. 400  [Trick: For 2 years at 10%, CI = 21% of principal.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Rate Computation",
    "type": "Tricky Exam MCQ",
    "question": "If Rs. 8000 amounts to Rs. 9261 in 3 years at compound interest, find the rate per annum.",
    "options": [
      "4%",
      "5%",
      "6%",
      "8%"
    ],
    "correctIndex": 1,
    "hint": "Compare A/P with common cube values like 1.05^3.",
    "tutor": "9261/8000 = 1.157625 = (1.05)^3. Therefore, rate = 5%.",
    "optionExplanations": [
      "Not correct — \"4%\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. 9261/8000 = 1.157625 = (1.05)^3. Therefore, rate = 5%.",
      "\"6%\" is a distractor; recheck your steps — the correct working leads to \"5%\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "If Rs. 8000 amounts to Rs. 9261 in 3 years at compound interest, find the rate per annum. → 5%  [Trick: Compare A/P with common cube values like 1.05^3.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "CI and SI Difference",
    "type": "Tricky Exam MCQ",
    "question": "For a certain sum, the compound interest for 2 years at 10% exceeds simple interest by Rs. 20. Find the sum.",
    "options": [
      "Rs. 1000",
      "Rs. 1500",
      "Rs. 2000",
      "Rs. 2500"
    ],
    "correctIndex": 2,
    "hint": "For 2 years, difference = P × rate².",
    "tutor": "For 2 years, CI - SI = P(R/100)^2. So 20 = P(10/100)^2 = 0.01P. Therefore P = Rs. 2000.",
    "optionExplanations": [
      "Not correct — \"Rs. 1000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 1500\" is a distractor; recheck your steps — the correct working leads to \"Rs. 2000\".",
      "Correct. For 2 years, CI - SI = P(R/100)^2. So 20 = P(10/100)^2 = 0.01P. Therefore P = Rs. 2000.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "For a certain sum, the compound interest for 2 years at 10% exceeds simple interest by Rs… → Rs. 2000  [Trick: For 2 years, difference = P × rate².]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Compounding Frequency",
    "type": "Tricky Exam MCQ",
    "question": "Find the difference between compound interest on Rs. 10000 for 1 year at 10% compounded annually and half-yearly.",
    "options": [
      "Rs. 20",
      "Rs. 25",
      "Rs. 30",
      "Rs. 50"
    ],
    "correctIndex": 1,
    "hint": "More frequent compounding gives more interest.",
    "tutor": "Annual CI = Rs. 1000. Half-yearly amount = 10000(1.05)^2 = Rs. 11025, so half-yearly CI = Rs. 1025. Difference = Rs. 25.",
    "optionExplanations": [
      "Not correct — \"Rs. 20\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Annual CI = Rs. 1000. Half-yearly amount = 10000(1.05)^2 = Rs. 11025, so half-yearly CI = Rs. 1025. Difference = Rs. 25.",
      "\"Rs. 30\" is a distractor; recheck your steps — the correct working leads to \"Rs. 25\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Find the difference between compound interest on Rs. 10000 for 1 year at 10% compounded a… → Rs. 25  [Trick: More frequent compounding gives more interest.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Division of Sum",
    "type": "Tricky Exam MCQ",
    "question": "Divide Rs. 8840 between A and B so that A's amount after 8 years equals B's amount after 10 years at 10% compound interest per annum. Find A's share.",
    "options": [
      "Rs. 4000",
      "Rs. 4400",
      "Rs. 4840",
      "Rs. 5000"
    ],
    "correctIndex": 2,
    "hint": "If time differs by 2 years, shares must differ by the 2-year compound factor.",
    "tutor": "Let B's share be x. A's share should be x(1.10)^2 = 1.21x because A is invested for 2 years less. Total = x + 1.21x = 2.21x = 8840. So x = 4000 and A = 4840.",
    "optionExplanations": [
      "Not correct — \"Rs. 4000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 4400\" is a distractor; recheck your steps — the correct working leads to \"Rs. 4840\".",
      "Correct. Let B's share be x. A's share should be x(1.10)^2 = 1.21x because A is invested for 2 years less. Total = x + 1.21x = 2.21x = 8840. So x = 4000 and A = 4840.",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "Divide Rs. 8840 between A and B so that A's amount after 8 years equals B's amount after… → Rs. 4840  [Trick: If time differs by 2 years, shares must differ by the 2-year compound factor.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Different Yearly Rates",
    "type": "Tricky Exam MCQ",
    "question": "A sum of Rs. 12000 is invested for 3 years at 10%, 12% and 15% compound interest rates for the first, second and third years respectively. Find the amount.",
    "options": [
      "Rs. 16934.40",
      "Rs. 17000",
      "Rs. 17250",
      "Rs. 17500"
    ],
    "correctIndex": 0,
    "hint": "Different rates: multiply each rate factor year by year.",
    "tutor": "Amount = 12000 × 1.10 × 1.12 × 1.15 = Rs. 16934.40.",
    "optionExplanations": [
      "Correct. Amount = 12000 × 1.10 × 1.12 × 1.15 = Rs. 16934.40.",
      "Not correct — \"Rs. 17000\" does not follow from the right working. Apply the method shown in the solution above.",
      "\"Rs. 17250\" is a distractor; recheck your steps — the correct working leads to \"Rs. 16934.40\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A sum of Rs. 12000 is invested for 3 years at 10%, 12% and 15% compound interest rates fo… → Rs. 16934.40  [Trick: Different rates: multiply each rate factor year by year.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Borrowing and Lending",
    "type": "Tricky Exam MCQ",
    "question": "A person borrows Rs. 20000 at 5% simple interest and lends it at 5% compound interest compounded annually. What is his gain after 2 years?",
    "options": [
      "Rs. 25",
      "Rs. 50",
      "Rs. 100",
      "Rs. 150"
    ],
    "correctIndex": 1,
    "hint": "Gain = CI received - SI paid.",
    "tutor": "SI paid = 20000 × 5 × 2 / 100 = Rs. 2000. CI received = 20000[(1.05)^2 - 1] = Rs. 2050. Gain = 2050 - 2000 = Rs. 50.",
    "optionExplanations": [
      "Not correct — \"Rs. 25\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. SI paid = 20000 × 5 × 2 / 100 = Rs. 2000. CI received = 20000[(1.05)^2 - 1] = Rs. 2050. Gain = 2050 - 2000 = Rs. 50.",
      "\"Rs. 100\" is a distractor; recheck your steps — the correct working leads to \"Rs. 50\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A person borrows Rs. 20000 at 5% simple interest and lends it at 5% compound interest com… → Rs. 50  [Trick: Gain = CI received - SI paid.]"
  },
  {
    "unit": "Unit 9 – Compound Interest",
    "topic": "Depreciation",
    "type": "Tricky Exam MCQ",
    "question": "A machine depreciates by 10% in the first year and 20% in the second year. If its original value is Rs. 50000, find its value after 2 years.",
    "options": [
      "Rs. 35000",
      "Rs. 36000",
      "Rs. 38000",
      "Rs. 40000"
    ],
    "correctIndex": 1,
    "hint": "Successive depreciation: multiply by remaining value factors.",
    "tutor": "Value = 50000 × 0.90 × 0.80 = Rs. 36000.",
    "optionExplanations": [
      "Not correct — \"Rs. 35000\" does not follow from the right working. Apply the method shown in the solution above.",
      "Correct. Value = 50000 × 0.90 × 0.80 = Rs. 36000.",
      "\"Rs. 38000\" is a distractor; recheck your steps — the correct working leads to \"Rs. 36000\".",
      "Not the right result — this usually comes from a small slip in the working. Compare your steps with the solution above."
    ],
    "revisionNote": "A machine depreciates by 10% in the first year and 20% in the second year. If its origina… → Rs. 36000  [Trick: Successive depreciation: multiply by remaining value factors.]"
  }
];
