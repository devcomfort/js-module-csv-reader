import * as fs from "fs";

/**
 *
 * @param {string} filename 파일 이름
 * @param {string} [encoding] 인코딩 (기본값: "utf-8")
 */
const read_csv = function (filename, encoding = "utf-8") {
  const _data = fs.readFileSync(filename, encoding);
  let _splited_data = (() => {
    if (_data.includes("\r\n")) return _data.split("\r\n");
    return _data.split(/(\n|\r)/);
  })();

  return _splited_data.map((strList) => strList.split(","));
};

/**
 *
 * @param {string} filename 파일 이름
 * @param {string} [encoding] 인코딩 (기본값: "utf-8")
 */
const read_csv_and_parse = function (filename, encoding = "utf-8") {
  return read_csv(filename, encoding).map((_row) =>
    _row.map((_col) => {
      return Number.isNaN(parseFloat(_col)) ? _col : parseFloat(_col);
    })
  );
};

export { read_csv, read_csv_and_parse };
