/*
 * MIT License
 *
 * Copyright (c) 2018 SmartestEE Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/01/16        Wang Jian
 */

import { TabNavigator } from 'react-navigation';
// import Main from './pages/Main';
import Broadcast from './pages/Broadcast';
import Mine from './pages/Mine';
import Trends from './pages/Trends';
import Video from './pages/Video';


const Tabs = TabNavigator({
  HOME: {
    screen: Broadcast,
  },
  Video: {
    screen: Video,
  },
  Trends: {
    screen: Trends,
  },
  Mine: {
    screen: Mine,
  },
}, {
  tabBarPosition: 'bottom',
  style: {
    backgroundColor: 'white',
  },
  swipeEnabled: false,
  labelStyle: {
    backgroundColor: 'black',
  },
  tabBarOptions: {
    showIcon: 'true',
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    },
  },
});

const Navigations = {
  Main: { screen: Tabs },
};

export default Navigations;
