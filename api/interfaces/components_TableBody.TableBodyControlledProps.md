[react-abstract-datatable](../README.md) / [components/TableBody](../modules/components_TableBody.md) / TableBodyControlledProps

# Interface: TableBodyControlledProps

[components/TableBody](../modules/components_TableBody.md).TableBodyControlledProps

## Table of contents

### Properties

- [checkboxState](components_TableBody.TableBodyControlledProps.md#checkboxstate)
- [filteredDataLength](components_TableBody.TableBodyControlledProps.md#filtereddatalength)
- [onCheckboxChange](components_TableBody.TableBodyControlledProps.md#oncheckboxchange)

## Properties

### checkboxState

• `Optional` **checkboxState**: `Record`<`string`, [`CheckboxState`](helpers_types.CheckboxState.md)\>

A record, which key is the column prop name and the value
is of type `CheckboxState`.

#### Defined in

[components/TableBody.tsx:37](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L37)

___

### filteredDataLength

• `Optional` **filteredDataLength**: `number`

The filtered data length. When not using filter control,
then this should equal to the table body's length.

#### Defined in

[components/TableBody.tsx:44](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L44)

___

### onCheckboxChange

• `Optional` **onCheckboxChange**: [`CheckboxOnChange`](../modules/helpers_types.md#checkboxonchange)

The function fired when any checkbox in the table changes.

#### Defined in

[components/TableBody.tsx:39](https://github.com/imballinst/react-abstract-datatable/blob/master/src/components/TableBody.tsx#L39)
