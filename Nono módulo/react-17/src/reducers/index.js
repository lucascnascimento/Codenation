import { combineReducers } from "redux";

import app from "./app";
import auth from "./auth";
import content from "./content";
import user from "./user";

export default combineReducers({ app, auth, content, user });
