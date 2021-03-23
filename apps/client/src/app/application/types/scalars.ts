export class ID {
  constructor(public id: string) {}
}

export class Float {
  constructor(public float: number) {}
}

/**
 * ISO 8601準拠 YYYY-MM-DDTHH:mm:ss.sssZ
 * ex: 2011-10-05T14:48:00.000Z
 */

export class DateTime {
  constructor(public dateTime: string) {}
}

/**
 * YYYY-MM-DD
 * ex: 2020-01-01
 */
export class Date {
  constructor(public date: string) {}
}
