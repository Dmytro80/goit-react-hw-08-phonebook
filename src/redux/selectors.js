import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectValueFilter = state => state.filter.query;

export const selectVisibleContacts = createSelector(
  [selectValueFilter, selectContacts],
  (query, contacts) => {
    const normalizedFilter = query.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  }
);
