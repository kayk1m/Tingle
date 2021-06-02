import { LayoutRoot } from 'react-native-navigation';

export const mainRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      id: 'MAIN_ROOT',
      options: {
        bottomTabs: {
          titleDisplayMode: 'alwaysShow',
        },
      },
      children: [
        {
          stack: {
            id: 'HOME_TAB',
            children: [
              {
                component: {
                  id: 'HOME_SCREEN',
                  name: 'Home',
                },
              },
            ],
            options: {
              bottomTab: {
                text: '동행찾기',
                icon: require('./assets/Icon/Solid/users.png'),
              },
            },
          },
        },
        {
          stack: {
            id: 'CHAT_TAB',
            children: [
              {
                component: {
                  id: 'CHAT_LIST_SCREEN',
                  name: 'ChatList',
                },
              },
            ],
            options: {
              bottomTab: {
                text: '채팅',
                icon: require('./assets/Icon/Solid/chat.png'),
              },
            },
          },
        },
        {
          stack: {
            id: 'BOARD_TAB',
            children: [
              {
                component: {
                  id: 'BOARD_LIST_SCREEN',
                  name: 'BoardList',
                },
              },
            ],
            options: {
              bottomTab: {
                text: '게시판',
                icon: require('./assets/Icon/Solid/view-grid.png'),
              },
            },
          },
        },
        {
          stack: {
            id: 'MENU_TAB',
            children: [
              {
                component: {
                  id: 'MENU_SCREEN',
                  name: 'Menu',
                },
              },
            ],
            options: {
              bottomTab: {
                text: '메뉴',
                icon: require('./assets/Icon/Solid/view-list.png'),
              },
            },
          },
        },
      ],
    },
  },
};

export const signinRoot = {
  root: {
    component: {
      name: 'Signin',
    },
  },
};
