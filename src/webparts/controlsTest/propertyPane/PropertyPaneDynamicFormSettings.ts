import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneField,
  PropertyPaneFieldType
} from '@microsoft/sp-property-pane';
import { IPropertyPaneCustomFieldProps } from '@microsoft/sp-property-pane';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { IDynamicFormSettings } from '../IControlsTestWebPartProps';
import { DynamicFormSettings, IDynamicFormSettingsProps } from './controls/DynamicFormSettings';

export interface IPropertyPaneDynamicFormSettingsProps {
  settings: IDynamicFormSettings;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPropertyChange: (propertyPath: string, newValue: IDynamicFormSettings) => void;
  disabled?: boolean;
  wpContext: WebPartContext;  
}

export interface IPropertyPaneDynamicFormSettingsInternalProps extends IPropertyPaneDynamicFormSettingsProps, IPropertyPaneCustomFieldProps {
}

export class PropertyPaneDynamicFormSettings implements IPropertyPaneField<IPropertyPaneDynamicFormSettingsProps> {
  public type: PropertyPaneFieldType = PropertyPaneFieldType.Custom;
  public targetProperty: string;
  public properties: IPropertyPaneDynamicFormSettingsInternalProps;
  private elem: HTMLElement;

  constructor(targetProperty: string, properties: IPropertyPaneDynamicFormSettingsProps) {
    this.targetProperty = targetProperty;
    this.properties = {
      key: "dfSettings",
      settings: properties.settings,
      wpContext: properties.wpContext,
      onPropertyChange: properties.onPropertyChange,
      disabled: properties.disabled,
      onRender: this.onRender.bind(this),
      onDispose: this.onDispose.bind(this)
    };
  }

  public render(): void {
    if (!this.elem) {
      return;
    }

    this.onRender(this.elem);
  }

  private onDispose(element: HTMLElement): void {
    ReactDom.unmountComponentAtNode(element);
  }

  private onRender(elem: HTMLElement): void {
    if (!this.elem) {
      this.elem = elem;
    }

    const element: React.ReactElement<IDynamicFormSettingsProps> = React.createElement(DynamicFormSettings, {
      settings: this.properties.settings,
      wpContext: this.properties.wpContext,
      onChange: this.onChange.bind(this),
      disabled: this.properties.disabled,
      // required to allow the component to be re-rendered by calling this.render() externally
      // stateKey: new Date().toString()
    });
    ReactDom.render(element, elem);
  }

  private onChange(newSettings: IDynamicFormSettings): void {
    this.properties.onPropertyChange(this.targetProperty, newSettings);
  }
}