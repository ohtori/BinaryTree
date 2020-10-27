import { IBinaryMatch } from './types/IBinaryMatch';

export default class BinaryItem {
  public left: null | BinaryItem  = null
  public right: null | BinaryItem = null;
  public prev: null | BinaryItem = null;

  constructor(public data: IBinaryMatch) {}
}