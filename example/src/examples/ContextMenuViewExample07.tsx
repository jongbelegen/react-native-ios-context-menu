import * as React from 'react';

import { ContextMenuView } from 'react-native-ios-context-menu';

import type { ContextMenuExampleProps } from './SharedExampleTypes';
import { ContextMenuCard } from '../components/ContextMenuCard';


export function ContextMenuViewExample07(props: ContextMenuExampleProps) {
  return (
    <ContextMenuView
      style={props.style}
      menuConfig={{
        menuTitle: 'ContextMenuViewSimpleExample07',
        menuItems: [{
          actionKey  : 'key-01',
          actionTitle: 'Action #1',
          icon: {
            iconType : 'SYSTEM',
            iconValue: 'folder',
          }
        }, {
          menuTitle: 'Submenu...',
          menuOptions: ['displayInline', 'destructive'],
          menuItems: [{
            actionKey  : 'key-01-01',
            actionTitle: 'Submenu Action #1',
            icon: {
              iconType : 'SYSTEM',
              iconValue: 'star',
            }
          }, {
            actionKey  : 'key-01-02',
            actionTitle: 'Submenu Action #2',
            icon: {
              iconType : 'SYSTEM',
              iconValue: 'star.lefthalf.fill',
            }
          }, {
            actionKey  : 'key-01-03',
            actionTitle: 'Submenu Action #3',
            icon: {
              iconType : 'SYSTEM',
              iconValue: 'star.fill',
            }
          }]
        }],
      }}
    >
      <ContextMenuCard
        index={props.index}
        title={'ContextMenuViewExample07'}
        subtitle={'displayInline + destructive submenu'}
        description={[
          `Same as Example #3 but the submenu has "destructive" and "displayInline" in it's menuOptions.`,
          `This looks the same as "displayInline" submenu (i.e Example #5).`
        ]}
      />
    </ContextMenuView>
  );
};