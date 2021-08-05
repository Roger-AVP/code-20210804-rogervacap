"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../src/models/User");
let user = User_1.User.convertToUserObject({
    "Gender": "Male",
    "HeightCm": 171,
    "WeightKg": 96
});
test('calcule BMI', () => {
    user.calculeBMI();
    expect(user.BMI).toBe(32.83061454806607);
});
test('get BMI with two decimals', () => {
    user.calculeBMI();
    expect(user.getBMI).toBe("32.83");
});
test('convert Height To Meters', () => {
    expect(user.convertHeightToMeters(175)).toBe(1.75);
});
test('define category', () => {
    expect(user.convertHeightToMeters(175)).toBe(1.75);
});
//# sourceMappingURL=user.test.js.map