import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import { locale } from '~client/app/application/shared/modules/date-fns';

export type TypeScalarID = string;
export type TypeScalarFloat = number;
export type TypeScalarDateTime = string;
export type TypeScalarDate = string;

export class ScalarID {
  constructor(public id: TypeScalarID) {}
}

export class ScalarFloat {
  constructor(public float: TypeScalarFloat) {}
}

/**
 * ISO 8601準拠 YYYY-MM-DDTHH:mm:ss.sssZ
 * ex: 2011-10-05T14:48:00.000Z
 */
export class ScalarDateTime {
  constructor(public dateTime: TypeScalarDateTime) {}

  public getFormattedValue(formatString: string): string {
    const parsedISO = parseISO(this.dateTime);
    return format(parsedISO, formatString, { locale });
  }
}

/**
 * YYYY-MM-DD
 * ex: 2020-01-01
 */
export class ScalarDate {
  constructor(public date: TypeScalarDate) {}

  /**
   * @param formatString https://date-fns.org/v2.19.0/docs/format
   */
  public getFormattedValue(formatString: string): string {
    return format(new Date(this.date), formatString, { locale });
  }
}
