import 'react-native';
import React from 'react';
import Feed from '../src/screens/main/Feed';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Feed componentId="" />);
});
