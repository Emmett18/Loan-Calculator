describe("calculate monthly rate with positives", function () {
  it("should calculate the monthly rate correctly", function () {
    expect(
      calculateMonthlyPayment({ amount: 17000, years: 10, rate: 4.8 })
    ).toEqual("178.65");
  });

  it("should return a result with 2 decimal places", function () {
    expect(
      calculateMonthlyPayment({ amount: 10043, years: 8, rate: 5.8 })
    ).toEqual("131.00");
  });
});

describe("calculate monthly rate with negatives", function () {
  it("should calculate the monthly rate correctly with negative interest", function () {
    expect(
      calculateMonthlyPayment({ amount: 17000, years: 10, rate: -4.8 })
    ).toEqual("110.10");
  });

  it("should calculate the monthly rate correctly with negative years", function () {
    expect(
      calculateMonthlyPayment({ amount: 17000, years: -10, rate: 4.8 })
    ).toEqual("-110.65");
  });
});
