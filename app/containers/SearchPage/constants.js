/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_SEARCHTERMS = 'boilerplate/Home/CHANGE_SEARCHTERMS';
export const LOAD_STORIES = 'boilerplate/Search/LOAD_STORIES';
export const LOAD_STORIES_SUCCESS = 'boilerplate/Search/LOAD_STORIES_SUCCESS';
export const LOAD_STORIES_ERROR = 'boilerplate/Search/LOAD_STORIES_ERROR';
export const CHANGE_PAGE = 'boilerplate/Search/CHANGE_PAGE';
export const CHANGE_PAGE_SUCCESS = 'boilerplate/Search/CHANGE_PAGE_SUCCESS';