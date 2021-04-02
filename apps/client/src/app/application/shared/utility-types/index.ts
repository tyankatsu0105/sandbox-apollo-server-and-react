import { EntityState } from '@reduxjs/toolkit';
export type PossibleNull<T extends unknown> = T | null;
export type PossibleUndefined<T extends unknown> = T | undefined;

/**
 * TS組み込みのNonNullableの逆
 */
export type Nullable<T extends unknown> = T | null | undefined;

export type Entities<Entity> = {
  entities: EntityState<Entity>['entities'];
  ids: EntityState<Entity>['ids'];
};
