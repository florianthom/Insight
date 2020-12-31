import { createAction } from "@reduxjs/toolkit";

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export type INCREMENT_COUNTER = typeof INCREMENT_COUNTER;

export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export type DECREMENT_COUNTER = typeof DECREMENT_COUNTER;

const increment = createAction("INCREMENT");
