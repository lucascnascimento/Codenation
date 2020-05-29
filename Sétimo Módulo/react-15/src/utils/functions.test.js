import { fetchPosts } from "./functions";

describe("Assynchronous functions", () => {
  it("Should return the posts from a user", async () => {
    const post = await fetchPosts(1);
    console.log(post);
  });
});
