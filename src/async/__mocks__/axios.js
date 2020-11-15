export default {
  get: jest.fn(() => Promise.resolve({ data: "yyx" })),
  post: jest.fn(() => Promise.resolve({ data: "yyx" })),
};
