import * as UtilityTypes from '~client/app/application/shared/utility-types';

export type Connection<Node> = {
  edges: Edge<Node>[];
  nodes: Node[];
  pageInfo: PageInfo;
  totalCount: TotalCount;
};

export type Edge<Node> = UtilityTypes.PossibleNull<{
  readonly cursor: string;
  readonly node: Node;
}>;

export type PageInfo = {
  endCursor: UtilityTypes.Nullable<string>;
  hasNextPage: UtilityTypes.Nullable<boolean>;
  hasPreviousPage: UtilityTypes.Nullable<boolean>;
  startCursor: UtilityTypes.Nullable<string>;
};

export type TotalCount = number;
