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
            id: 'FEED_TAB',
            children: [
              {
                component: {
                  id: 'FEED_SCREEN',
                  name: 'Feed',
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

export const signinRoot: LayoutRoot = {
  root: {
    component: {
      id: 'PHONE_AUTH_SCREEN',
      name: 'PhoneAuth',
    },
  },
};

export const registrationRoot: LayoutRoot = {
  root: {
    component: {
      id: 'USER_DATA_REGISTRATION_SCREEN',
      name: 'UserDataRegistration',
    },
  },
};
