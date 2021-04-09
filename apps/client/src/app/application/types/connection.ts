import * as UtilityTypes from '~client/app/application/shared/utility-types';

export type Nodes<Node> = Node[];

export type Cursor = string;

export type Edge<Node> = UtilityTypes.PossibleNull<{
  readonly cursor: Cursor;
  readonly node: Node;
}>;

export type TotalCount = number;

export type Connection<Node> = {
  edges: Edge<Node>[];
  nodes: Nodes<Node>;
  pageInfo: PageInfo;
  totalCount: TotalCount;
};

export type PageInfo = {
  endCursor?: UtilityTypes.Nullable<string>;
  hasNextPage?: UtilityTypes.Nullable<boolean>;
  hasPreviousPage?: UtilityTypes.Nullable<boolean>;
  startCursor?: UtilityTypes.Nullable<string>;
};
