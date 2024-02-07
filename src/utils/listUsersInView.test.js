import listUsersInView from "./listUsersInView";
import { USER_LIST } from "./constants";

describe("listUsersInView()", () => {
  it("tests player at 50,50 with 0x0 view", () => {
    const result = listUsersInView(Object.values(USER_LIST), 50, 50, 0, 0);
    expect(result).toStrictEqual([]);
  });

  it("tests player at with 0,0 with 0x0 view", () => {
    const result = listUsersInView(Object.values(USER_LIST), 0, 0, 0, 0);
    expect(result).toStrictEqual([{ ...USER_LIST['user-2'], "distanceToPlayer": 0 }]);
  });

  it("tests player at with 0,0 with 150x150 view", () => {
    const result = listUsersInView(Object.values(USER_LIST), 0, 0, 150, 150);
    expect(result).toStrictEqual([{ ...USER_LIST['user-2'], "distanceToPlayer": 0 }]);
  });

  it("tests player at with 0,0 with 1500x1476 view", () => {
    const result = listUsersInView(Object.values(USER_LIST), 0, 0, 1500, 1476);
    expect(result).toStrictEqual([
      { ...USER_LIST['user-2'], "distanceToPlayer": 0 },
      { ...USER_LIST['user-3'], "distanceToPlayer": 800000 },
    ]);
  });

  it("tests player at with 2000,1500 with 150000x150000 view", () => {
    const result = listUsersInView(Object.values(USER_LIST), 2000, 1500, 150000, 150000);
    expect(result).toStrictEqual([
      { ...USER_LIST['user-7'], "distanceToPlayer": 112500 },
      { ...USER_LIST['user-5'], "distanceToPlayer": 1250000 },
      { ...USER_LIST['user-6'], "distanceToPlayer": 1260425 },
      { ...USER_LIST['user-4'], "distanceToPlayer": 2600000 },
      { ...USER_LIST['user-3'], "distanceToPlayer": 3050000 },
      { ...USER_LIST['user-1'], "distanceToPlayer": 4072500 },
      { ...USER_LIST['user-2'], "distanceToPlayer": 6250000 },
    ]);
  });
});
