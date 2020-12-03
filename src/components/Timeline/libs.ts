import { Project } from "./Timeline";

/**
 * Return most early date from projects list
 * @param {ReadonlyArray<Project>} projects
 * @return {Date}
 */
export function getBeginYear(projects: ReadonlyArray<Project>): Date {
  const begin = projects.reduce((previousValue, currentValue) => {
    const [prevYear, prevMonth] = previousValue.begin.split("/");
    const [currYear, currMonth] = currentValue.begin.split("/");

    return new Date(parseInt(prevYear), parseInt(prevMonth)) <
      new Date(parseInt(currYear), parseInt(currMonth))
      ? previousValue
      : currentValue;
  }).begin;

  const [year, month] = begin.split("/");

  return new Date(parseInt(year), parseInt(month));
}

/**
 * Return most last date from projects list
 * @param {ReadonlyArray<Project>} projects
 * @return {Date}
 */
export function getEndYear(projects: ReadonlyArray<Project>): Date {
  const end = projects.reduce((previousValue, currentValue) => {
    const [prevYear, prevMonth] = previousValue.end.split("/");
    const [currYear, currMonth] = currentValue.end.split("/");

    return new Date(parseInt(prevYear), parseInt(prevMonth)) <
      new Date(parseInt(currYear), parseInt(currMonth))
      ? currentValue
      : previousValue;
  }).end;

  const [year, month] = end.split("/");

  return new Date(parseInt(year), parseInt(month));
}
