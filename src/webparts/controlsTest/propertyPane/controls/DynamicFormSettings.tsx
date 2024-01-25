import * as React from 'react';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/components/Dropdown';
import { Spinner } from '@fluentui/react/lib/components/Spinner';
import { SPHttpClient } from "@microsoft/sp-http";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { ISPList } from '../../../../common/SPEntities';
import { IDynamicFormSettings } from '../../IControlsTestWebPartProps';
import { Icon, Label, Stack, TextField, Toggle, TooltipHost } from '@fluentui/react';

export interface IDynamicFormSettingsProps {
    settings: IDynamicFormSettings;
    wpContext: WebPartContext;
    onChange: (newSettings: IDynamicFormSettings) => void;
    disabled: boolean;
    //stateKey: string;
}

const loadListOptions = (wpContext: WebPartContext): Promise<IDropdownOption[]> => {
    return new Promise((resolve, reject) => {
        wpContext.spHttpClient.get(
            `${wpContext.pageContext.web.absoluteUrl}/_api/web/lists?$filter=Hidden eq false`, 
            SPHttpClient.configurations.v1
        ).then(async (response) => { 
            if (response.ok) {
                const lists = await response.json();
                const options: IDropdownOption[] = lists.value.map((list: ISPList) => {
                    return {
                        key: list.Id,
                        text: list.Title
                    };
                });
                resolve(options);
            } else {
                reject(response.statusText);
            }
        }).catch((error) => {
            reject(error);
        });
    });
} 

const loadContentTypes = (wpContext: WebPartContext, listId: string): Promise<IDropdownOption[]> => {
    return new Promise((resolve, reject) => {
        wpContext.spHttpClient.get(
            `${wpContext.pageContext.web.absoluteUrl}/_api/web/lists('${listId}')/contenttypes`, 
            SPHttpClient.configurations.v1
        ).then(async (response) => { 
            if (response.ok) {
                const contentTypes = await response.json();
                const options: IDropdownOption[] = contentTypes.value.map((ct) => {
                    return {
                        key: ct.Id.StringValue,
                        text: ct.Name
                    };
                });
                resolve(options);
            } else {
                reject(response.statusText);
            }
        }).catch((error) => {
            reject(error);
        });
    });
}

export const DynamicFormSettings = (props: IDynamicFormSettingsProps): JSX.Element => {  

    const [loading, setLoading] = React.useState<boolean>(false);
    const [listOptions, setListOptions] = React.useState<IDropdownOption[]>([]);
    const [loadingCts, setLoadingCts] = React.useState<boolean>(false);
    const [ctOptions, setCtOptions] = React.useState<IDropdownOption[]>([]);
    const [selectedListId, setSelectedListId] = React.useState<string>(props.settings?.listId);
    const [selectedContentTypeId, setSelectedContentTypeId] = React.useState<string>(props.settings?.contentTypeId);
    const [listItemId, setListItemId] = React.useState<string>(props.settings?.listItemId);
    const [errorDialogEnabled, setErrorDialogEnabled] = React.useState<boolean>(props.settings?.errorDialogEnabled);
    const [useClientSideValidation, setUseClientSideValidation] = React.useState<boolean>(props.settings?.clientSideValidationEnabled);
    const [useFieldValidation, setUseFieldValidation] = React.useState<boolean>(props.settings?.fieldValidationEnabled);
    const [useCustomFormatting, setUseCustomFormatting] = React.useState<boolean>(props.settings?.customFormattingEnabled);
    const [enableFileSelection, setEnableFileSelection] = React.useState<boolean>(props.settings?.fileSelectionEnabled);
    const settings = React.useRef<IDynamicFormSettings>(props.settings || {} as IDynamicFormSettings);
    
    React.useEffect(() => {
        setLoadingCts(true);
        setSelectedContentTypeId(undefined);
        loadContentTypes(props.wpContext, selectedListId).then((options: IDropdownOption[]) => {
            setCtOptions(options);
            if (options.find(o => o.key === selectedContentTypeId)) {
                setSelectedContentTypeId(selectedContentTypeId);
            } else {
                setSelectedContentTypeId(options[0].key.toString());
            }
            setLoadingCts(false);
        }).catch((error) => {
            console.error(error);
            setLoadingCts(false);
        });
    }, [selectedListId]);


    // React.useEffect(() => {
    //     settings.current.contentTypeId = selectedContentTypeId;
    // }, [selectedContentTypeId]);

    // React.useEffect(() => {
    //     settings.current.listItemId = listItemId;
    // }, [listItemId]);

    // React.useEffect(() => {
    //     settings.current.errorDialogEnabled = errorDialogEnabled;
    // }, [errorDialogEnabled]);

    // React.useEffect(() => {
    //     settings.current.clientSideValidationEnabled = useClientSideValidation;
    // }, [useClientSideValidation]);

    // React.useEffect(() => {
    //     settings.current.fieldValidationEnabled = useFieldValidation;
    // }, [useFieldValidation]);

    // React.useEffect(() => {
    //     settings.current.customFormattingEnabled = useCustomFormatting;
    // }, [useCustomFormatting]);

    // React.useEffect(() => {
    //     settings.current.fileSelectionEnabled = enableFileSelection;
    // }, [enableFileSelection]);

    React.useEffect(() => {
        if (!loading) props.onChange({
            listId: selectedListId,
            contentTypeId: selectedContentTypeId,
            listItemId,
            errorDialogEnabled,
            clientSideValidationEnabled: useClientSideValidation,
            fieldValidationEnabled: useFieldValidation,
            customFormattingEnabled: useCustomFormatting,
            fileSelectionEnabled: enableFileSelection
        } as IDynamicFormSettings);
    }, [loading, selectedListId, selectedContentTypeId, listItemId, errorDialogEnabled, useClientSideValidation, useFieldValidation, useCustomFormatting, enableFileSelection]);

    // on mount, load options
    React.useEffect(() => {
        setLoading(true);
        loadListOptions(props.wpContext).then((options: IDropdownOption[]) => {
            setListOptions(options);
            setLoading(false);
        }).catch((error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    return (
        <div style={{ margin: '20px 0', padding: 20, boxShadow: '0 0 5px #ccc' }}>
            <h2>Dynamic Form Settings</h2>
            {loading && <Spinner label="Loading options..." />}
            {!loading && (
                <>
                    <Dropdown
                        label="Select a list"
                        options={listOptions}
                        onChange={(e, option) => { setSelectedListId(option.key.toString()); }}
                        selectedKey={selectedListId}
                        disabled={props.disabled}
                    />
                    {loadingCts && <Spinner label="Loading content types..." />}
                    {!loadingCts && selectedListId && (
                        <Dropdown
                            label="Select a Content Type"
                            options={ctOptions}
                            onChange={(e, option) => { setSelectedContentTypeId(option.key.toString()); }}
                            selectedKey={selectedContentTypeId}
                            disabled={props.disabled}
                        />
                    )}
                    <TextField
                        type="number"
                        placeholder="Leave blank for New Form"
                        label="List ID"
                        onChange={(e, value) => { setListItemId(value); }}
                        disabled={props.disabled}
                    />
                    <Toggle
                        label="Enable error dialog"
                        checked={errorDialogEnabled}
                        onChange={(e, value) => { setErrorDialogEnabled(value); }}
                        disabled={props.disabled}
                    />
                    <Stack horizontal tokens={{ childrenGap: 10 }}>
                        <Label>Enable Client-Side Validation</Label>
                        <TooltipHost content="Enable formula evaluation (set when customising OOTB forms) for showing and hiding fields in the form">
                            <Icon iconName="Info" />
                        </TooltipHost>
                    </Stack>
                    <Toggle
                        checked={useClientSideValidation}
                        onChange={(e, value) => { setUseClientSideValidation(value); }}
                        disabled={props.disabled}
                    />
                    <Stack horizontal tokens={{ childrenGap: 10 }}>
                        <Label>Enable Field Validation</Label>
                        <TooltipHost content="Enable formula evaluation (set in list and column settings) to ensure field inputs meet configured rules">
                            <Icon iconName="Info" />
                        </TooltipHost>
                    </Stack>
                    <Toggle
                        checked={useFieldValidation}
                        onChange={(e, value) => { setUseFieldValidation(value); }}
                        disabled={props.disabled}
                    />
                    <Stack horizontal tokens={{ childrenGap: 10 }}>
                        <Label>Enable Custom Formatting</Label>
                        <TooltipHost content="Enable custom formatting (configured when customizing OOTB forms). DynamicForm will attempt to render custom header, body, footer.">
                            <Icon iconName="Info" />
                        </TooltipHost>
                    </Stack>
                    <Toggle
                        checked={useCustomFormatting}
                        onChange={(e, value) => { setUseCustomFormatting(value); }}
                        disabled={props.disabled}
                    />
                    <Toggle
                        label="Enable File Selection"
                        checked={enableFileSelection}
                        onChange={(e, value) => { setEnableFileSelection(value); }}
                        disabled={props.disabled}
                    />
                </>
            )}
        </div>
    );
}