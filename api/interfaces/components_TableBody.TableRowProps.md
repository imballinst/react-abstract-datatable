[react-abstract-datatable](../README.md) / [components/TableBody](../modules/components_TableBody.md) / TableRowProps

# Interface: TableRowProps<TTableRowType\>

[components/TableBody](../modules/components_TableBody.md).TableRowProps

The props for the `TableRow` component.

## Type parameters

| Name | Type |
| :------ | :------ |
| `TTableRowType` | extends [`TableRowType`](../modules/helpers_types.md#tablerowtype) |

## Table of contents

### Properties

- [classes](components_TableBody.TableRowProps.md#classes)
- [controlledProps](components_TableBody.TableRowProps.md#controlledprops)
- [rowData](components_TableBody.TableRowProps.md#rowdata)
- [rowIdx](components_TableBody.TableRowProps.md#rowidx)
- [rowProps](components_TableBody.TableRowProps.md#rowprops)

### Methods

- [onRowClick](components_TableBody.TableRowProps.md#onrowclick)

## Properties

### classes

• `Optional` **classes**: `Omit`<[`TableBodyClasses`](components_TableBody.TableBodyClasses.md), ``"tbody"``\>

Classes for the rows and columns.

#### Defined in

[components/TableBody.tsx:157](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L157)

___

### controlledProps

• `Optional` **controlledProps**: [`TableBodyControlledProps`](components_TableBody.TableBodyControlledProps.md)

Props to make the component controlled.

#### Defined in

[components/TableBody.tsx:159](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L159)

___

### rowData

• **rowData**: `TTableRowType`

The row data.

#### Defined in

[components/TableBody.tsx:148](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L148)

___

### rowIdx

• **rowIdx**: `number`

The row index.

#### Defined in

[components/TableBody.tsx:150](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L150)

___

### rowProps

• `Optional` **rowProps**: [`HtmlTrProps`](../modules/components_TableBody.md#htmltrprops) \| (`row`: `TTableRowType`) => [`HtmlTrProps`](../modules/components_TableBody.md#htmltrprops)

Props to the `tr` element.

#### Defined in

[components/TableBody.tsx:161](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L161)

## Methods

### onRowClick

▸ `Optional` **onRowClick**(`row`, `event`): `void`

Optional row on click event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `TTableRowType` |
| `event` | `MouseEvent`<`HTMLTableRowElement`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[components/TableBody.tsx:152](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L152)
