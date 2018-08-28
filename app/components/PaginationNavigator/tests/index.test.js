import React from 'react';
import { shallow } from 'enzyme';

import PaginationNavigator from '../PaginationNavigator';

describe('<PaginationNavigator {...props}/>', () => {
  describe('With 20 or less total stories.', () => {
    it('should render a single span with the text of 1 with 1 page of results', () => {
      const PNprops = {
        page: 1,
        totalStories: 20,
        onGetPage: () => {}
      };
      const renderedComponent = shallow(<PaginationNavigator {...PNprops} />);
      expect(renderedComponent.find('span.pagination-nav__control').length).toBe(1);
    });
  });

  describe('with more than 1 page of stories, but less than 10..', () => {
    it('should render 6 buttons and 1 span when 6 pages are available, and we are on page 1.', () => {
      const PNprops = {
        page: 1,
        totalStories: 120,
        onGetPage: () => {}
      };
      const renderedComponent = shallow(<PaginationNavigator {...PNprops} />);
      expect(renderedComponent.find('span.pagination-nav__control').length).toBe(1);
      expect(renderedComponent.find('button.pagination-nav__control').length).toBe(6);
    });

    it('should render 7 buttons and 1 span when 6 pages are available, and we are not on page 1.', () => {
      const PNprops = {
        page: 3,
        totalStories: 120,
        onGetPage: () => {}
      };
      const renderedComponent = shallow(<PaginationNavigator {...PNprops} />);
      expect(renderedComponent.find('span.pagination-nav__control').length).toBe(1);
      expect(renderedComponent.find('button.pagination-nav__control').length).toBe(7);
    });

    it('should render 10 buttons and 1 span when there are 165 total results, and we are on page 1', () => {
      const PNprops = {
        page: 1,
        totalStories: 165,
        onGetPage: () => {}
      };
      const renderedComponent = shallow(<PaginationNavigator {...PNprops} />);
      expect(renderedComponent.find('span.pagination-nav__control').length).toBe(1);
      expect(renderedComponent.find('button.pagination-nav__control').length).toBe(9);
    });
  });

  describe('With 200 or more stories.', () => {
    it('should render 10 buttons and 1 span when 10 or more pages are available, and we are on page 1.', () => {
      const PNprops = {
        page: 1,
        totalStories: 500,
        onGetPage: () => {}
      };
      const renderedComponent = shallow(<PaginationNavigator {...PNprops} />);
      expect(renderedComponent.find('span.pagination-nav__control').length).toBe(1);
      expect(renderedComponent.find('button.pagination-nav__control').length).toBe(10);
    });

    it('should render 11 buttons and 1 span when 10 or more pages are available, and we are not on page 1.', () => {
      const PNprops = {
        page: 5,
        totalStories: 500,
        onGetPage: () => {}
      };
      const renderedComponent = shallow(<PaginationNavigator {...PNprops} />);
      expect(renderedComponent.find('span.pagination-nav__control').length).toBe(1);
      expect(renderedComponent.find('button.pagination-nav__control').length).toBe(11);
    });
  });
});
