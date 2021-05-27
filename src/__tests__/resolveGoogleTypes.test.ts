import { resolveFileType, resolveMime, resolveName } from "../index";

describe("resolves Google file types", () => {
  test("resolveFileType", () => {
    expect(resolveFileType(".google-apps.spreadsheet").mime).toBe(
      "application/vnd.google-apps.spreadsheet"
    );
  });

  test("resolveMime", () => {
    expect(resolveMime("application/vnd.google-apps.shortcut").fileType).toBe(
      ".google-apps.shortcut"
    );
  });

  test("Resolve name test", () => {
    expect(resolveName("Google Slides")[0].fileType).toBe(".google-apps.presentation");
  });
});
