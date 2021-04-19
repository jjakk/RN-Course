import { createAppContainer } from 'react-navigaton';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    tite: 'Business Search'
  }
});

export default createAppContainer(navigator);