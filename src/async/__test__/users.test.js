import getUsers from "../users";

jest.mock("axios");
describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const result = getUsers();
    // eslint-disable-next-line jest/valid-expect
    await expect(result).resolves.toEqual("yyx");
  });
});
