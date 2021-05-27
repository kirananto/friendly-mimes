import { resolveFileType } from "../index";

test("resolveFileType Test", () => {
  expect(resolveFileType(".mp4").mime).toBe("video/mp4");
});
