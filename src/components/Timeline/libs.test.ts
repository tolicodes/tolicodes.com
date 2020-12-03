import { getBeginYear, getEndYear } from "./libs";
import { Project } from "./Timeline";

const projects: ReadonlyArray<Project> = [
  {
    title: "Lemon",
    begin: "2001/01",
    end: "2013/05",
    iconUrl: "https://via.placeholder.com/100?text=Lemon",
    tag: "Startups",
  },
  {
    title: "RMS",
    begin: "2014/01",
    end: "2014/12",
    iconUrl: "https://via.placeholder.com/100?text=RMS",
    tag: "Startups",
  },
  {
    title: "Datrixo",
    begin: "2011/02",
    end: "2013/05",
    iconUrl: "https://via.placeholder.com/100?text=Project+Name",
    tag: "Startups",
  },
  {
    title: "PreMinder",
    begin: "2015/01",
    end: "2017/12",
    iconUrl: "https://via.placeholder.com/100?text=PreMinder",
    tag: "Startups",
  },
];

describe("Test component helper functions", () => {
  test("getBeginYear", () => {
    const date = getBeginYear(projects);
    expect(date.getUTCFullYear()).toBe(2001);
    expect(date.getUTCMonth()).toBe(0);
  });

  test("getEndYear", () => {
    const date = getEndYear(projects);
    expect(date.getUTCFullYear()).toBe(2017);
    expect(date.getUTCMonth()).toBe(11);
  });
});
