import { createAction } from "@reduxjs/toolkit";

export const add = createAction('contacts/add');

export const remove = createAction('contacts/remove');

export const change = createAction('filter/change');