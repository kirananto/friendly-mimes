import { resolveName } from "../index";

test("Resolve name test", () => {
  expect(resolveName("MPEG-4 Audio")[0].fileType).toBe(".mp4a");
});
