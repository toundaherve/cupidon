import { Friend } from "./Friend";
import { Match } from "./Match";

export interface State {
  matches: Array<Match>;
  friends: Array<Friend>;
}
