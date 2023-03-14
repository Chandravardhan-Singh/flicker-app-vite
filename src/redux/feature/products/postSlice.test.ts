import productsReducer, { createPost, loadPost } from "./postSlice";
const posts = [
  {
    post: "one",
  },
  {
    post: "one",
  },
  {
    post: "one",
  },
];
describe("products reducer", () => {
  it("should return the initial state when passed an empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = productsReducer(initialState, action);
    expect(result).toEqual({
      posts: [],
    });
  });
  it("should return length 1", () => {
    const initialState = undefined;
    const action = createPost({ post: "one" });
    const result = productsReducer(initialState, action);
    expect(result.posts.length).toEqual(1);
  });
});
