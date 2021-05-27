import { resolveMime } from "../index";

test("resolveMime", () => {
  expect(resolveMime("application/mp4").fileType).toBe(".mp4");
});
