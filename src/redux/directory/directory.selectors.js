import {
    createSelector
} from 'reselect'

const GetDirectory = (state) => state.directory;

export const GetAllItems = createSelector(
    [GetDirectory],
    directory => directory.sections
);