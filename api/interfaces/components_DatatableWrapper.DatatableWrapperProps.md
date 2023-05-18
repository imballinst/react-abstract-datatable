[react-abstract-datatable](../README.md) / [components/DatatableWrapper](../modules/components_DatatableWrapper.md) / DatatableWrapperProps

# Interface: DatatableWrapperProps<TTableRowType\>

[components/DatatableWrapper](../modules/components_DatatableWrapper.md).DatatableWrapperProps

The props that can be passed to the `DatatableWrapper` component.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TTableRowType` | extends [`TableRowType`](../modules/helpers_types.md#tablerowtype) |

## Table of contents

### Properties

- [body](components_DatatableWrapper.DatatableWrapperProps.md#body)
- [checkboxProps](components_DatatableWrapper.DatatableWrapperProps.md#checkboxprops)
- [children](components_DatatableWrapper.DatatableWrapperProps.md#children)
- [filterProps](components_DatatableWrapper.DatatableWrapperProps.md#filterprops)
- [headers](components_DatatableWrapper.DatatableWrapperProps.md#headers)
- [isControlled](components_DatatableWrapper.DatatableWrapperProps.md#iscontrolled)
- [paginationOptionsProps](components_DatatableWrapper.DatatableWrapperProps.md#paginationoptionsprops)
- [paginationProps](components_DatatableWrapper.DatatableWrapperProps.md#paginationprops)
- [sortProps](components_DatatableWrapper.DatatableWrapperProps.md#sortprops)
- [tableComponents](components_DatatableWrapper.DatatableWrapperProps.md#tablecomponents)
- [tableEventsRef](components_DatatableWrapper.DatatableWrapperProps.md#tableeventsref)

## Properties

### body

• **body**: `TTableRowType`[]

#### Defined in

[components/DatatableWrapper.tsx:205](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L205)

___

### checkboxProps

• `Optional` **checkboxProps**: [`TableCheckboxParameters`](components_DatatableWrapper.TableCheckboxParameters.md)

#### Defined in

[components/DatatableWrapper.tsx:217](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L217)

___

### children

• **children**: `ReactNode`

The rest of the table, including its controls.

#### Defined in

[components/DatatableWrapper.tsx:203](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L203)

___

### filterProps

• `Optional` **filterProps**: [`TableFilterParameters`](components_DatatableWrapper.TableFilterParameters.md)

#### Defined in

[components/DatatableWrapper.tsx:213](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L213)

___

### headers

• **headers**: [`TableColumnType`](helpers_types.TableColumnType.md)<`TTableRowType`\>[]

#### Defined in

[components/DatatableWrapper.tsx:204](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L204)

___

### isControlled

• `Optional` **isControlled**: `boolean`

**`deprecated`**

This prop is deprecated; now the table is automatically set as controlled
when any of the child components is provided `controlledProps`.

#### Defined in

[components/DatatableWrapper.tsx:212](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L212)

___

### paginationOptionsProps

• `Optional` **paginationOptionsProps**: [`TablePaginationOptionsParameters`](components_DatatableWrapper.TablePaginationOptionsParameters.md)

#### Defined in

[components/DatatableWrapper.tsx:216](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L216)

___

### paginationProps

• `Optional` **paginationProps**: [`TablePaginationParameters`](components_DatatableWrapper.TablePaginationParameters.md)

#### Defined in

[components/DatatableWrapper.tsx:215](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L215)

___

### sortProps

• `Optional` **sortProps**: [`TableSortParameters`](components_DatatableWrapper.TableSortParameters.md)<`TTableRowType`\>

#### Defined in

[components/DatatableWrapper.tsx:214](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L214)

___

### tableComponents

• `Optional` **tableComponents**: `Object`

Table components.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Button?` | (`props`: `any`) => ``null`` \| `Element` |
| `ButtonGroup?` | (`props`: `any`) => ``null`` \| `Element` |
| `Col?` | (`props`: `any`) => ``null`` \| `Element` |
| `FormGroup?` | (`props`: `any`) => ``null`` \| `Element` |
| `HelperText?` | (`props`: `any`) => ``null`` \| `Element` |
| `Icon?` | (`props`: { `icon`: ``"times"`` \| ``"sort"`` \| ``"sort-up"`` \| ``"sort-down"``  }) => ``null`` \| `Element` |
| `InputGroup?` | (`props`: `any`) => ``null`` \| `Element` |
| `Label?` | (`props`: `any`) => ``null`` \| `Element` |
| `Row?` | (`props`: `any`) => ``null`` \| `Element` |
| `Table?` | (`props`: `any`) => ``null`` \| `Element` |
| `Checkbox?` | (`props`: `Pick`<`any`, `string` \| `number` \| `symbol`\> & `RefAttributes`<`HTMLInputElement`\>) => ``null`` \| `Element` |
| `FormControl?` | (`props`: `Pick`<`any`, `string` \| `number` \| `symbol`\> & `RefAttributes`<`HTMLInputElement`\>) => ``null`` \| `Element` |
| `Select?` | (`props`: `Pick`<`any`, `string` \| `number` \| `symbol`\> & `RefAttributes`<`HTMLSelectElement`\>) => ``null`` \| `Element` |

#### Defined in

[components/DatatableWrapper.tsx:228](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L228)

___

### tableEventsRef

• `Optional` **tableEventsRef**: `MutableRefObject`<`undefined` \| [`UncontrolledTableEvents`](components_DatatableWrapper.UncontrolledTableEvents.md)\>

**`deprecated`**

Usage of `tableEventsRef` is deprecated. Consider using `useDatatableWrapper`
and raising the `DatatableWrapper` a bit higher in the structure instead.

#### Defined in

[components/DatatableWrapper.tsx:224](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/DatatableWrapper.tsx#L224)
