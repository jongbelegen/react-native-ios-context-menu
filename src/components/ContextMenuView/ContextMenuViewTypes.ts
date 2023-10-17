import type React from 'react';
import type { ViewProps } from 'react-native';

import type { TSEventEmitter } from '@dominicstop/ts-event-emitter';
import type { KeyMapType } from 'react-native-ios-utilities';

import type { RNIContextMenuViewProps } from '../../native_components/RNIContextMenuView';

import type { OnMenuDidHideEventObject } from '../../types/MenuEvents';
import type { DeferredElementProvider } from '../../types/MenuSharedTypes';


export type RenderItem = () => React.ReactElement;

export type ContextMenuViewBaseProps = Partial<Pick<RNIContextMenuViewProps,  
  | 'menuConfig'
  | 'previewConfig'
  | 'auxiliaryPreviewConfig'
  | 'shouldUseDiscoverabilityTitleAsFallbackValueForSubtitle'
  | 'isContextMenuEnabled'
  | 'isAuxiliaryPreviewEnabled'

  // Lifecycle Events
  | 'onMenuWillShow'
  | 'onMenuWillHide'
  | 'onMenuWillCancel'
  | 'onMenuDidShow'
  | 'onMenuDidHide'
  | 'onMenuDidCancel'
  | 'onMenuAuxiliaryPreviewWillShow'
  | 'onMenuAuxiliaryPreviewDidShow'

  // `OnPress` Events
  | 'onPressMenuItem'
  | 'onPressMenuPreview'
  
    // Internal
  | 'internalCleanupMode'
>> & {
  lazyPreview?: boolean;
  useActionSheetFallback?: boolean;
  shouldWaitForMenuToHideBeforeFiringOnPressMenuItem?: boolean;
  shouldEnableAggressiveCleanup?: boolean;

  onRequestDeferredElement?: DeferredElementProvider;

  renderPreview?: RenderItem;
  renderAuxiliaryPreview?: RenderItem;
};

export type ContextMenuViewProps = 
  ContextMenuViewBaseProps & ViewProps;

export type ContextMenuViewState = {
  menuVisible: boolean;
  mountPreview: boolean;
};

export enum ContextMenuEmitterEvents {
  onMenuDidHide = "onMenuDidHide",
};

export type ContextMenuEmitterEventMap = KeyMapType<ContextMenuEmitterEvents, {
  onMenuDidHide: OnMenuDidHideEventObject['nativeEvent'],
}>

export type ContextMenuEventEmitter = 
  TSEventEmitter<ContextMenuEmitterEvents, ContextMenuEmitterEventMap>;